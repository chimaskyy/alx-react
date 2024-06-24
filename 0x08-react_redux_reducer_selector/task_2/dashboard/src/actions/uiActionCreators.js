import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from "./uiActionTypes";

export function login(email, password) {
    return {
        type: LOGIN,
        user: {email, password}
    }
}

export const boundLogin = (email, password) => dispatch(login(email,password));

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function loginRequest(email, password) {
  return (dispatch) => {
    boundLogin(email, password);

    return fetch("http://localhost:8564/login-success.json")
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
}
export function logout(){
    return {
        type: LOGOUT
    }
}
export const loggedOut = () => dispatch(logout())

export function displayNotificationDrawer(){
    return {
        type: DISPLAY_NOTIFICATION_DRAWER
    }
}
export const displayNotif = () => dispatch(displayNotificationDrawer())

export function hideNotificationDrawer(){
    return {
        type: HIDE_NOTIFICATION_DRAWER
    }
}
export const hideNotif = () => dispatch(hideNotificationDrawer());
