"use client";
import Swal from "sweetalert2";

function SweetAlertPage() {
  function swalHandler() {
    Swal.fire({
      title: "Success",
      text: "Registered successfully",
      icon: "success",
      confirmButtonText: "OK",
      theme: "dark",
      titleText: "Success Alert",
      heightAuto: false,
      padding: "1em",
      color: "#fff",
      denyButtonColor: "#d83030",
      customClass: {
        confirmButton:
          "!bg-black !w-32 inline-block hover:bg-white transition-all duration-300",
        cancelButton:
          "!bg-red-900 !w-32 inline-block hover:bg-red-800 transition-all duration-300",
        title: "!font-black",
        container: "text-xl font-bold",
      },
      animation: true,
      showCloseButton: true,
      showCancelButton: true,
      input: "text",
      inputLabel: "Your IP address",
    }).then((value) => {
      if (value.value) {
        console.info("VALUE ===>", value.value);
        Swal.fire({
          icon: "success",
          text: `SUCCESS ==> ${value.value}`,
          theme: "dark",
        });
      } else {
        console.info("REJECTED ===> ");
        Swal.fire({ icon: "error", text: "REJECTED", theme: "dark" });
      }
    });
  }

  return (
    <div className='section'>
      <button
        onClick={() => swalHandler()}
        className='btn mx-auto my-10'>
        FIRE
      </button>
    </div>
  );
}

export default SweetAlertPage;
