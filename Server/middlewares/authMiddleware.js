
import jwt from 'jsonwebtoken';

// Middleware function to verify the JWT
export const authMiddleware = (req, res, next) => {
  // Get the token from the Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ msg: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];
  const jwt_password=process.env.JWT_PASSWORD
  try {
    
    const decoded = jwt.verify(token, jwt_password);

    req.user = {
      id: decoded.id,
      email: decoded.email,
    };

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};


