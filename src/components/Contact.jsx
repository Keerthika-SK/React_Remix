import React from 'react';
import mapImage from '../assets/assets/contact/image.png'; 

const Contact = () => (
    <div style={styles.container}>
        <div style={styles.textSection}>
            <h2 style={styles.heading}>Contact Us</h2>
            <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button style={styles.button}>Contact Us</button>
        </div>
        <div style={styles.imageSection}>
            <img src={mapImage} alt="Map" style={styles.mapImage} />
        </div>
    </div>
);

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        margin: '0 auto',
        maxWidth: '1200px', // Adjust based on your layout
    },
    textSection: {
        flex: '1',
        paddingRight: '20px',
    },
    imageSection: {
        flex: '1',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '10px',
    },
    paragraph: {
        fontSize: '1rem',
        color: '#666',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#4A90E2',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#357ABD',
    },
    mapImage: {
        width: '100%', // Responsive image
        maxWidth: '500px', // Limit the max width if needed
        height: 'auto',
    },
};

export default Contact;
