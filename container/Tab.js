// @flow
import React from "react";

type Props = {
  url: string,
  date: string,
  title: string
};

const Tab = ({ url, date, title }: Props) => (
  <div className="container">
    <p>{title}</p>
    <p>{date}</p>
    <a href={url} target="_blank">
      <p>{url}</p>
    </a>
    <style jsx>{`
      .container {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
        padding: 20px;
      }
      p {
        flex: 1;
      }
      a {
        flex: 1;
      }
    `}</style>
  </div>
);

export default Tab;
