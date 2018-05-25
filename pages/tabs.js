import Link from "next/link";
import PropTypes from "prop-types";

import Header from "../container/Header";
import TabsComponent from "../container/Tab";

const TabData = [
  {
    url: "http://hjg.com.ar/ghibli/musica/mononoke/",
    type: "url",
    title: "Princesse mononoke",
    date: "22/05/2018"
  },
  {
    url: "see_you_again.pdf",
    type: "pdf",
    title: "Nausicaa de la vallée du vent",
    date: "19/05/2018"
  },
  {
    url: "http://hjg.com.ar/ghibli/musica/mononoke/",
    type: "url",
    title: "Le chateau dans le ciel",
    date: "24/04/2018"
  }
];

const Tabs = props => (
  <div>
    <Header pathname={props.pathname} />
    {TabData.map(tab => (
      <TabsComponent
        url={tab.url}
        type={tab.type}
        title={tab.title}
        date={tab.date}
      />
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

export default Tabs;
