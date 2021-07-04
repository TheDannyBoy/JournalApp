import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
    const googleImage = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg';

    return (
        <>
            <h3 className='auth__title'>LoginScreen</h3>
            <form>
                <input
                    type='text'
                    className='auth__input'
                    autoComplete='off'
                    placeholder='Email'
                    name='email' />
                <input
                    type='password'
                    className='auth__input'
                    placeholder='Password'
                    name='password' />
                <button
                    type='submit'
                    className='btn btn__primary btn__block'
                >
                    Login
                </button>

                <hr />

                <div className='auth__social_networks'>
                    <p>Login with Social Networks</p>
                    <div className='google-btn'>
                        <div className='google-icon-wrapper'>
                            <img className='google-icon' src={googleImage} alt='google button' />
                        </div>
                        <p className='btn-text'>
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link
                    to='/auth/register'
                    className='link'
                >
                    Create New Account
                </Link>
            </form>
        </>
    )
}
