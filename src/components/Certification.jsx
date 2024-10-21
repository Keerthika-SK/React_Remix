// src/components/Certification.jsx
import React from 'react';

const Certification = () => (
    <div style={styles.container}>
        <p style={styles.company}>Company </p>
        <h1 style={styles.certification}>Certification</h1>
    </div>
);

// CSS styles
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
    },
    company: {
        fontSize: '1.5rem', // Adjust the size as needed
        color: 'gray', // Thin gray color
        margin: 0,
    },
    certification: {
        fontSize: '3rem', // Larger size for emphasis
        fontWeight: 'bold', // Thick bold text
        color: 'black', // Black color
        margin: '10px 0 0 0', // Margin to space it from the company name
    },
};

export default Certification;
