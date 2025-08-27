"use client";
import React from "react";
import Link from "next/link";
import { HiDocumentDownload } from "react-icons/hi";

function ReactPdfComponent() {
  return (
    <div className="section justify-center items-center flex flex-col">
      <Link
        href="/react-pdf/download"
        className="!bg-red-800 flex px-4 py-2 items-center-safe rounded-md justify-center gap-3"
      >
        <HiDocumentDownload className="size-5 -translate-y-px" />
        PREVIEW PDF
      </Link>
    </div>
  );
}

export default ReactPdfComponent;
