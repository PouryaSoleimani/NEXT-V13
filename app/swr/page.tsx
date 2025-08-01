import axios from 'axios'
import React from 'react'
import useSWR from 'swr'


function SwrPage() {
  const fetcher = (url: string) => { axios.get(url).then(res => res.data) }
  const { data: SWR__DATA, error, isLoading } = useSWR('https://fakestoreapi.com/products', fetcher)

  console.info('SWR ==>', SWR__DATA)
  return (
    <div>SwrPage</div>
  )
}

export default SwrPage