import Link from "next/link";
import Header from "../container/Header";
import ContactComponent from "../container/Contact";
import Footer from "../container/components/Footer";

import PropTypes from "prop-types";

const Contact = props => (
  <div>
    <Header pathname={props.pathname} />
    <ContactComponent />
    <Footer />
    <style jsx global>
      {`
        body {
          font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        }
        a {
          text-decoration: none;
        }
      `}
    </style>
  </div>
);

Contact.getInitialProps = async function(context) {
  return { pathname: context.pathname };
};

Contact.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Contact;
