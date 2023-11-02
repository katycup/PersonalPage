import React, { useState } from 'react';
import styled from 'styled-components';
import bam from './Clients//BAM-Logo.jpg';
import airLiq from './Clients/AIR_LIQUIDE.png';
import basf from './Clients/basf.webp';
import dal from './Clients/DallhouseUni.png';
import dustex from './Clients/dustex_Halifax.jpeg';
import fm from './Clients/Fm-global.png';
import ku from './Clients/KU_Leuven.png';
import beyer from './Clients/Logo_Bayer.svg';
import utorin from './Clients/Logo_of_Politecnico_di_Torino_(Italian_University).png';
import coria from './Clients/logo-coria_2018.png';
import niosh from './Clients/niosh-2.jpg';
import unorthChina from './Clients/North_University_of_China_logo.png';
import PTB from './Clients/Physikalisch-Technische_Bundesanstalt_2013_logo.png';
import shell from './Clients/Shell_logo.svg.png';
import total from './Clients/TotalEnergies_France.png';
import lorraine from './Clients/University_of_Lorraine_(logo).png';
import usw from './Clients/usw.png';

const ClientsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoverText, setHoverText] = useState(''); // State to store hover text
  
  const tabs = [
    {
      title: 'Industry',
      content: [
        
        { src: airLiq, alt: 'Full-Stack Image 1', hoverText: 'Air Liquid'},
        { src: shell, alt: 'Full-Stack Image 1', hoverText: 'Shell'},
        { src: total, alt: 'Full-Stack Image 1', hoverText: 'Total'},
        { src: beyer, alt: 'Full-Stack Image 1', hoverText: 'Beyer'},
        { src: basf, alt: 'Full-Stack Image 1', hoverText: 'BASF'},
        { src: fm, alt: 'Full-Stack Image 1', hoverText: 'FM Global'},
        { src: dustex, alt: 'Full-Stack Image 1', hoverText: 'DustEx Research Ltd'},
        { src: usw, alt: 'Full-Stack Image 1', hoverText: 'And Many More'},
      ],
    },
    {
        title: 'Research', 
        content: [
          { src: PTB, alt: 'Full-Stack Image 1', hoverText: 'Physikalisch Technische Bundesanstalt'},
          { src: bam, alt: 'Full-Stack Image 1', hoverText: 'Bundesanstalt für Materialforschung'},
          { src: coria, alt: 'Full-Stack Image 1', hoverText: 'Complexe de Recherche Interprofessionnel en Aérothermochimie (CORIA)'},
          { src: niosh, alt: 'Full-Stack Image 1', hoverText: 'National Institute for Occupational Safety and Health'},
          { src: dal, alt: 'Full-Stack Image 1', hoverText: 'Dallhouse University Halifax'},
          { src: utorin, alt: 'Full-Stack Image 1', hoverText: 'University of Torin, Italy'},
          { src: unorthChina, alt: 'Full-Stack Image 1', hoverText: 'North China Institute of Science & Technology, School of Safety Engineering'},
          { src: ku, alt: 'Full-Stack Image 1', hoverText: 'KU Leuven'},
          { src: lorraine, alt: 'Full-Stack Image 1', hoverText: 'University of Lorraine'},
          { src: usw, alt: 'Full-Stack Image 1', hoverText: 'And Many More'},
          
        ],
      },
     
  ];

  const handleMouseEnter = (text) => {
    setHoverText(text);
  };

  const handleMouseLeave = () => {
    setHoverText('');
  };

  return (
    <>
   
        <TabbedSquareContainer>
        <Tabs>
            {tabs.map((tab, index) => (
            <Tab
                key={index}
                onClick={() => setActiveTab(index)}
                active={index === activeTab}
            >
                {tab.title}
            </Tab>
            ))}
        </Tabs>
       <TabContent>
        {tabs[activeTab].content.map((item, itemIndex) => (
          <ImageContainer
            key={itemIndex}
            onMouseEnter={() => handleMouseEnter(item.hoverText)}
            onMouseLeave={handleMouseLeave}
          >
            <img style={imageStyle} src={item.src} alt={item.alt} />
            {hoverText === item.hoverText && <TextOnHover>{item.hoverText}</TextOnHover>}
            
           
          </ImageContainer>
          
        ))}
       
      </TabContent>
      
        </TabbedSquareContainer>
    
    </>
  );
};

const ImageContainer = styled.div`
  position: relative;
  display: inline;
  margin: 5px;
  
`;

const TextOnHover = styled.div`
  position: absolute;
  top: -25px;
  left: 0;
  background-color: transparent;
  color: white;
  font-family: 'Arial', sans-serif; /* Set the font family to Arial */
  font-size: 16px; /* Set the font size to 16px */
  padding: 5px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s;
  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const TabbedSquareContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  opacity: 1;
  border-radius: 16px;
  overflow: auto; /* To handle image overflow */
  border: 1px solid #333; 
  
`;


const Tabs = styled.div`
  display: flex;
`;

const Tab = styled.button`
  flex: 1;
  border: none;
  padding: 10px;
  background: ${(props) => (props.active ? '#bababa' : '#333 ')};
  color: ${(props) => (props.active ? (props.activeColor || 'white') : '#bababa')};
  cursor: pointer;
`;


const TabContent = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-wrap: nowrap; /* Prevent wrapping to the next line */
  justify-content: flex-start;
  align-items: center;
  justifyContent: 'center';

  gap: 10px; /* Adjust the gap between images */
  overflow-x: auto; /* Enable horizontal scrolling if needed */
`;
const imageStyle = {
    paddingTop: '50px', 
    paddingBottom: '30px',
    marginRight: '40px',
    maxWidth: '150px',
    //height: '100px',
  };
  

export default ClientsSection;
