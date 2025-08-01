import axios from 'axios'
import React from 'react'
import useSWR, { mutate } from 'swr'


export type SingleProductType = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}
const ProductsFetcher = () => axios.get('https://fakestoreapi.com/products').then(res => res.data)
const useProductsFetch = () => {
  const { data, error, isLoading } =
    useSWR('https://fakestoreapi.com/products', ProductsFetcher,
      {
        refreshInterval: 5000,
      })

  return { data: data as SingleProductType[], error, isLoading }
}

export default useProductsFetch