import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import NewsCardList from '../components/NewsCardList/NewsCardList';
import { savedArticles } from '../utils/constants';
import './SavedNews.css';

function SavedNews({ onLogout }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return(
        <>
          <Header 
            theme='light' 
            showSavedLink 
            showUser
            onLogout={onLogout}
            isMobileMenuOpen={isMobileMenuOpen}
            onMobileMenuOpen={() => setIsMobileMenuOpen(true)}
            onMobileMenuClose={() => setIsMobileMenuOpen(false)} 
        />
        
          <main className='saved-news'>
            <section className='saved-news__hero'>
                <div className='saved-news__content'>
                    <p className='saved-news__label'>
                        Saved articles
                    </p>
                    <h1 className='saved-news__title'>
                        Elise, you have 5 saved articles
                    </h1>
                    <p className='saved-news__keywords'>
                        By keywords: <strong>Nature, Yellowstone</strong>, and 2 others
                    </p>
                </div>
            </section>

            <section className='saved-news__results'>
                <div className='saved-news__content'>
                    <NewsCardList articles={savedArticles} isSavedPage />
                </div>
            </section>
          </main>
          <Footer />
        </>
    );
}

export default SavedNews;