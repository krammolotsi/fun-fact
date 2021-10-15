//import { useState, useContext, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import FirebaseContext from '../context/firebase';
//import * as ROUTES from '../constants/routes';

export default function Login() {
  // const history = useHistory();
  // const { firebase } = useContext(FirebaseContext);

  // const [emailAddress, setEmailAddress] = useState('');
  // const [password, setPassword] = useState('');

  // const [error, setError] = useState('');
  // const isInvalid = password === '' || emailAddress === '';

  // const handleLogin = async (event) => {
  //   event.preventDefault();

  //   try {
  //     await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
  //     history.push(ROUTES.DASHBOARD);
  //   } catch (error) {
  //     setEmailAddress('');
  //     setPassword('');
  //     setError(error.message);
  //   }
  // };

  // useEffect(() => {
  //   document.title = 'Login - Instagram';
  // }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <p>Login</p>
    </div>
  );
}
