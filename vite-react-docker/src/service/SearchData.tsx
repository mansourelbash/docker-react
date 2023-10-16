import React,{useState} from 'react'

const SearchData = async (query:any) => {
  const url= `https://api.github.com/search/repositories?q=${query}`
  const res = await fetch(url)
  const data = await res.json()
  return data
}


const SearchUsers = async (query:any, type:any) => {
  let url = `https://api.github.com/users/${query}`
  type == 'users' ? url : url = `https://api.github.com/users/${query}/repos` ;
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export default SearchData;
export {SearchUsers}