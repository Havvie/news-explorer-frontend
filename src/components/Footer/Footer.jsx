import githubIcon from '../../assets/github.svg';
import linkedInIcon from '../../assets/linkedIn.svg';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__content'>
                <p className='footer__copyright'>
                    © 2026 Supersite, Powered by News API
                </p>
                
                <div className='footer__links'>
                    <a href='/' className='footer__link'>
                        Home
                    </a>
                    <a
                        href='https://tripleten.com'
                        target='_blank'
                        rel='noreferrer'
                        className='footer__link'
                    >
                        TripleTen
                    </a>
                    <a
                        href='https://github.com'
                        target='_blank'
                        rel='noreferrer'
                        className='footer__icon-link'
                    >
                        <img src={githubIcon} alt='GitHub' />
                    </a>
                    <a
                        href='https://linkedin.com'
                        target='_blank'
                        rel='noreferrer'
                        className='footer__icon-link'
                    >
                        <img src={linkedInIcon} alt='LinkedIn' />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;