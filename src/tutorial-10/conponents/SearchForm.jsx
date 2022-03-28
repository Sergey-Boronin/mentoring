
import React from 'react'

export const SearchForm = ({ onChangeSearch, searchInpit, getData, isLoading }) => {
  return (
    <form onSubmit={getData} className="app-form">
    <input onChange={onChangeSearch} value={searchInpit} type="text" className="app-input" placeholder="Укажите GitHub-аккаунт" />
    <button disabled={isLoading} type='submit' className="app-form_btn">Найти</button>
  </form>
  )
}
