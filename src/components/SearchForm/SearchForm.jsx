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

  const handleChange = (evt) => {
    setKeyword(evt.target.value);

    if (error) {
      setError('');
    }
  };

  return (
    <form className='search-form' onSubmit={handleSubmit} noValidate>
      <div className='search-form__wrapper'>
        <input
          type='text'
          value={keyword}
          onChange={(evt) => {
            setKeyword(evt.target.value);
            if (error) setError('');
          }}
          placeholder={error ? error : 'Enter topic'}
          className={`search-form__input ${error ? 'search-form__input_error' : ''}`}
          required
        />
        <button type='submit' className='search-form__button'>
          Search
        </button>
      </div>

    </form>
  );
}

export default SearchForm;
