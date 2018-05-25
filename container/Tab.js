import PropTypes from "prop-types";

const Tab = ({ url, date, title }) => (
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

Tab.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Tab;
