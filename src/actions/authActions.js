import Swal from 'sweetalert2';
import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';

export const startLoginWithEmail = (email, password) => {
    return (dispatch) => {
        dispatch(setLoadingAction(true));
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(loginAction(user.uid, user.displayName));
                dispatch(setLoadingAction(false));
            })
            .catch(error => {
                console.log(error);
                dispatch(setLoadingAction(false));
                Swal.fire('Error!', error?.message, 'error');
            });
    }
};

export const registerWithEmailAndPassword = (email, password, name) => {
    return (dispatch) => {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                console.log(user);
                dispatch(loginAction(user.uid, user.displayName));
            })
            .catch(error => Swal.fire('Error!', error?.message, 'error'));
    }
};

export const startGoogleLogin = () => {
    // Dispatch comes from redux-thunk
    return dispatch => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(loginAction(user.uid, user.displayName));
            });
    }
};

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logoutAction());
    };
};

export const loginAction = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const setLoadingAction = (isLoading) => ({
    type: isLoading ? types.uiStartLoading : types.uiFinishLoading,
    payload: {
        loading: isLoading,
    }
});

export const logoutAction = () => ({
    type: types.logout
});
