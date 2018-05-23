import PropTypes from "prop-types";
import Link from "next/link";

const Video = ({
  width,
  height,
  title,
  src,
  description,
  titleDescription,
  href
}) => (
  <div className="container">
    <iframe title={title} src={src} width={width} height={height}>
      <p>Your browser does not support iframes.</p>
    </iframe>
    <Link href={href}>
      <div className="description-container">
        <p>{titleDescription}</p>
        <p>{description}</p>
      </div>
    </Link>
    <style jsx>{`
      .container {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .description-container {
        width: ${width}px;
        max-width: ${width}px;
        max-height: 100px;
        word-wrap: break-word;
      }
      .description-container:hover {
        cursor: pointer;
      }
    `}</style>
  </div>
);

Video.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default Video;
