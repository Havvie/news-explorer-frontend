import { useEffect } from 'react';
import './ModalWithForm.css';

function ModalWithForm({
  title,
  name,
  isOpen,
  onClose,
  children,
  buttonText,
  isValid = false,
  footerText,
  footerLinkText,
  onFooterLinkClick,
  onSubmit,
}) {
  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
    }

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? 'modal_opened' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container">
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close login form"
        >
          ×
        </button>

        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" onSubmit={onSubmit} noValidate>
          {children}

          <button
            type="submit"
            className={`modal__submit ${isValid ? 'modal__submit_active' : ''}`}
            disabled={!isValid}
          >
            {buttonText}
          </button>

          {(footerText || footerLinkText) && (
            <p className="modal__switch">
              {footerText}{' '}
              <button
                type="button"
                className="modal__switch-button"
                onClick={onFooterLinkClick}
              >
                {footerLinkText}
              </button>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;