import React from 'react';
import {
  Container,
  Wrapper,
  SearchBox,
} from './styled';
import SearchIcon from '../../assets/icons/search.svg';
import { ISearchBarProps } from '../../identity';

const SearchBar: React.FC<ISearchBarProps> = ({ fetchSearchByQuery, placeholder, value = '', onChangeValue, count, typeQuery }) => (
  <Container data-testid="searchbar-container">
    <Wrapper>
      <SearchBox>
        <img
          src={SearchIcon}
          alt='Search...'
        />
        <input type="text" placeholder={ placeholder } value={value} onChange={e => onChangeValue(e.target.value, typeQuery)} />
        <div>
          <span>{count} results</span>
        </div>
        <button onClick={() => fetchSearchByQuery(0, 9, 'search')}>
          <span>Search</span>
        </button>
      </SearchBox>
    </Wrapper>
  </Container>
)

export default SearchBar;
