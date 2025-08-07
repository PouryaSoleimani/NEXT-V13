'use client'
import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfPreview from '../preview/page';
import { HiDocumentDownload } from 'react-icons/hi';


// COMPONENT =======================================================================================================================
function PdfDownloadPage() {
  return (
    <section className='flex flex-col gap-6'>
      <PDFViewer width="100%" height="600" style={{ fontFamily: 'Vazir' }} >
        <PdfPreview />
      </PDFViewer>

      <PDFDownloadLink
        document={<PdfPreview />}
        fileName="pourya_testing_pdf.pdf"
        className='!bg-red-800 mt-16 w-fit mx-auto flex px-4 py-2 items-center-safe rounded-md justify-center gap-3'>
        {({ loading }) => (
          <>
            <HiDocumentDownload className='size-5 -translate-y-px' />
            {loading ? 'در حال ساخت PDF...' : 'دانلود PDF'}
          </>
        )}
      </PDFDownloadLink>
    </section>
  )
}

export default PdfDownloadPage
