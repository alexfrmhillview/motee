import {Container,Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/custom.css';
import brand from '../assets/sthil.png';

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerStyle ={
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(146, 172, 111, 100)",
        color: "#fff",
        textAlign: "center",
    };

    const dividerStyle = {
        borderRight: '.05px solid #fff',
      };


    return (
      <footer style={footerStyle}>
        <Container>
          <Row>
            <Col md={4} className="text-center py-4" style={dividerStyle}>
              <h5>OPENING HOURS</h5>
              <p>
                SUNDAY……….8:00AM – 11:00AM <br />
                MONDAY……….8:00AM – 5:00PM <br />
                TUESDAY……….8:00AM – 5:00PM <br />
                WEDNESDAY……….8:00AM – 5:00PM <br />
                THURSDAY……….8:00AM – 5:00PM <br />
                FRIDAY……….8:00AM – 5:00PM <br />
                SATURDAY……….8:00AM – 3:00PM <br />
              </p>
            </Col>

            <Col md={4} className="text-center py-4" style={dividerStyle}>
              <h5>LOCATION</h5>
              <p>
                Corner Ojoe Road & River St <br />
                Sangre Grande <br />
                Trinidad & Tobago <br />
              </p>
            </Col>

            <Col md={4} className="text-center py-4">
              <h5>CONTACT</h5>
              <p>
                PHONE: 668-2949 <br />
                E-MAIL: moteeandson@yahoo.com
                <br />
              </p>

              <a
                href="https://www.facebook.com/moteeandson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  style={{ color: "white", margin: "0 10px" }}
                />
              </a>

              <a
                href="https://www.instagram.com/moteeandson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  style={{ color: "white", margin: "0 10px" }}
                />
              </a>
            </Col>
          </Row>

          {/* Bottom Banner */}
          <Row>
            <Col className="text-center py-2">
              <p>Motee & Son's | Garden Shop & Fed Depot © {currentYear}</p>
            </Col>
          </Row>

        </Container>
        <div className="stihl-row">
        <Row >
            <Col className="text-center py-1">
              <p style={{paddingTop: "7px"}}>Authorized <img src={brand} alt="brand" className="brand" href="www.stihlusa.com" /> Dealer</p>
            </Col>
          </Row>
          </div>
      </footer>
    );
}
export default Footer