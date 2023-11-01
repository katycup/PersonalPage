import React, { useState } from 'react';
import styled from 'styled-components';
import php from '../../assets/about/techStack/Pho.png';
import css from '../../assets/about/techStack/Css.png';
import js from '../../assets/about/techStack/js.png';
import html from '../../assets/about/techStack/html5.webp';
import react from '../../assets/about/techStack/react.png';
import vite from '../../assets/about/techStack/vite.png';
import typo from '../../assets/about/techStack/typo.png';
import python from '../../assets/about/techStack/python.png';
import pandas from '../../assets/about/techStack/pandas.png';
import numpi from '../../assets/about/techStack/numpi.png';
import matplot from '../../assets/about/techStack/matplt.png';
import sci from '../../assets/about/techStack/sci.svg';
import tf from '../../assets/about/techStack/Tf.png';
import keras from '../../assets/about/techStack/keras.png';
import sk from '../../assets/about/techStack/sklearn.png';
import matlab from '../../assets/about/techStack/matlab.png';
import simulink from '../../assets/about/techStack/simulink.png';
import labview from '../../assets/about/techStack/labview.png';
import FramerComponent from './Framer';

const TabbedSquare = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoverText, setHoverText] = useState(''); // State to store hover text
  
  const tabs = [
    {
      title: 'Full-Stack',
      content: [
        { src: php, alt: 'Full-Stack Image 1', hoverText: 'PHP', skillLevel: 4 },
        { src: css, alt: 'Full-Stack Image 2', hoverText: 'CSS' , skillLevel: 5},
        { src: js, alt: 'Full-Stack Image 2', hoverText: 'JavaScript' , skillLevel: 4},
        { src: html, alt: 'Full-Stack Image 2', hoverText: 'HTML' , skillLevel: 5},
        { src: react, alt: 'Full-Stack Image 2', hoverText: 'React', skillLevel: 3},
        { src: vite, alt: 'Full-Stack Image 2', hoverText: 'Vite', skillLevel: 3 },
        { src: typo, alt: 'Full-Stack Image 2', hoverText: 'Typo3' , skillLevel: 4},
      ],
    },
    {
        title: 'Data Science', 
        content: [
          { src: python, alt: 'Full-Stack Image 1', hoverText: 'Python', skillLevel: 5},
          { src: pandas, alt: 'Full-Stack Image 2', hoverText: 'pandas' , skillLevel: 5},
          { src: numpi, alt: 'Full-Stack Image 2', hoverText: 'NumPy' , skillLevel: 5},
          { src: matplot, alt: 'Full-Stack Image 2', hoverText: 'Matplotlib', skillLevel: 5 },
          { src: sci, alt: 'Full-Stack Image 2', hoverText: 'SciPy', skillLevel: 5 },
          { src: matlab, alt: 'Full-Stack Image 2', hoverText: 'MatLab', skillLevel: 4 },
          // Add more images and hover text as needed
        ],
      },
      {
        title: 'Machine Learning', 
        content: [
          { src: tf, alt: 'Full-Stack Image 1', hoverText: 'Tensorflow' , skillLevel: 3},
          { src: keras, alt: 'Full-Stack Image 2', hoverText: 'Keras' , skillLevel: 3},
          { src: sk, alt: 'Full-Stack Image 2', hoverText: 'scikit learn' , skillLevel: 5},
        ],
      },
      {
        title: 'Other Technologies', 
        content: [
          { src: simulink, alt: 'Full-Stack Image 1', hoverText: 'Simulink' , skillLevel: 3},
          { src: labview, alt: 'Full-Stack Image 2', hoverText: 'LabVIEW' , skillLevel: 4},
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
            <FramerComponent skillLevel={item.skillLevel} />
           
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
  width: 100%;
  display: flex;
  flex-direction: column;
  opacity: 1;
  border-radius: 16px;
  overflow: auto; /* To handle image overflow */
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
    height: '100px',
  };
  

export default TabbedSquare;
