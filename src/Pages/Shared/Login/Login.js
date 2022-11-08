import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200 text-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                   

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                        <h1 className="text-3xl font-bold">Login</h1>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p>New user?   
                                    <Link to='/signup' className="label-text-alt text-lg text link link-hover ml-3">Sign Up</Link>  </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-outline">Login</button>
                            {/* <button className="btn btn-primary">Login</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;