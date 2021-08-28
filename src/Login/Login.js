import { Label } from '@material-ui/icons'
import React,{useState,useContext} from 'react'
import {FirebaseContext} from '../store/FirebaseContext'
import {Link, useHistory} from 'react-router-dom'
import './Login.css'

const Login = () => {

    const {firebase} = useContext(FirebaseContext)

    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    const history = useHistory();

    const handleSignIn = (e) =>{
        e.preventDefault();
        console.log(email);
        console.log(password);
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            console.log("Logged");
            history.push('/')
        }).catch((err)=>{
            // alert(err.message)
            alert("Invalid username or password!")
        })
    }

    return (
        <div className="login-container">
            <img src="/images/amazon_logo_black.png" alt="logo" className="login-logo" />
            <div className="login">
            <form onSubmit={handleSignIn}>
                <p className="login-head">Sign-In</p>
                <div className="input">
                    <label><b>Email</b></label>
                    <input type="text" value={email} name="email"
                            onChange={(e)=>setEmail(e.target.value)} required/>
                </div>    
                <div className="input">
                    <label><b>Password</b></label>
                    <input type="password" value={password} name="password" 
                            onChange={(e)=>setPassword(e.target.value)} required/>
                </div>            
                <button type="submit">Sign In</button>
                <p className="login-info">By continuing, you agree to Amazon's <span className="login-link">Conditions of Use</span> and <span className="login-link">Privacy Notice.</span></p>
                <p className="login-help">Need help?</p>
                </form>
            </div>
            <div className="login-new">
                <div className="horizontal-line"></div>
                <p>New to Amazon?</p>   
                <Link to="/signup" className="create-account-btn">Create your Amazon account</Link>
            </div>
            
            <div className="footer">

            </div>
        </div>
    )
}

export default Login
