import React, { useState, useEffect, useRef } from 'react';
import hat from '../../assets/about/gradhat.png';
import work from '../../assets/about/work.png';
import SectionHeader from '../Headers/SectionHeader';
import SectionContent from './SectionContentMobile';
import {
  ProfessionalExperience,
  EducationalExperience,
  BachelorSubject,
  MasterTitle,
  MasterContent,
  BachelorTitle,
  CompanyName,
  Roles,
} from '../../constants/ExperienceConstants';
import '../../App.css'

const ResumeMobile = () => {
  const educationContainerRef = useRef(null);
  const experienceContainerRef = useRef(null);
  const [educationVisible, setEducationVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);

  const absatzStyle = {
    lineHeight: '1.5em',
    textAlign: 'left',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    fontWeight: 200,
    fontSize: '28px',
    letterSpacing: '0.1px',
    
    paddingTop: '20px',
    margin: '10px',
    animation: 'flyInFromLeft 1s ease-in-out',
  };

  const keyframes = `
    @keyframes flyInFromLeft {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }
  `;

  useEffect(() => {
    const educationObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEducationVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    const experienceObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setExperienceVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (educationContainerRef.current) {
      educationObserver.observe(educationContainerRef.current);
    }

    if (experienceContainerRef.current) {
      experienceObserver.observe(experienceContainerRef.current);
    }
  }, []);

  return (
    <>
      <div  ref={educationContainerRef} style={educationVisible ? { ...absatzStyle } : { ...absatzStyle, opacity: 0 }}>
        <style>{educationVisible ? keyframes : ''}</style>
        <SectionHeader title="Education" />
        <div style={styles.rowContainer}>
           <span style={styles.regTextStyle2}> {MasterTitle} </span> 
        </div>
        <div style={styles.rowContainer}>
          <div style={styles.colContainer}>
            <SectionContent time="2020-2023" title={MasterContent} imageSrc={hat} />
          </div>
        </div>
        
        <div style={styles.rowContainer}>
           <span style={styles.regTextStyle2}> {BachelorTitle} </span> 
        </div>
        <div style={styles.rowContainer}>
          <div style={styles.colContainer}>
            <SectionContent time="2016-2020" title={BachelorSubject} imageSrc={hat} />
          </div>
        </div>
        <div style={styles.rowContainer}>
          <div style={styles.colContainer2}>
          <span style={styles.regTextStyle3}>{EducationalExperience}</span>
          </div>
        </div>

        </div>
        
      <div
        ref={experienceContainerRef}
        style={experienceVisible ? { ...absatzStyle } : { ...absatzStyle, opacity: 0 }}
      >
        <style>{experienceVisible ? keyframes : ''}</style>
        <SectionHeader title="Professional Experience" />
      
        <div style={styles.rowContainer}>
           <span style={styles.regTextStyle2}> {CompanyName} </span> 
        </div>
        <div style={styles.rowContainer}>
          <div style={styles.colContainer}>
            <SectionContent time="2019-2023" title={Roles} imageSrc={work} />
          </div>
        </div>
        <div style={styles.rowContainer}>
          <div style={{...styles.colContainer2, marginTop: '40px'}}>
            <span style={styles.regTextStyle3}>{ProfessionalExperience}</span>
          </div>
        </div>
        
        
      </div>
    </>
  );
};

const styles = {
  rowContainer: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    width: '100%',
    marginLeft: '0',
  },
  colContainer: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    textAlign: 'left',
    flexDirection: 'column',
    width: '100%',
  },
  colContainer2: {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    textAlign: 'left',
    width: '100%',
    flexDirection: 'column',
    paddingTop: '5px',
  },
  regTextStyle2: {
    textAlign: 'left',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: '0.1px',
    color: '#bababa', // Replace with the desired text color
    fontSize: '20px',
    width: '100%',
    marginLeft:'3%',
  },
  regTextStyle3: {
    textAlign: 'center',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: '0.1px',
    color: '#bababa', // Replace with the desired text color
    fontSize: '16px',
    width: '100%',
  },
  linkStyle: {
    color: '#bababa',
    textDecoration: 'underline',
  },
};

export default ResumeMobile;
