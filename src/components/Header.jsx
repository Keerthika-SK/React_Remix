import { Link } from 'react-router-dom';

const Header = () => (
    <header>
      <img src="src/assets/Main_page/logo.png" width="100px" height="100px"/>
      <div class="Anchor">
      <a href="/">MAIN</a>
      <a href="/Gallery">GALLERY</a>
      <a href="/Projects">PROJECTS</a>
      <a href="/Certification">CERTIFICATIONS</a>
      <a href="/Contact">CONTACTS</a>
      </div>
      </header>

);

export default Header;
