// @flow
import React from 'react';

type Props = {
  author: string,
  width: number,
  height: number,
  title: string,
  src: string,
  description: string,
  tab: string
};
// add a type of tab on thebackend either URL or PDF

const VideoMain = ({
  width,
  height,
  title,
  src,
  description,
  author,
  tab
}: Props) => {
  return (
    <div className="container">
      <h1 className="title-container">{title}</h1>
      <iframe title={title} src={src} width={width} height={height}>
        <p>Your browser does not support iframes.</p>
      </iframe>
      <div className="description-container">
        <p>{description}</p>
      </div>
      <div className="author-download">
        <p className="author">Author: {author}</p>
        <p>
          Download the tab:
          <a href={tab} target="_blank">
            {' ' + tab}
          </a>
        </p>
      </div>
      <style jsx>{`
        .container {
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title-container {
          text-align: center;
        }
        .description-container {
          width: ${width}px;
          max-width: ${width}px;
          text-align: justify;
        }
        .author-download {
          display: flex;
          justify-content: space-between;
          width: ${width}px;
        }
        .author {
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default VideoMain;
