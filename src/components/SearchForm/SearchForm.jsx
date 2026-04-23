import { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
    const [keyword, setKeyword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        const trimmedKeyword = keyword.trim();

        if (!trimmedKeyword) { 
            setError('Please enter a keyword');
            return;
        }

        setError('');
        onSearch(trimmedKeyword);
    };

    return (
        <form className='search-form' onSubmit={handleSubmit} noValidate>
            <input
                type='text'
                value={keyword}
                onChange={(evt) => setKeyword(evt.target.value)}
                placeholder='Enter topic'
                className='search-form__input'
                required
            />
            <button type='submit' className='search-form__button'>
                Search
            </button>
            {error && <span className='search-form__error'>{error}</span>}
        </form>
    );
}

export default SearchForm;