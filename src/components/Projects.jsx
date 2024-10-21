// src/components/Projects.jsx
import React from 'react';
import project1 from '../assets/projects_page/project_1.jpg'; // Adjust paths to your images
import project2 from '../assets/projects_page/project_2.png';
import project3 from '../assets/projects_page/project_3.jpg';

const Projects = () => (
  <div style={styles.container}>
      <ProjectBox 
          image={project1} 
          title="Sample Project 1" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ProjectBox 
          image={project2} 
          title="Sample Project 2" 
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ProjectBox 
          image={project3} 
          title="Sample Project 3" 
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
  </div>
);

// Component for each project box
const ProjectBox = ({ image, title, description }) => (
  <div style={styles.box}>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.textSection}>
          <h3 style={styles.title}>{title}</h3>
          <p style={styles.description}>{description}</p>
          <button style={styles.button}>View More</button>
      </div>
  </div>
);

// CSS styles
const styles = {
  container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
  },
  box: {
      display: 'flex',
      alignItems: 'center', // Align items vertically centered
      backgroundColor: '#f9f9f9', // Light background for the box
      border: '1px solid #ddd', // Light gray border
      borderRadius: '8px', // Rounded corners
      margin: '10px 0',
      padding: '20px',
      width: '80%', // Adjust as needed
  },
  image: {
      width: '450px', // Fixed width for the image
      height: 'auto',
      borderRadius: '8px', // Rounded corners for image
      marginRight: '20px', // Space between image and text
  },
  textSection: {
      flex: 1, // Allow text section to take remaining space
  },
  title: {
      fontSize: '1.5rem',
      margin: '10px 0',
  },
  description: {
      fontSize: '1rem',
      color: '#555', // Gray color for text
  },
  button: {
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: 'white',
      border: '2px solid gray',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '10px',
      transition: 'background-color 0.3s',
  },
};

export default Projects;