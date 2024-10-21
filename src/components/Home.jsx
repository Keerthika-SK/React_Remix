import React from 'react';
import mainImage from '../assets/Main_page/main.png'; 
import secondImage from '../assets/Main_page/image.png'; 
import screenshotImage from '../assets/Main_page/Screenshot 2024-10-14 223635.png'; 

const Home = () => (
    <div style={styles.container}>
        <img src={mainImage} alt="Main" style={styles.mainImage} />
        <div style={styles.textOverlay}>
            <span style={styles.text}>PROJECT<br />LORUM</span>
        </div>
        <img src={secondImage} alt="Second" style={styles.secondImage} />
        <img src={screenshotImage} alt="Screenshot" style={styles.screenshotImage} />
    </div>
);

const styles = {
    container: {
        position: 'relative',
        textAlign: 'center', 
    },
    mainImage: {
        height: '450px',
        marginLeft: '45%',
        width: 'auto', 
        transform: 'translateX(-50%)', 
    },
    textOverlay: {
        position: 'absolute',
        top: '450px',
        left: '50%',
        transform: 'translateX(-50%)', 
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        fontSize: '50px',
        fontWeight: 'bolder',
        color: 'black', // Optional: add color to text
    },
    secondImage: {
        padding: '0',
        margin: '0',
        width: '100%', // Make it responsive
        maxWidth: '1500px', // Set max width
    },
    screenshotImage: {
        width: '100%', // Make it responsive
        maxWidth: '1500px', // Set max width
    },
};

export default Home;
