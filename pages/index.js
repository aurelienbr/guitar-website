// @flow
import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { Provider } from "react-redux";

import Head from "next/head";
import Header from "../container/Header";
import Video from "../container/components/Video";

type Props = {
  pathname: string,
  videos: Array<any>
};

class Videos extends React.Component<Props> {
  static getInitialProps({ pathname, store }) {
    return { pathname };
  }

  render() {
    const { videos, pathname } = this.props;
    return (
      <div>
        <Head>
          <title>Aurélien guitar</title>
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

const mapStateToProps = ({ videos }) => ({
  videos: videos.videos
});

export default connect(mapStateToProps)(Videos);
