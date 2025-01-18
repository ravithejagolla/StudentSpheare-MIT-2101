import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>

            {/* <div className='shadow-xl'>
                <div className='flex justify-around container mx-auto p-3'>
                    <div className='w-1/4 text-center'>
                        <Link to="/" className="hover:text-purple-600 text-[20px]">Masai</Link>
                    </div>
                    <div className='flex justify-around w-1/2'>
                        <NavLink className="hover:text-purple-600 text-[20px]" to="/">Home</NavLink>
                        <NavLink className="hover:text-purple-600 text-[20px]" to="/blog">Blog</NavLink>
                        <NavLink className="hover:text-purple-600 text-[20px]" to="/products">Products</NavLink>
                        <NavLink className="hover:text-purple-600 text-[20px]" to="/contact">Contact</NavLink>
                        <NavLink className="hover:text-purple-600 text-[20px]" to="/register">Register</NavLink>
                    </div>
                </div>

            </div> */}

            <div className="bg-gray-200 h-[90px] shadow-xl">
                <div className="container mx-auto flex justify-between items-center p-3">
                    {/* Logo Section */}
                    <div className="w-1/4 text-center">
                        <NavLink to="/" className="hover:text-purple-600">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAaVBMVEX///+jHzSKi4z89/icABSeAB/ixci+dH2hESvr2NqdAByhFi6zV2L37/CcABakITbIjJO+v7+EhYbMzMzv3uDr6+vLk5mfACTWrLCWAACaAAeuRlS5aHLz5+jTpaqbAA3Gh4/lzM98fX4g7gTHAAABz0lEQVR4nO3dwU5TQQCGURAoUBWxolgEW3n/h3R9+43JjYXGyjnrP7P4dm0md05OAAAAAAAAAAAA4Aicjf3F6CWP+tNsln2TXK/PBx5+TFePw9V6MRl9HI42y+lRt+Ojfk5Xi+FqnvX1vk2WpwPvP0xXl1ej1cVOk5vR6PTT9Khv96PR/fedJhfDs2ZZahKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmtTxNbm9uRo4322yGa3meTi6Jovt7cD213R1N1zNs306tiZHQJPSpDQpTUqT0qQ0KU1Kk9KkNKmDNzn7OrR7w+tuaN9fd/McvMnn59XA85fparFeDmweX6FAHb7J6t3AarfJ8D+lq8tXKFCalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVLzmjxuRtcQd79Z97aaPI2vq04vtb6xJrNoUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSf0/TWa9NzrLvPdG536zbviS6GG+WTf3ndgDH/WiZwEAAAAAAAAAAMC/6DcAbJjOtbltGAAAAABJRU5ErkJggg=="
                                alt="Logo"
                                width="100"
                                height="50"
                                className="inline-block align-text-top"
                            />
                        </NavLink>
                    </div>

                    {/* Navbar Links */}
                    <div className="flex justify-around w-1/2 items-center">
                        <NavLink
                            className="hover:text-purple-600 text-[18px] font-bold"
                            to="/"
                            activeClassName="text-purple-600"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="hover:text-purple-600 text-[18px] font-bold"
                            to="/blog"
                            activeClassName="text-purple-600"
                        >
                            Blog
                        </NavLink>
                        <div className="relative group">
                            <NavLink
                                className="hover:text-purple-600 text-[18px] font-bold cursor-pointer"
                                to="#"
                            >
                                Products
                            </NavLink>
                            <div className="hidden group-hover:block absolute bg-white shadow-lg p-2">
                                <NavLink
                                    className="block hover:text-purple-600 text-[16px]"
                                    to="/products/electronic"
                                >
                                    Electronic
                                </NavLink>
                                <NavLink
                                    className="block hover:text-purple-600 text-[16px]"
                                    to="/products/furniture"
                                >
                                    Furniture
                                </NavLink>
                                <NavLink
                                    className="block hover:text-purple-600 text-[16px]"
                                    to="/products/books"
                                >
                                    Books
                                </NavLink>
                                <NavLink
                                    className="block hover:text-purple-600 text-[16px]"
                                    to="/products/food"
                                >
                                    Food & Beverages
                                </NavLink>
                                <NavLink
                                    className="block hover:text-purple-600 text-[16px]"
                                    to="/products/costumes"
                                >
                                    Costumes
                                </NavLink>
                            </div>
                        </div>
                        <NavLink
                            className="hover:text-purple-600 text-[18px] font-bold"
                            to="/profile"
                            activeClassName="text-purple-600"
                        >
                            Profile
                        </NavLink>
                        <NavLink
                            className="hover:text-purple-600 text-[18px] font-bold"
                            to="/contact"
                            activeClassName="text-purple-600"
                        >
                            Contact Us
                        </NavLink>
                    </div>

                    {/* Login Button */}
                    <div className="w-1/4 text-right">
                        <NavLink
                            to="/register"
                            className="hover:bg-purple-600 text-[18px] px-4 py-2 bg-gray-300 rounded"
                            activeClassName="bg-purple-600 text-white"
                        >
                            Register
                        </NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar