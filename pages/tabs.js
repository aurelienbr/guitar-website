import Link from "next/link";
import PropTypes from "prop-types";

import Header from "../container/Header";
import Layout from "../container/components/Layout";
import TabsComponent from "../container/Tabs";

const Tabs = props => (
  <div>
    <Header pathname={props.pathname} />
    <TabsComponent />
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

Tabs.getInitialProps = async function(context) {
  return { pathname: context.pathname };
};

Tabs.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Tabs;
