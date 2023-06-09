import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef();

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favorite drink</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
            style={{ border: '2px solid var(--primaryColor)' }}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
