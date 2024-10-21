import './footer.css'; 
const Footer = () => (
    <footer class="footer">
      <img src="src/assets/Main_page/logo.png" width="100px" height="100px"/> 
      <div class="footer-column">
          <ul>
              <li><a href="#">Main</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Certifications</a></li>
          </ul>
      </div>
      <div class="footer-column">
          <h3>Contacts</h3>
          <p>1234 Sample Street<br/>Austin, Texas 78704</p>
          <p>📞 512.333.2222</p>
      </div>
      <div class="footer-column social-media">
          <h3>Social Media</h3>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Pinterest</a>
      </div>
  </footer>

  );
  
  export default Footer;
  