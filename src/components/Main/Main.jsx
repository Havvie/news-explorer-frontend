import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import './Main.css';

function Main({
  onSearch,
  isLoading,
  hasSearched,
  articles,
  errorMessage,
  visibleCards,
  onShowMore,
  isLoggedIn,
  savedArticles,
  onSaveArticle,
  onDeleteArticle,
}) {
  const visibleArticles = articles.slice(0, visibleCards);

  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__content">
          <h1 className="main__title">What&apos;s going on in the world?</h1>
          <p className="main__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm onSearch={onSearch} />
        </div>
      </section>

      {hasSearched && (
        <section className="main__results">
          <div className="main__results-content">
            <h2 className="main__results-title">Search results</h2>

            {isLoading ? (
              <Preloader />
            ) : errorMessage ? (
              <p className="main__message">{errorMessage}</p>
            ) : articles.length === 0 ? (
              <p className="main__message">Nothing found</p>
            ) : (
              <>
                <NewsCardList 
                  articles={visibleArticles}
                  isLoggedIn={isLoggedIn}
                  savedArticles={savedArticles}
                  onSaveArticle={onSaveArticle}
                  onDeleteArticle={onDeleteArticle}
                />

                {visibleCards < articles.length && (
                  <button 
                    type="button" 
                    className="main__show-more"
                    onClick={onShowMore}
                  >
                    Show more
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      )}
    </main>
  );
}

export default Main;
