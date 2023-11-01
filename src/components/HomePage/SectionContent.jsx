import Line2 from '../../ThinnerLineAcross';

const SectionContent = ({ title, time, subtitle,imageSrc }) => {
    return (
        <>
        <div style={styles.rowContainer}>
        <div style={styles.regTextStyle3}> 
              {time}
            </div>

            <img src={imageSrc} alt="Responsive Image" style={styles.responsiveIconStyles} />
            
            <div style={styles.imageContainer}>
                <span style={regTextStyle}>
                    { title }
                </span>
                <span style={styles.regTextStyle2}>
                    { subtitle }
                </span>
            </div>
        </div>
        <Line2 />
        </>
    );
};

const regTextStyle={
    textAlign: 'left',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '28px',
    letterSpacing: '0.1px',
    color: '#d3d3d3', // Replace with the desired text color
    marginLeft: '40px',
    paddingTop: '20px', // Add top padding of 20px
  }
  

const styles = {
   
    regTextStyle2: {
        ...regTextStyle,
        fontSize: '18px',
        color: '#bababa',
      },
    rowContainer:{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        width: '90%', // Set the width to 50% of the page width
        marginLeft: '0', // Align the container to the left bound
      },
    regTextStyle2:{
        textAlign: 'left',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        letterSpacing: '0.1px',
        color: '#bababa', // Replace with the desired text color
        marginLeft: '40px',
      },
      regTextStyle3:{
        textAlign: 'left',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        letterSpacing: '0.1px',
        color: '#bababa', // Replace with the desired text color
        marginRight:'20px'
      },
    responsiveIconStyles: {
        width: '65px', // Set the maximum width to 10% (adjust as needed)
        height: 'auto', // Maintain the aspect ratio
        display: 'block',
        borderRadius: '5%',
        overflow: 'hidden',
      },
    imageContainer : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        textAlign: 'center',
        flexDirection: 'column',
        width: '80%', // Set the width to 50% of the page width
        marginLeft: '0', // Align the container to the left bound
      },
      imageContainer2 : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        textAlign: 'center',
        flexDirection: 'column',
        width: '30%', // Set the width to 50% of the page width
        marginLeft: '0', // Align the container to the left bound
      },
};

export default SectionContent;