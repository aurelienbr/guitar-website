import PropTypes from "prop-types";

const Tab = ({ url, date, title }) => (
  <div className="container">
    <p>{title}</p>
    <p>{date}</p>
    <a href={url} target="_blank">
      {url}
    </a>
    <style jsx>
      {`.container: {
        display: flex,
        width: 100% }`}
    </style>
  </div>
);

Tab.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Tab;
