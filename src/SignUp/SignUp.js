import React,{useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import { FirebaseContext } from '../store/FirebaseContext'
import './SignUp.css'
import {useHistory} from 'react-router-dom'

const SignUp = () => {

    const history = useHistory();

    const [name,setName] = useState('')
    const [mobile,setMobile] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const {firebase} =useContext(FirebaseContext)

    const handleSignUp =(e) =>{
        // console.log(name,mobile,email,password);
        e.preventDefault();
        console.log(firebase);
        
        firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
            result.user.updateProfile({displayName:name}).then(()=>{
            
                firebase.firestore().collection('users').add({
                    id:result.user.uid,
                    name:name,
                    mobile:mobile
                })
                .then(()=>{
                    console.log("PUSHED");
                    history.push('/login')
                })
                
            })
        })
        
    }

    return (
        <div className="signup-container">
            <img src="/images/amazon_logo_black.png" alt="logo" className="login-logo" />
            <div className="signup">
            <form onSubmit={handleSignUp}>
                <h2 className="signup-head">Create Account</h2>
                <div className="input">
                    <label><b>Your name</b></label>
                    <input type="text" value={name} name="name"
                            onChange={(e)=>setName(e.target.value)} required/>
                </div>    
                <div className="input">
                    <label><b>Mobile number</b></label>
                    <input type="text" value={mobile} name="mobile" 
                            onChange={(e)=>setMobile(e.target.value)} required/>
                </div>  
                <div className="input">
                <label><b>Email (optional)</b></label>
                    <input type="email" value={email} name="email"
                            onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className="input">
                <label><b>Password</b></label>
                    <input type="password" value={password} name="password"
                            onChange={(e)=>setPassword(e.target.value)} required/>
                </div>          
                
                <p className="signup-info pw">Passwords must be at least 6 characters.</p>
                <p className="signup-info">We will send you a text to verify your phone.
                    Message and Data rates may apply.</p>
                <button type="submit" className="signup-btn">Sign Up</button>

                <div className="signup-info">
                <div className="horizontal-line"></div>
                <p className="signup-info">Already have an account?<Link to="/login" className="signup-link"> Sign in</Link></p>
                <p className="signup-info">Buying for work? <span className="signup-link">Create a free business account</span></p>   
                
            </div>
            </form>
            </div>
            
            <div className="footer">
                <div className="footer-line"></div>

            </div>
        </div>
    )
}

export default SignUp
