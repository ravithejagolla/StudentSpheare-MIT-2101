import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_KEY);

export const getCheckout = async (req, res, next) => {
  try {
    const user = await req.user.populate('cart.items.productId').execPopulate();
    const products = user.cart.items;
    const total = products.reduce((sum, p) => sum + p.quantity * p.productId.price, 0);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: products.map(p => ({
        name: p.productId.title,
        description: p.productId.description,
        amount: p.productId.price * 100, // Stripe requires amounts in cents
        currency: 'usd',
        quantity: p.quantity,
      })),
      success_url: `${req.protocol}://${req.get('host')}/checkout/success`,
      cancel_url: `${req.protocol}://${req.get('host')}/checkout/cancel`,
    });

    res.status(200).json({
      message: 'Checkout session created successfully',
      sessionId: session.id,
      products: products,
      totalSum: total,
    });
  } catch (err) {
    next(new Error(err));
  }
};

exports.getCheckoutSuccess = async (req, res, next) => {
  try {
    const user = await req.user.populate('cart.items.productId').execPopulate();
    const products = user.cart.items.map(i => ({
      quantity: i.quantity,
      product: { ...i.productId._doc },
    }));

    const order = new Order({
      user: {
        email: req.user.email,
        userId: req.user,
      },
      products: products,
    });

    await order.save();
    await req.user.clearCart();

    res.status(200).json({
      message: 'Order placed successfully',
      redirectUrl: '/orders',
    });
  } catch (err) {
    next(new Error(err));
  }
};
