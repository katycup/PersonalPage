import Line from '../../LineAcrossPage';

const SectionHeader = ({ title }) => {
    return (
        <>
        <span style={styles.regTextStyle}>
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
        fontSize: '28px',
        letterSpacing: '0.1px',
        color: '#d3d3d3', // Replace with the desired text color
        marginLeft: '2.5%',
        paddingTop: '20px', // Add top padding of 20px
    },
};

export default SectionHeader;