import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from "./uiActionTypes";

export function login(email, password) {
    return {
        type: LOGIN,
        user: {email, password}
    }
}

export const loggedIn = (email, password) => dispatch(login(email,password));

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
