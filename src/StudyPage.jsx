//import PdfViewerComponent from './PdfViewerComponent';
import { Document, Page } from 'react-pdf';
import TopSection from './components/Study/TopSection';
import Respo from './components/Chemsafe/Respo';
import SectionHeader from './components/Headers/SectionHeader';
import { objective1, objective2, objective3 } from './constants/Uni';

const StudyPage = () => {
  //const pdfUrl = '/dailyActivities.pdf'; // Replace with the actual path to your PDF file

  return (
    <div style={styles.pageStyle}>  
      <div style={styles.rowContainer}>
          <div style={styles.colContainer}>
              <TopSection/> 
          </div>
      </div>
      <div style={styles.rowContainer}>
          <div style={styles.colContainer}>
              <SectionHeader title={"Study Objectives"
              }/> 
          </div>
      </div>
      <div style={styles.rowContainer}>
          <div style={styles.colContainer}>
              <Respo title={objective1
              }/> 
              <Respo title={objective2
              }/> 

              <Respo title={objective3
              }/> 
          </div>
      </div>
          
      
    </div>
  );
};

const styles ={
  pageStyle: {
      backgroundColor: 'black', // Set the background color to black
      color: '#d3d3d3', // Set the text color to white
      minHeight: '100vh', // Make sure the page covers the entire viewport height
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowContainer:{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'left',
  flexDirection: 'row',
  width: '90%', // Set the width to 50% of the page width
  marginLeft: '0', // Align the container to the left bound
},
colContainer: {
  display: 'block',
  justifyContent: 'center', // Center horizontally
  alignItems: 'center', // Center vertically
  textAlign: 'left',
  marginLeft: '5%', // Align the container to the left bound
  paddingTop:'3%',
  width: '100%',

},
regTextStyle:{
  textAlign: 'left',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '20px',
  color: '#bababa',
  letterSpacing: '0.1px',
  //color: '#d3d3d3', // Replace with the desired text color
  marginLeft: '40px',
  paddingTop: '20px', // Add top padding of 20px
  
},
ImgaeContainer:{
  justifyContent: 'center', // Center horizontally
  alignItems: 'center', // Center vertically
  width:'50%',
  height:'40%'
}
}

const mystyle = {
  color: 'black',
  padding: '10px',
  fontFamily: 'Arial',
};

export default StudyPage;
