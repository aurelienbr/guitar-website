// @flow
import React from "react";
import Link from "next/link";
import Header from "../container/Header";
import PropTypes from "prop-types";

import VideoMain from "../container/VideoMain";
import Footer from "../container/components/Footer";
import { videos } from "../api";

type Props = {
  pathname: string,
  video: any
};

const Video = ({ pathname, video }: Props) => {
  return (
    <div>
      <Header pathname={pathname} />
      <VideoMain
        author={video.author}
        height={400}
        width={700}
        title={video.title}
        src={video.video}
        title={video.title}
        description={video.description}
        tab="http://hjg.com.ar/ghibli/musica/mononoke/"
      />
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
};

Video.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await videos.find({ query: { _id: id } });
  return { video: res.data[0], pathname: context.pathname };
};

Video.propTypes = {
  pathname: PropTypes.string.isRequired,
  video: PropTypes.object.isRequired
};

export default Video;
