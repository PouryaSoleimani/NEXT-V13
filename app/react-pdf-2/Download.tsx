import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { HiDocumentDownload } from "react-icons/hi";

import ReactPdf2Component from "./page";

function DownloadPdf() {
  return (
    <section className='flex flex-col gap-6'>
      <PDFDownloadLink
        document={<ReactPdf2Component />}
        fileName='pourya_testing_pdf.pdf'
        className='!bg-red-800 mt-16 w-fit mx-auto flex px-4 py-2 items-center-safe rounded-md justify-center gap-3'>
        {({ loading }) => (
          <>
            <HiDocumentDownload className='size-5 -translate-y-px' />
            {loading ? "در حال ساخت PDF..." : "دانلود PDF"}
          </>
        )}
      </PDFDownloadLink>
    </section>
  );
}

export default DownloadPdf;
