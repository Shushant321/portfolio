import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail || trimmedEmail.indexOf("@") === -1) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    setStatus("sending");

    emailjs.send(
      "service_fgwg30u",       // ✅ Your EmailJS service ID
      "template_z1mb9ao",      // ✅ Your EmailJS template ID
      { user_email: trimmedEmail },   // ✅ Template variable
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

  // Auto clear alert after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
        setMessage('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

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
              <div className="new-email-bx" style={{ display: 'flex', gap: '10px' }}>
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  disabled={status === 'sending'}
                  style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'linear-gradient(to right, #a445b2, #4526b1)',
                    color: 'white',
                    fontWeight: 'bold',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'sending' ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
