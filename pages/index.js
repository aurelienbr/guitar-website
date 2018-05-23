import Link from "next/link";
import Header from "../container/Header";
import Layout from "../container/components/Layout";
import Video from "../container/components/Video";
import fetch from "isomorphic-unfetch";

export default props => (
  <div>
    <Header />
    <main className="video-container">
      <Video
        height={400}
        width={600}
        href="/video"
        title="Je sais pas ce que c'est"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        titleDescription="Hayao Miyazaki"
        description="c'est génial le meilleur truc du monde"
      />
      <Video
        height={400}
        width={600}
        href="/video"
        title="Je sais pas ce que c'est"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        titleDescription="Princesse mononoke"
        description="j'adore cette musique"
      />
    </main>
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
