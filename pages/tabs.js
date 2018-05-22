import Link from "next/link";
import Header from "../container/Header";
import Layout from "../container/components/Layout";
import fetch from "isomorphic-unfetch";
import Tabs from "../container/Tabs";

export default props => (
  <div>
    <Header />
    <Tabs />
    <style jsx global>
      {`
        @font-face {
          font-family: josephinSans;
          src: url("static/JosefinSans-Italic.ttf");
        }
        body {
          font-family: "josephinSans", "Lucida Sans Unicode", "Lucida Grande",
            sans-serif;
        }
        a {
          text-decoration: none
        }
      `}
    </style>
  </div>
);
