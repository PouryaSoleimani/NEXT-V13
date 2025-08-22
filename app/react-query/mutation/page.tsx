'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'


const Mutation = () => {
  const newTodo = { title: 'LEARN REACT___LIBS', isDone: false }

  function getAllTodos() { return axios.get("http://localhost:5000/todos").then(res => res.data) }

  const mutation = useMutation({
    mutationFn: () => {
      return axios.post('http://localhost:5000/todos', newTodo)
    },
  })

  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: getAllTodos
  })
  return (
    <div>
      {mutation.isPending ? ('Adding todo...') : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <Button variant={'blue'} onClick={() => { mutation.mutate() }} > Create Todo </Button>
        </>
      )}
      <Card className='w-fit mx-auto grid grid-cols-6 place-items-center m-3 px-6'>
        {data?.map((item: any) => (
          <h2 key={item.id} className='flex mx-auto bg-black items-center justify-center gap-3 px-4 py-2 rounded-lg'>{item.title} {item.isDone == true ? '✅' : '❌'}</h2>
        ))}
      </Card>
    </div>
  )
}

export default Mutation