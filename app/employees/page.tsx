'use client'
import axios from 'axios'
import toast from 'react-hot-toast'
import useSWR from 'swr'

const employeesFetcher = () => axios.get('/api/employees').then(res => res.data)
const Page = () => {

  const { data, isLoading } = useSWR('/api/employees', employeesFetcher)

  if (isLoading) {
    return <div>IS LOADING</div>
  }

  function toastHandler(name: string) {
    toast.success(name.toUpperCase(), {
      position: "top-center",
      style: {
        backgroundColor: 'black',
        color: '#f5f5f5',
        width: '300px',
        borderBottom: '3px solid #f5f5f5'
      }
    })
  }


  console.info('RESPONSE FROM API ROUTE => ', data)

  return (
    <div className='grid grid-cols-4 p-32 gap-3'>{data?.data.map((employee: { id: number, name: string, job: string }) => (
      <button
        onClick={() => { toastHandler(employee.name) }}
        key={employee.id}
        className='grid cursor-pointer hover:bg-primary hover:border-secondary hover:text-foreground text-stone-300 transition-all duration-300  place-items-center border-8 bg-stone-800 px-4 py-2 rounded-md border-stone-900'
      >
        <span className='text-md font-black'>{employee.name} : {employee.job}</span>
      </button>
    ))}
    </div>
  )
}

export default Page