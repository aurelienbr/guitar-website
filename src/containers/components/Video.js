// @flow
import React from 'react';
import Link from 'next/link';

type Props = {
  author: string,
  id: string,
  width: number,
  height: number,
  title: string,
  src: string,
  description: string,
  href: string
};

const Video = ({
  id,
  width,
  height,
  title,
  src,
  description,
  href,
  author
}: Props) => (
  <div className="container">
    <Link as={`/video/${id}`} href={href}>
      <h1 className="title">{title}</h1>
    </Link>
    <iframe title={title} src={src} width={width} height={height}>
      <p>Your browser does not support iframes.</p>
    </iframe>
    <style jsx>{`
      .container {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;
      }
      .title {
        text-align: center;
      }
      .title:hover {
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default Video;
