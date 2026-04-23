import { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './RegisterModal.css';

function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [isValid, setIsValid] = useState(false);

  const validateEmail = (value) => {
    if (!value) return 'Email is required';

    const regex = /^\S+@\S+\.\S+$/;
    if (!regex.test(value)) return 'Invalid email address';

    return '';
  };

  const validatePassword = (value) => {
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  const validateUsername = (value) => {
    if (!value) return 'Username is required';
    if (value.length < 2) return 'Username must be at least 2 characters';
    return '';
  };

  const handleEmailChange = (evt) => {
    const value = evt.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handlePasswordChange = (evt) => {
    const value = evt.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  const handleUsernameChange = (evt) => {
    const value = evt.target.value;
    setUsername(value);
    setUsernameError(validateUsername(value));
  };

  useEffect(() => {
    if (
      !emailError &&
      !passwordError &&
      !usernameError &&
      email &&
      password &&
      username
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, password, username, emailError, passwordError, usernameError]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!isValid) {
      return;
    }

    console.log('Register submitted:', { email, password, username });
  };

  return (
    <ModalWithForm
      title="Sign up"
      name="register"
      isOpen={isOpen}
      onClose={onClose}
      isValid={isValid}
      footerText="or"
      footerLinkText="Sign in"
      onFooterLinkClick={onSwitchToLogin}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="register-email">
        Email
      </label>
      <input
        id="register-email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter email"
        className="modal__input"
        required
      />
      {emailError && <span className="modal__error">{emailError}</span>}

      <label className="modal__label" htmlFor="register-password">
        Password
      </label>
      <input
        id="register-password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
        className="modal__input"
        required
      />
      {passwordError && <span className="modal__error">{passwordError}</span>}

      <label className="modal__label" htmlFor="register-username">
        Username
      </label>
      <input
        id="register-username"
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Enter your username"
        className="modal__input"
        required
      />
      {usernameError && <span className="modal__error">{usernameError}</span>}
    </ModalWithForm>
  );
}

export default RegisterModal;
