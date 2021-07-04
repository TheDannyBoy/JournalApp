import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <>
            <h3 className='auth__title'>RegisterScreen</h3>
            <form>
                <input
                    type='text'
                    className='auth__input'
                    autoComplete='off'
                    placeholder='Name'
                    name='name' />
                <input
                    type='password'
                    className='auth__input'
                    placeholder='Password'
                    name='password' />
                <input
                    type='password'
                    className='auth__input'
                    placeholder='Confirm Password'
                    name='confirmpassword' />

                <button
                    type='submit'
                    className='btn btn__primary btn__block mb-5'
                >
                    Register
                </button>

                <hr />

                <Link
                    to='/auth/register'
                    className='link'
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}
