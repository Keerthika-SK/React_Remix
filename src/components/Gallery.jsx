// src/components/Gallery.jsx
import React from 'react';

// Sample image imports (replace with your own images)
import img1 from '../assets/gallery_page/1.png';
import img2 from '../assets/gallery_page/2.png';
import img3 from '../assets/gallery_page/3.png';
import img4 from '../assets/gallery_page/4.png';
import img5 from '../assets/gallery_page/5.png';
import img6 from '../assets/gallery_page/6.png';
import img7 from '../assets/gallery_page/7.png';
import img8 from '../assets/gallery_page/8.png';
import img9 from '../assets/gallery_page/9.png';
import img10 from '../assets/gallery_page/10.png';

const Gallery = () => (
    <div style={{ padding: '20px' }}>
        <h2 >Photo Gallery</h2>
        <div style={styles.gallery}>
            <div style={styles.row}>
                <img src={img1} alt="Image 1" style={styles.image} />
                <img src={img2} alt="Image 2" style={styles.image} />
                <img src={img3} alt="Image 3" style={styles.image} />
                <img src={img4} alt="Image 4" style={styles.image} />
                <img src={img5} alt="Image 5" style={styles.image} />
            </div>
            <div style={styles.row}>
                <img src={img6} alt="Image 6" style={styles.image} />
                <img src={img7} alt="Image 7" style={styles.image} />
                <img src={img8} alt="Image 8" style={styles.image} />
                <img src={img9} alt="Image 9" style={styles.image} />
                <img src={img10} alt="Image 10" style={styles.image} />
            </div>
        </div>
    </div>
);

// CSS styles
const styles = {
    gallery: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    image: {
        width: '150px', // Adjust size as needed
        height: 'auto',
        margin: '1px',
    },
};

export default Gallery;
