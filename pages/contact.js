// @flow
import React from "react";
import Link from "next/link";
import ContactComponent from "../container/Contact";
import Footer from "../container/components/Footer";
import Header from "../container/Header";

type Props = {
  pathname: string
};

const Contact = (props: Props) => (
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

export default Contact;
