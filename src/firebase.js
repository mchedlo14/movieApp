import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import Cookies from 'js-cookie';

const firebaseConfig = {
    apiKey: "AIzaSyDK0GK16KXtT3y2WSgvfbp1vc_hEX6lV2U",
    authDomain: "movie-f883d.firebaseapp.com",
    projectId: "movie-f883d",
    storageBucket: "movie-f883d.appspot.com",
    messagingSenderId: "436286281703",
    appId: "1:436286281703:web:33852b044ef85f70184f42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider).then((result) => {
//         const email = result.user.email
//         Cookies.set('user_email', email);
//     }).catch(error => {
//         console.log(error)
//     })
// }