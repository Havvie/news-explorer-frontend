import './SuccessModal.css';

function SuccessModal({ isOpen, onClose, onSwitchToLogin }) {
    return (
        <section className={`success-modal ${isOpen ? 'success-modal_opened' : ''}`}>
            <div className='success-modal__container'>
                <button
                    type='button'
                    className='success-modal__close'
                    onClick={onClose}
                    aria-label='Close modal'
                 />

                 <h2 className='success-modal__title'>
                    Registration successfully completed!
                 </h2>

                 <button
                    type='button'
                    className='success-modal__button'
                    onClick={onSwitchToLogin}
                 >
                    Sign in
                 </button>
             </div>
         </section>
    );
}

export default SuccessModal;