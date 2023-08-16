import "../styles/NewsletterStyle/Newsletter.scss";

import { Send } from "@mui/icons-material"

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Newsletter</h1>
      <p>Get timely updates from your favorite products.</p>
      <div className="newsletter_form">
        <input placeholder="Enter Your Email" />
        <button>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
