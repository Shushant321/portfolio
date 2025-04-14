import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || email.indexOf("@") === -1) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    setStatus("sending");

    emailjs.send(
      "service_fgwg30u",       // ✅ Your EmailJS service ID
      "template_z1mb9ao",      // ✅ Your EmailJS template ID
      { user_email: email },   // ✅ Template variable
      "iwahsJ5vvM1v8J_FY"      // ✅ Your public key
    )
    .then(() => {
      setStatus("success");
      setMessage("Thanks for subscribing!");
      setEmail('');
    })
    .catch(() => {
      setStatus("error");
      setMessage("Failed to subscribe. Please try again.");
    });
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br />& Never miss latest updates</h3>
            {status === 'sending' && <Alert variant="info">Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
