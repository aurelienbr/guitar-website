import Link from "next/link";
import Header from "../container/Header";
import Layout from "../container/components/Layout";
import fetch from "isomorphic-unfetch";
import VideoMain from "../container/VideoMain";
import axios from "axios";
import { videos } from "../api";

const Video = ({ video }) => {
  return (
    <div>
      <Header />
      <VideoMain
        author={video.author}
        height={400}
        width={700}
        title={video.title}
        src={video.video}
        title={video.title}
        description={video.description}
      />
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
};

Video.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await videos.find({ query: { _id: id } });
  return { video: res.data[0] };
};

export default Video;
