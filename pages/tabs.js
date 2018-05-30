// @flow
import React from "react";
import Link from "next/link";
import { connect } from "react-redux";

import Header from "../container/Header";
import TabsComponent from "../container/Tab";

type Props = {
  pathname: string,
  tabs: Array<any>
};

const Tabs = ({ pathname, tabs }: Props) => (
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

const mapStateToProps = ({ videos }) => ({
  tabs: videos.tabs
});

export default connect(mapStateToProps)(Tabs);
