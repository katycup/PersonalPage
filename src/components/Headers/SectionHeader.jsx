import Line from '../../LineAcrossPage';
import '../../App.css'

const SectionHeader = ({ title }) => {
    return (
        <>
        <span id='reg-text' style={styles.regTextStyle}>
            {title}
        </span>
        <Line /> 
        </>
    );
};

const styles = {
    regTextStyle: {
        textAlign: 'left',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 400,
        letterSpacing: '0.1px',
        color: '#d3d3d3', // Replace with the desired text color
        paddingTop: '20px', // Add top padding of 20px
    },
};

export default SectionHeader;