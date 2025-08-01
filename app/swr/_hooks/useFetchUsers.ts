'use client'
import axios from 'axios'
import React from 'react'
import useSWR from 'swr'



const Usersfetcher = (url: string) => axios.get(url).then(res => res.data)

function useFetchUsers() {

  const { data, isLoading, error } = useSWR('https://fakestoreapi.com/users', Usersfetcher)
  return { data, isLoading, error }
}

export default useFetchUsers
