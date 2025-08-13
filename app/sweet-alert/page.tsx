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
        confirmButton: '!bg-black !w-32 inline-block hover:bg-white transition-all duration-300',
        cancelButton: '!bg-red-900 !w-32 inline-block hover:bg-red-800 transition-all duration-300'
      },
      showCloseButton: true,
      showCancelButton: true,
    }).then(value => {
      if (value.isConfirmed) {
        console.info("CONFIRMED")
        Swal.fire({
          icon: 'success',
          text: 'SUCCESS',
          theme: 'dark',
        })
      } else {
        console.info('REJECTED')
        Swal.fire({
          icon: 'error',
          text: 'REJECTED',
          theme: 'dark',
        })
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