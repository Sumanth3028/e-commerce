
import classes from './Footer.module.css'


const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className="container main-footer-container">
        <h3 className={classes.title}>Footer</h3>
        {/* <ul className="nav footer-nav">
          <li>
            <a to="route" href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <img src={youtube} alt='ypotube'/>
            </a>
          </li>
          <li>
            <a href="https://www.spotify.com" target="_blank" rel="noreferrer">
              <img src={spotify} alt='spotify'/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={facebook} alt='facebook'/>
            </a>
          </li>
        </ul>
  */}
  </div>
    </footer>
  );
};

export default Footer;
