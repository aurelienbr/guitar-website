import Link from "next/link";
import Header from "../container/Header";
import Layout from "../container/components/Layout";
import fetch from "isomorphic-unfetch";
import VideoMain from "../container/VideoMain";
import { videos } from "../api";

const Video = props => (
  <div>
    <Header />
    <VideoMain />
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
          text-decoration: none;
        }
      `}
    </style>
  </div>
);

Video.getInitialProps = async function(context) {
  const { _id } = context.query;
  const res = await videos.find({
    query: {
      _id
    }
  });

  return { videos: res.data };
};

export default Video;
