import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyCNzBTOvUdzIKTDHy2mmsBOe4VN3PgNaOE",
    authDomain: "sakecflix.firebaseapp.com",
    projectId: "sakecflix",
    storageBucket: "sakecflix.appspot.com",
    messagingSenderId: "804081300812",
    appId: "1:804081300812:web:bf6d648ef1647949efcbe9"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  
  const provider = new GoogleAuthProvider()

  export const signInWithGoogle = () => {
      signInWithPopup(auth, provider)
      .then((result) => {
          console.log(result);
      })
      .catch((error) => {
          console.log(error);
      });
      
  };