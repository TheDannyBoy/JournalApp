import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginWithEmail, startGoogleLogin } from '../../actions/authActions';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
    const googleImage = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg';
    const dispatch = useDispatch();
    const { ui: { loading } } = useSelector(currentState => currentState);

    const [formValues, handleInputChange] = useForm({
        email: 'hernando@gmail.com',
        password: '123456'
    });
    const { email, password } = formValues;

    const handleLogin = (evt) => {
        evt.preventDefault();
        console.log(email, password);
        dispatch(startLoginWithEmail(email, password));
    };

    const handleGoogleLogin = () => dispatch(startGoogleLogin(email, password));

    return (
        <>
            <h3 className='auth__title'>LoginScreen</h3>
            <form onSubmit={handleLogin}>
                <input
                    type='text'
                    className='auth__input'
                    autoComplete='off'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={handleInputChange} />
                <input
                    type='password'
                    className='auth__input'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={handleInputChange} />
                <button
                    type='submit'
                    className='btn btn__primary btn__block'
                    disabled={loading}
                >
                    Login
                </button>

                <hr />

                <div className='auth__social_networks'>
                    <p>Login with Social Networks</p>
                    <div className='google-btn' onClick={handleGoogleLogin}>
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
