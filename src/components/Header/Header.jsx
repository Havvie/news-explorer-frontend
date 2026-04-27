import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ 
    theme = 'dark', 
    showSavedLink = false, 
    showUser = false,
    onSignInClick,
    onLogout,
    isMobileMenuOpen = false,
    onMobileMenuOpen,
    onMobileMenuClose,
}) {
    return (
        <header className={`header header_theme_${theme}`}>
            <div className='header__content'>
                <Link href='/' className='header__logo'>
                    NewsExplorer
                </Link>
                
                <Navigation
                    theme={theme}
                    showSavedLink={showSavedLink} 
                    showUser={showUser}
                    onSignInClick={onSignInClick}
                    onLogout={onLogout}
                    isMobileMenuOpen={isMobileMenuOpen}
                    onMobileMenuOpen={onMobileMenuOpen}
                    onMobileMenuClose={onMobileMenuClose}
                />
            </div>
        </header>
    );
}

export default Header;