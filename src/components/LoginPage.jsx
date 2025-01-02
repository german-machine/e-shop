import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { Storefront } from '@mui/icons-material';
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "./Firebase";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const signIn = async (e) => {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/')
        } catch (err) {
            alert('User does not exist')
            console.warn(err.message);
        }
    }

    const register = async (e) => {
        e.preventDefault()

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/')
        } catch (err) {
            alert('Registeration successful')
            console.warn(err.message);
        }
    }

    return (
        <div className="login">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <Storefront className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">eShop</h2>
                </div>
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing in, you agree to the eShop Website Conditions of Use & Sale. Please see our Privacy Policy, Cookie Policy, and our Interest-Based Ads Policy if you're unsure what this means.
                </p>

                <button className="login_resigsterButton" onClick={register}>Create your eShop Account</button>
            </div>
        </div>
    )
}


export default LoginPage
