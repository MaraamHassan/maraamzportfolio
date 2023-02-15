import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/undraw_react_re_g3ui.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
// ---------------------------------------------------------------------------------
const Footer = () => {
return (
<footer className="footer">
<Container>
<Row className="align-items-center">
<MailchimpForm/>
<Col size={12} sm={6}>
<img src={logo} alt="Logo" />
</Col>
<Col size={12} sm={6} className="text-center text-sm-end">
{/* ---------------------------------------------------------------------------------------- */}
<div className="social-icon">
<a href="https://www.linkedin.com/in/mram-hassan-b9ab97231/"><img src={navIcon1} alt="Icon" /></a>
<a href="https://www.facebook.com/maraam.hassan97"><img src={navIcon2} alt="Icon" /></a>
<a href="https://www.instagram.com/maraam__hassan/"><img src={navIcon3} alt="Icon" /></a>
</div>
</Col></Row></Container>
</footer>
)}
export default Footer;