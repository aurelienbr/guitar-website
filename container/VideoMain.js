import PropTypes from "prop-types";

const VideoMain = ({ width, height, title, src, description, author }) => {
  return (
    <div className="container">
      <h1 className="description-container title-container">{title}</h1>
      <iframe title={title} src={src} width={width} height={height}>
        <p>Your browser does not support iframes.</p>
      </iframe>
      <div className="description-container">
        <p>{description}</p>
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
        }
      `}</style>
    </div>
  );
};

VideoMain.propTypes = {
  author: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default VideoMain;
