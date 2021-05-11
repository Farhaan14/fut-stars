import React, {useState, useEffect} from "react";
import fire from '../pages/fire';
import Login from './Login';
import '../pages/Login.css';
import Home from '../pages/Home';

const LoginMain = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
  

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }
    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }


    const handleLogin = () => {
        clearErrors();
      fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err => {
        switch(err.code){
          case "auth/inavlid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      })
    }
  
  
    const handleSignup = () => {
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch(err => {
          switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
            
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
            default:
              break;
          }
        })
    }


const authListener = () => {
fire.auth().onAuthStateChanged((user) => {
        if(user) {
            clearInputs();
            setUser(user);
        } else {
            setUser("");
        }
});
}

useEffect(() =>{
    authListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

return (
    
    <div className="LoginMain">
      {user ? (
        <Home />
      ) : (
        <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        />


      )}
        
        
    </div>
)


  }

  export default LoginMain;