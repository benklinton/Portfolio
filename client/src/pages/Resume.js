import React from 'react';
import PDF from './Resume.pdf'
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
    
    return (
        <>
        <Document file={PDF}>
      <Page pageNumber={1} />
    </Document>
        </>
    )
}

export default Resume;