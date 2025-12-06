'use client'
import axios from 'axios'
import React from 'react'
import useSWR from 'swr'
const fetcher = () => axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)


function Swr2Page() {
  const { data, isLoading, error } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)

  if(isLoading){
    return <div>IS LOADING</div>
  }

  if(error){
    return <div>ERROR</div>
  }

  if (data) {
    console.info('DATA ===>',data)
  }
  return (
    <div>{data && data.map((item: any) => <p>{item.name}</p>)}</div>
  )
}

export default Swr2Page