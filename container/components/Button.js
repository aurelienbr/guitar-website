import Link from "next/link";
import PropTypes from "prop-types";

class Button extends React.Component {
  state = {
    active: false
  };

  render() {
    const { children, href, selected } = this.props;

    return (
      <div className="container">
        <Link href={href}>
          <a onClick={() => this.setState({ active: !this.state.active })}>
            <p className={selected && "selected-button"}>{children}</p>
          </a>
        </Link>
        <style jsx>
          {`
            .container {
              margin-left: 10px;
              margin-right: 10px;
            }
            .selected-button {
              border-bottom: 2px solid #9a4c8e;
            }
            p {
              font-size: 26px;
              color: #9a4c8e;
            }
            a {
              height: 80px;
              text-transform: uppercase;
            }
          `}
        </style>
      </div>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  selected: PropTypes.boolean
};

export default Button;
