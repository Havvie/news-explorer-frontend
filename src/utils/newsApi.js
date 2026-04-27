const NEWS_API_BASE_URL = import.meta.env.PROD
    ? 'https://nomoreparties.co/news/v2/everything'
    : 'https://newsapi.org/v2/everything';

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function getTodaysDate() {
    return new Date().toISOString().split('T')[0];
}

function getSevenDaysAgoDate() {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date.toISOString().split('T')[0];
}

function checkResponse(res) {
    if (!res.ok) {
        return Promise.reject(new Error(`Request failed: ${res.status}`));
    }

    return res.json();
}

export function getNews(keyword) {
    const from = getSevenDaysAgoDate();
    const to = getTodaysDate();

    const url = new URL(NEWS_API_BASE_URL);
    url.searchParams.set('q', keyword);
    url.searchParams.set('apiKey', NEWS_API_KEY);
    url.searchParams.set('from', from);
    url.searchParams.set('to', to);
    url.searchParams.set('pageSize', '100');

    return fetch(url).then(checkResponse);
}