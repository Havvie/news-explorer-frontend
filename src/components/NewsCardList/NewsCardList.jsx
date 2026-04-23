import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({ 
    articles, 
    isSavedPage = false,
    isLoggedIn = false,
    savedArticles = [],
    onSaveArticle,
    onDeleteArticle, 
}) {
    return (
        <div className='news-card-list'>
            {articles.map((article) => (
                <NewsCard
                    key={article.id}
                    article={article}
                    isSavedPage={isSavedPage}
                    isLoggedIn={isLoggedIn}
                    savedArticles={savedArticles}
                    onSaveArticle={onSaveArticle}
                    onDeleteArticle={onDeleteArticle}
                />
            ))}
        </div>
    );
}

export default NewsCardList;