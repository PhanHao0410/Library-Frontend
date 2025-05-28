import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Button } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DialogContent from '@mui/material/DialogContent';
import { isHavingToken } from '../../utils/localStorage';
import Progress from '../../components/Progress';
import TimerComponent from '../../components/TimerComponent';
import { useStoreMobx } from '../../mobx/hook';
import {
  ShowPdfContainer,
  ShowPdfTitleContainer,
  ShowPdfContentContainer,
  ShowPdfAction,
} from './styles';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js`;

const ShowPdf = ({
  openFilePdf,
  setOpenFilePdf,
  bookData,
  filePdfData,
  typeCode,
  bookId,
}) => {
  const {
    rootStore: { editBookStore },
  } = useStoreMobx();
  const [isReading, setIsReading] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [textContent, setTextContent] = useState('');
  const documentRef = useRef<any>(null);

  useEffect(() => {
    if (openFilePdf && isHavingToken() && filePdfData) {
      setIsReading(true);
    }
  }, [openFilePdf]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));
  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setPageNumber((prev) => Math.min(prev + 1, numPages));

  const handleTimeStop = (timeReading) => {
    if (Number(timeReading) > 0) {
      const expectedTime = bookData.expectedTime;
      const spentTime = (
        Number(bookData.spentTime) +
        Number(timeReading) / 3600
      ).toFixed(8);

      editBookStore.fetchUpdateTime(typeCode, bookId, {
        expectedTime,
        spentTime,
      });
    }
  };

  const handlePauseReading = () => {
    setOpenFilePdf(false);
    setIsReading(false);
  };
  return (
    <ShowPdfContainer
      open={openFilePdf}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="lg"
      fullWidth
    >
      <DialogContent id="alert-dialog-content">
        <ShowPdfTitleContainer>
          <h2>{bookData.bookName}</h2>
          <div>
            <h4>
              <TimerComponent
                isReading={isReading}
                handleTimeStop={handleTimeStop}
              />
            </h4>

            <Button className="btn-pause" onClick={handlePauseReading}>
              Pause
            </Button>
          </div>
        </ShowPdfTitleContainer>
        <ShowPdfContentContainer>
          <div className="content-container">
            <div className="title-content">
              <div>
                <Button
                  className={
                    pageNumber <= 1 ? 'btn-zoom disabled-button' : 'btn-zoom'
                  }
                  onClick={goToPrevPage}
                >
                  <NavigateBeforeIcon />
                </Button>
                <Button
                  className={
                    pageNumber >= numPages
                      ? 'btn-zoom disabled-button'
                      : 'btn-zoom'
                  }
                  onClick={goToNextPage}
                >
                  <NavigateNextIcon />
                </Button>
              </div>
              <h4>{`Page ${pageNumber} of ${numPages}`}</h4>
              <div>
                <Button
                  className={
                    scale >= 2 ? 'btn-zoom disabled-button' : 'btn-zoom'
                  }
                  onClick={handleZoomIn}
                >
                  <ZoomInIcon />
                </Button>
                <Button
                  className={
                    scale <= 0.5 ? 'btn-zoom disabled-button' : 'btn-zoom'
                  }
                  onClick={handleZoomOut}
                >
                  <ZoomOutIcon />
                </Button>
              </div>
            </div>
            <div className="pdf-container">
              <Document
                file={filePdfData}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error}
                className="pdf-document"
                inputRef={(e) => {
                  documentRef.current = e?.pdf;
                }}
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  className="pdf-page"
                />
              </Document>
            </div>
          </div>
        </ShowPdfContentContainer>
      </DialogContent>
    </ShowPdfContainer>
  );
};

export default React.memo(observer(ShowPdf));
