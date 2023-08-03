import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { Container, Heading } from '@/components/shared';
import { auth } from '@/firebase';
import { HOME } from '@/router/routes';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(HOME);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <div className="works">
      <Container>
        <Heading>Login</Heading>
        <form>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Login;

