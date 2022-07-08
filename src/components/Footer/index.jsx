import { h } from "preact";
import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Aksh Bansal
      <small className={Styles.byline}>🚀 Built by Astro</small>
    </footer>
  );
}
export default Footer;
