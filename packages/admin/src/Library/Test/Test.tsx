import React, { useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Button } from '@mui/material';

import { EditBookContainer, BookContainer } from './styles';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js`;

const Test = ({ filePdfData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(true);
  };
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  // const [scale, setScale] = useState(1.0);
  // const [textContent, setTextContent] = useState('');
  // const documentRef = useRef<any>(null);

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  //   setPageNumber(1);
  // };

  // const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3));
  // const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));
  // const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  // const goToNextPage = () =>
  //   setPageNumber((prev) => Math.min(prev + 1, numPages));

  // // 📖 Extract text from current page
  // const handleReadText = async (pdf) => {
  //   const page = await pdf.getPage(pageNumber);
  //   const content = await page.getTextContent();
  //   const strings = content.items.map((item) => item.str);
  //   setTextContent(strings.join(' '));
  // };

  return (
    <EditBookContainer>
      {/* <div style={{ width: '1000px', margin: '0 auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
            ⬅ Prev
          </button>
          <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
            Next ➡
          </button>
          <button onClick={handleZoomOut}>➖ Zoom Out</button>
          <button onClick={handleZoomIn}>➕ Zoom In</button>
          <button onClick={(e) => handleReadText(documentRef)}>
            📖 Read Text
          </button>
          <span style={{ marginLeft: 10 }}>
            Page {pageNumber} of {numPages}
          </span>
        </div>

        <div style={{ border: '1px solid #ccc' }}>
          <Document
            file={filePdfData}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
            inputRef={(e) => (documentRef.current = e?.pdf)} // Needed to extract content
          >
            <Page pageNumber={pageNumber} scale={scale} />
          </Document>
        </div>

        {textContent && (
          <div
            style={{
              marginTop: '20px',
              background: '#f4f4f4',
              padding: '10px',
            }}
          >
            <strong>📄 Extracted Text:</strong>
            <p>{textContent}</p>
          </div>
        )}
      </div> */}
      <div className="container">
        <div className={`box ${expanded ? 'expanded' : ''}`}>
          {!expanded ? (
            <button className="create-button" onClick={handleClick}>
              Create
            </button>
          ) : (
            <form className="create-form">
              <h2>Create Item</h2>
              <input type="text" placeholder="Enter name" required />
              <input type="email" placeholder="Enter email" required />
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    </EditBookContainer>
  );
};

export default Test;
