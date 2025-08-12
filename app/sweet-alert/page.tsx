'use client'
import React, { useEffect } from 'react'
import Swal from 'sweetalert2'

function SweetAlertPage() {
  function swalHandler() {
    Swal.fire({
      title: 'Success',
      text: 'Registerated successfully',
      icon: 'success',
      confirmButtonText: 'OK',
      theme: 'dark',
      titleText: 'Success Alert',
      heightAuto: false,
      padding: '1em',
      color: '#fff',
      denyButtonColor: '#d83030',
      customClass: {
        confirmButton: '!bg-black !w-full border-4 border-white block'
      }
    }).then(value => {
      if (value.isConfirmed) {
        console.info("CONFIRMED")
      } else {
        console.info('REJECTED')
      }
    })
  }


  return (
    <div className='section'>
      <button onClick={() => swalHandler()} className="btn mx-auto my-10">FIRE</button>
    </div>
  )
}

export default SweetAlertPage