import PdfViewerComponent from './PdfViewerComponent';
import { Document, Page } from 'react-pdf';
import samplePDF from './dailyActivities.pdf';

const StudyPage = () => {
  //const pdfUrl = '/dailyActivities.pdf'; // Replace with the actual path to your PDF file

  return (
    <div>
      <h1 style={mystyle}>Tracking Activities of Daily Living in the Home Office</h1>
      
      
        <div className="PDF-viewer">
            <PdfViewerComponent document={'./dailyActivities.pdf'} />
        </div>
      
    </div>
  );
};

const mystyle = {
  color: 'black',
  padding: '10px',
  fontFamily: 'Arial',
};

export default StudyPage;
