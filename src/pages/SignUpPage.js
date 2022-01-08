import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
export const SignUpPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue]= useState('');
    const [passwordValue, setPasswordValue]= useState('');
    const [confirmPasswordValue, setConfirmPasswordValue]= useState('');

    const history = useNavigate();

    const onSignUpClicked = async () => {
        alert('sign up not implemented yet')
    }
    
    return (
      <div>
            <h1>Sign Up</h1>
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
                <input
                type="password"
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                placeholder="password" />
            <hr />
            <button
                disabled={
                    !emailValue || !passwordValue ||
                    passwordValue !== confirmPasswordValue
                }
                onClick={onSignUpClicked}>Sign Up</button>
            <button onClick={() => history('/login')}>Already have an account? Sign In</button>
      </div>
    )
}