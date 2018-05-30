import Link from "next/link";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../container/Header";
import TabsComponent from "../container/Tab";

const Tabs = ({ pathname, tabs }) => (
  <div>
    <Header pathname={pathname} />
    {tabs.map(tab => (
      <TabsComponent url={tab.url} title={tab.author} date={"12/11/1996"} />
    ))}
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

const mapStateToProps = ({ videos }) => ({
  tabs: videos.tabs
});

export default connect(mapStateToProps)(Tabs);
