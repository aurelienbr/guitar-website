import PropTypes from "prop-types";
import Link from "next/link";

const Video = ({
  id,
  width,
  height,
  title,
  src,
  description,
  href,
  author
}) => {
  return (
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
};

Video.propTypes = {
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default Video;
