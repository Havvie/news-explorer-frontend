import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import LoginModal from '../components/LoginModal/LoginModal';
import RegisterModal from '../components/RegisterModal/RegisterModal';
import { getNews } from '../utils/newsApi';

function Home() {
  const [activeModal, setActiveModal] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [visibleCards, setVisibleCards] = useState(3);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('jwt');

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleOpenLogin = () => {
    setActiveModal('login');
  };

  const handleOpenRegister = () => {
    setActiveModal('register');
  };

  const handleCloseModal = () => {
    setActiveModal('');
  };

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLoginSuccess = () => {
    localStorage.setItem('jwt', 'fake-jwt-token');
    setIsLoggedIn(true);
    handleCloseModal();
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setSavedArticles([]);
    handleMobileMenuClose();
  };

  function formatArticleDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  const handleSearch = (keyword) => {
    setHasSearched(true);
    setIsLoading(true);
    setErrorMessage('');
    setVisibleCards(3);

    getNews(keyword)
      .then((data) => {
        const formattedArticles = (data.articles || []).map(
          (article, index) => ({
            id: `${index}-${article.title}`,
            keyword,
            title: article.title || 'No title available',
            text: article.description || 'No description available',
            date: formatArticleDate(article.publishedAt),
            source: article.source?.name || 'Unknown source',
            image: article.urlToImage ? article.urlToImage : null,
            url: article.url || '#',
          })
        );

        setArticles(formattedArticles);
      })
      .catch(() => {
        setArticles([]);
        setErrorMessage(
          'Sorry, something went wrong during the request. Please try again later.'
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleShowMore = () => {
    setVisibleCards((prevCount) => prevCount + 3);
  };

  const handleSaveArticle = (articleToSave) => {
    setSavedArticles((prevArticles) => {
      const alreadySaved = prevArticles.some(
        (article) => article.url === articleToSave.url
      );

      if (alreadySaved) {
        return prevArticles;
      }

      return [articleToSave, ...prevArticles];
    });
  };

  const handleDeleteArticle = (articleToDelete) => {
    setSavedArticles((prevArticles) =>
      prevArticles.filter((article) => article.url !== articleToDelete.url)
    );
  };

  return (
    <>
      <Header
        theme="dark"
        showSavedLink={isLoggedIn}
        showUser={isLoggedIn}
        onSignInClick={handleOpenLogin}
        onLogout={handleLogout}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuOpen={handleMobileMenuOpen}
        onMobileMenuClose={handleMobileMenuClose}
      />

      <Main
        onSearch={handleSearch}
        isLoading={isLoading}
        hasSearched={hasSearched}
        articles={articles}
        errorMessage={errorMessage}
        visibleCards={visibleCards}
        onShowMore={handleShowMore}
        isLoggedIn={isLoggedIn}
        savedArticles={savedArticles}
        onSaveArticle={handleSaveArticle}
        onDeleteArticle={handleDeleteArticle}
      />
      <About />
      <Footer />

      <LoginModal
        isOpen={activeModal === 'login'}
        onClose={handleCloseModal}
        onSwitchToRegister={handleOpenRegister}
        onLoginSuccess={handleLoginSuccess}
      />

      <RegisterModal
        isOpen={activeModal === 'register'}
        onClose={handleCloseModal}
        onSwitchToLogin={handleOpenLogin}
      />
    </>
  );
}

export default Home;
