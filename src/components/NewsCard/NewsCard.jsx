import { useState } from 'react';
import deleteIdleButton from '../../assets/delete-button.svg';
import deleteSelectedButton from '../../assets/delete-button-selected.svg';
import './NewsCard.css';

function NewsCard({
  article,
  isSavedPage = false,
  isLoggedIn = false,
  savedArticles = [],
  onSaveArticle,
  onDeleteArticle,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const isSaved = savedArticles.some(
    (savedArticle) => savedArticle.url === article.url
  );

  const handleSaveClick = () => {
    if (!isLoggedIn) {
      return;
    }

    if (isSaved) {
      onDeleteArticle(article);
    } else {
      onSaveArticle(article);
    }
  };

  const handleDeleteClick = () => {
    onDeleteArticle(article);
  };

  return (
    <article className='news-card'>
      <div className='news-card__image-wrapper'>
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className='news-card__image'
          />
        ) : (
          <div className='news-card__image news-card__image_placeholder' />
        )}

        {isSavedPage && (
          <span className='news-card__keyword'>{article.keyword}</span>
        )}

        {isSavedPage ? (
          <>
            {isHovered && (
              <span className='news-card__tooltip'>Remove from saved</span>
            )}
            <button
              type='button'
              className='news-card__icon-button news-card__icon-button_type_delete'
              aria-label='Remove saved article'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleDeleteClick}
            >
              <img
                className='news-card__delete'
                src={isHovered ? deleteSelectedButton : deleteIdleButton}
                alt=''
              />
            </button>
          </>
        ) : (
          <>
            {!isLoggedIn && isHovered && (
              <span className='news-card__tooltip'>
                Sign in to save articles
              </span>
            )}

            <button
              type='button'
              className={`news-card__icon-button news-card__icon-button_type_save ${
                isSaved ? 'news-card__icon-button_saved' : ''
              }`}
              aria-label='Save article'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleSaveClick}
            />
          </>
        )}
      </div>

      <div className='news-card__content'>
        <p className='news-card__date'>{article.date}</p>
        <h3 className='news-card__title'>{article.title}</h3>
        <p className='news-card__text'>{article.text}</p>
        <p className='news-card__source'>{article.source}</p>
      </div>
    </article>
  );
}

export default NewsCard;
