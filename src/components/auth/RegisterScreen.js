import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { registerWithEmailAndPassword } from '../../actions/authActions';
import { removeErrorAction, setErrorAction } from '../../actions/uiActions';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { ui: { messageError } } = useSelector(state => state);

    const [formValues, handleInputChange] = useForm({
        username: 'Hernando',
        email: 'hernando@gmail.com',
        password: '123456',
        confirmpassword: '123456'
    });

    const { username, email, password, confirmpassword } = formValues;

    const handleRegister = (evt) => {
        evt.preventDefault();
        if (isFormValid()) {
            dispatch(registerWithEmailAndPassword(email, password, username));
        }
        // dispatch(startLoginWithEmail(email, password));
    };

    const isFormValid = () => {
        if (!username.trim().length) {
            dispatch(setErrorAction('Name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setErrorAction('Email is not valid'));
            return false;
        } else if (password !== confirmpassword || password.length < 6) {
            dispatch(setErrorAction('Password and confirm password should match and have at least 6 characters'));
            return false;
        }

        dispatch(removeErrorAction());
        return true;
    };

    return (
        <>
            <h3 className='auth__title'>RegisterScreen</h3>
            <form onSubmit={handleRegister}>
                {
                    messageError &&
                    <div className="auth__alert-error">
                        {messageError}
                    </div>
                }
                <input
                    type='text'
                    className='auth__input'
                    autoComplete='off'
                    placeholder='Name'
                    name='username'
                    value={username}
                    onChange={handleInputChange} />

                <input
                    type='text'
                    className='auth__input'
                    autoComplete='off'
                    placeholder='Name'
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

                <input
                    type='password'
                    className='auth__input'
                    placeholder='Confirm Password'
                    name='confirmpassword'
                    value={confirmpassword}
                    onChange={handleInputChange} />


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
