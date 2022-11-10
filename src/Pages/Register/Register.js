import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center py-5">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className='mx-auto py-2 '>Already an Account?<Link to='/Login' className='text-orrange-600 text-bold'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;