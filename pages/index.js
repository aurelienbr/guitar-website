import Link from "next/link";
import Header from "../container/Header";
import Layout from "../container/components/Layout";
import Video from "../container/components/Video";
import fetch from "isomorphic-unfetch";
import { videos } from "../api";

class Videos extends React.Component {
  render() {
    const { videos } = this.props;
    return (
      <div>
        <Header />
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
              titleDescription="Hayao Miyazaki"
              description={video.description}
            />
          ))}
        </main>
        <style jsx global>
          {`
            @font-face {
              font-family: josephinSans;
              src: url("static/JosefinSans-Italic.ttf");
            }
            body {
              font-family: "josephinSans", "Lucida Sans Unicode",
                "Lucida Grande", sans-serif;
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
  return { videos: res.data };
};

export default Videos;
