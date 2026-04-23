import { Link } from 'react-router-dom';
import menuIcon from '../../assets/menu-dark.svg';
import closeIcon from '../../assets/close.svg';
import logoutIconDark from '../../assets/logout-dark.svg';
import logoutIconLight from '../../assets/logout-light.svg';
import './Navigation.css';

function Navigation({
  theme = 'dark',
  showSavedLink = false,
  showUser = false,
  onSignInClick,
  onLogout,
  isMobileMenuOpen = false,
  onMobileMenuOpen,
  onMobileMenuClose,
}) {
  const logoutIcon = theme === 'dark' ? logoutIconLight : logoutIconDark;

  return (
    <>
      <nav className={`navigation navigation_theme_${theme}`}>
        <div className='navigation__desktop'>
          <Link to='/' className='navigation__link'>
            Home
          </Link>

          {showSavedLink && (
            <Link to='/saved-news' className='navigation__link'>
              Saved articles
            </Link>
          )}

          {showUser ? (
            <button
              type='button'
              className='navigation__button navigation__button_logged-in'
              onClick={onLogout}
            >
              <span className='navigation__username'>Elise</span>
              <img
                src={logoutIcon}
                alt='Log out'
                className='navigation__logout-icon'
              />
            </button>
          ) : (
            <button
              type='button'
              className='navigation__button'
              onClick={onSignInClick}
            >
              Sign In
            </button>
          )}
        </div>

        <button
          type='button'
          className='navigation__mobile-button'
          onClick={isMobileMenuOpen ? onMobileMenuClose : onMobileMenuOpen}
          aria-label='Toggle navigaition menu'
        >
          <img
            src={isMobileMenuOpen ? closeIcon : menuIcon}
            alt=''
            className='navigation__mobile-icon'
          />
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className='navigation__mobile-menu'>
          <div className='navigation__mobile-header'>
            <span className='navigation__mobile-logo'>NewsExplorer</span>

            <button
              type='button'
              className='navigation__mobile-close'
              onClick={onMobileMenuClose}
              aria-label='Close navigation menu'
            >
              <img
                src={closeIcon}
                alt=''
                className='navigation__mobile-icon'
              />
            </button>
          </div>

          <div className='navigation__mobile-links'>
            <Link 
                to='/' 
                className='navigation__mobile-link'
                onClick={onMobileMenuClose}
            >
              Home
            </Link>

            {!showUser ? (
              <>
                <Link 
                    to='/saved-news' 
                    className='navigation__mobile-link'
                    onClick={onMobileMenuClose}
                >
                  Saved articles
                </Link>

                <button 
                    type='button' 
                    className='navigation__mobile-signin'
                    onClick={() => {
                      onMobileMenuClose();
                      onLogout();
                    }}
                >
                  Elise
                </button>
              </>
            ) : (
            <button
                type='button'
                className='navigation__mobile-signin'
                onClick={() => {
                    onMobileMenuClose();
                    onSignInClick();
                }}
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;