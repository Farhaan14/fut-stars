import React from 'react';

const Login = (props) => {

    const { email , setEmail, password, setPassword, handleLogin,  handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props;

    return(
        <section className="container">
            <div class="form_content">

<h3>Fut Stars </h3>
<br></br>
<br></br>
<p> Fut Stars  provides the
teams with an opportunity to infuse their squad
with new talent. The players which would be
drafted by their teams would provide an instant
boost to them; while others might not. But the
chance that drafted players will lead their new
clubs to glory makes teams compete over talent.
</p>
</div>
            <div className="login-form">
                <div>
                    {hasAccount ? (
                        <h3>Sign In</h3>
                    ) : (
                        <h3>Sign Up</h3>
                    )
                    }
                </div>
                 
                <label>Username</label>
                 
                <input
                type="text"
                autoFocus
                requiredvalue={email}
                onChange ={(e) => setEmail(e.target.value)}
                />

                <p className="errorMsg">{emailError}</p>
                 
                <label>Password</label>
                 
                <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                
                <p className="errorMsg">{passwordError}</p>
                
                {/* <div className="btnContainer"> */}
                    {hasAccount ? (
                        <>
                             
                            <button onClick ={handleLogin} className="sign"> Sign In</button>
                             
                            <p className="switch">Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)} className="sign-in"> Sign Up</span></p>
                             
                            {/* <span style={{display: 'none'}}>
                            {document.getElementById("h3").innerHTML = "Sign In"}
                            </span> */}

                        </>

                    ) : (

                        <>
                             
                            <button onClick = {handleSignup} className="sign"> Sign Up</button>
                             
                            <p className="switch"> Have an account ? <span onClick ={() => setHasAccount(!hasAccount)} className="sign-in">Sign In</span></p>
                             
                            {/* <span style={{opacity: '0'}}> */}
                            {/* {document.getElementById("h3").innerHTML = "Sign Up"} */}
                            {/* </span> */}

                        </>

                    )}

                {/* </div> */}

            </div>

        </section>
    )
}

export default Login;