import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBMxnWvrztmyZmfs7Y0A2jaGnMTgb_CgzQ',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredPassword,
          returnSecureToken: false
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => {
      return res.data
    })
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength={"7"} ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
