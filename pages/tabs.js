// @flow
import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import Header from '../src/containers/Header';
import TabsComponent from '../src/containers/Tab';

type Props = {
  pathname: string,
  tabs: Array<any>
};

const Tabs = ({ pathname, tabs, err }: Props) => {
  if (err.message !== '' && err.status !== '') {
    return (
      <div>
        Error status: {err.status} {err.message}
      </div>
    );
  }
  return (
    <div>
      <Header pathname={pathname} />
      {tabs.map(tab => (
        <TabsComponent url={tab.url} title={tab.author} date={'12/11/1996'} />
      ))}
      <style jsx global>
        {`
          body {
            font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
          }
          a {
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

Tabs.getInitialProps = async function(context) {
  return { pathname: context.pathname };
};

const mapStateToProps = ({ videos }) => ({
  tabs: videos.tabs,
  err: videos.err
});

export default connect(mapStateToProps)(Tabs);
