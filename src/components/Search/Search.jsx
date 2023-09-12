import React, { useState } from 'react'; //, useEffect
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { SearchResult } from './SearchResult/SearchResult';
import * as SC from './Search.styled';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') ? searchParams.get('search') : '',
  );
  const { t } = useTranslation();

  const [showSearchForm, setShowSearchForm] = useState(false);
  const toggleSearchForm = () => {
    setShowSearchForm(state => !state);
  };

  const setParams = search => {
    const params = getParams();
    if (!search) {
      delete params.search;
      setSearchParams(params);
      return;
    }
    params.search = search;
    setSearchParams(params);
  };

  const getParams = () => {
    const params = Object.fromEntries(searchParams);
    return params;
  };

  return (
    <>
      {!showSearchForm && (
        <SC.IconSearch
          data-modal="search"
          onClick={toggleSearchForm}
          aria-label="Search"
        />
      )}
      {showSearchForm && (
        <>
          <SC.Overlay onClick={toggleSearchForm}></SC.Overlay>
          <SC.FormContainer
            name="form-search"
            autoComplete="off"
            onSubmit={e => {
              e.preventDefault();
              setParams(e.target.value);
              setSearchQuery(e.target.value);
            }}
          >
            <SC.Label aria-label="Search">
              <SC.Input
                id="search"
                type="text"
                name="search"
                placeholder={t('Search')}
                value={searchQuery}
                onChange={e => {
                  setParams(e.target.value);
                  setSearchQuery(e.target.value);
                  if (e.target.value === '') {
                    setParams('');
                    setSearchQuery('');
                  }
                }}
              />
            </SC.Label>
            <SC.ButtonSearch>
              <SC.IconSearch onClick={toggleSearchForm} aria-label="Search" />
            </SC.ButtonSearch>
            {searchQuery !== '' && (
              <SC.ButtonClear
                type="button"
                onClick={e => {
                  setParams('');
                  setSearchQuery('');
                }}
                aria-label="Clear search"
              >
                <SC.IconClose />
              </SC.ButtonClear>
            )}
            <SearchResult
              onClose={toggleSearchForm}
              searchQuery={searchQuery}
            />
          </SC.FormContainer>
        </>
      )}
    </>
  );
};
