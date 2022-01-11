import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
export const LogInPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue]= useState('');
    const [passwordValue, setPasswordValue]= useState('');
    
    const history = useNavigate();

    const onLogInClicked = async () => {
        alert('log in not implemented yet')
    }
    
    return (
      <div>
            <h1>Log In ...</h1>
            {errorMessage && <div>{errorMessage}</div>}
            <input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="someone@gmail.com" />
            <input
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="password" />
            <hr />
            <button
                disabled={!emailValue || !passwordValue}
                onClick={onLogInClicked}>Log In</button>
            <button onClick={() => history('/forgot-password')}>Forgot your password?</button>
            <button onClick={() => history('/signup')}>Don't have an account? Sign Up</button>
      </div>
    )
}