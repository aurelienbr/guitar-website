import Link from "next/link";
import PropTypes from "prop-types";
import Head from "next/head";

import Header from "../container/Header";
import Video from "../container/components/Video";

import { videos } from "../api";

class Videos extends React.Component {
  render() {
    const { videos, pathname } = this.props;
    return (
      <div>
        <Head>
          <title>This page has a title 🤔</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header pathname={pathname} />
        <main className="video-container">
          {videos.map(video => (
            <Video
              key={video._id}
              id={video._id}
              height={400}
              width={600}
              href={`/video?id=${video._id}`}
              author={video.author}
              title={video.title}
              src={video.video}
              description={video.description}
            />
          ))}
        </main>
        <style jsx global>
          {`
            body {
              font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
            }
            a {
              text-decoration: none;
            }
            .video-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 20px;
            }
          `}
        </style>
      </div>
    );
  }
}

Videos.getInitialProps = async function(context) {
  const res = await videos.find();
  return { videos: res.data, pathname: context.pathname };
};

Videos.propTypes = {
  videos: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired
};

export default Videos;
