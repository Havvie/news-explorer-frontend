import { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './LoginModal.css';

function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [isValid, setIsValid] = useState(false);

  // Validates email
  const validateEmail = (value) => {
    if (!value) return 'Email is required';

    const regex = /^\S+@\S+\.\S+$/;
    if (!regex.test(value)) return 'Invalid email address';

    return '';
  };

  // Validate password
  const validatePassword = (value) => {
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  // Handle changes
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

  useEffect(() => {
    if (!emailError && !passwordError && email && password) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, password, emailError, passwordError]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!isValid) {
      return;
    }

    console.log('Sign in submitted:', { email, password });
  };

  return (
    <ModalWithForm
      title="Sign in"
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Sign in"
      isValid={isValid}
      footerText="or"
      footerLinkText="Sign up"
      onFooterLinkClick={onSwitchToRegister}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="login-email">
        Email
      </label>
      <input
        id="login-email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter email"
        className="modal__input"
        required
      />
      {emailError && <span className="modal__error">{emailError}</span>}

      <label className="modal__label" htmlFor="login-password">
        Password
      </label>
      <input
        id="login-password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
        className="modal__input"
        required
      />
      {passwordError && <span className="modal__error">{passwordError}</span>}
    </ModalWithForm>
  );
}

export default LoginModal;
