import PropTypes from "prop-types";
import Button from "./components/Button";

const BUTTONS = [
  {
    id: 1,
    text: "Home",
    href: "/"
  },
  {
    id: 2,
    text: "Tabs",
    href: "/tabs"
  },
  {
    id: 3,
    text: "Contact",
    href: "/contact"
  }
];

class Header extends React.Component {
  render() {
    const { pathname } = this.props;
    return (
      <header className="header">
        <h1>Aurélien à la guitare</h1>
        <div className="container-button">
          {BUTTONS.map(button => (
            <Button
              selected={button.href === pathname}
              key={button.id}
              href={button.href}
              route={button.href}
            >
              {button.text}
            </Button>
          ))}
        </div>

        <style jsx>
          {`
            .header {
              display: flex;
              justify-content: space-around;
              border-bottom: 1px solid #e056fd;
            }
            .container-button {
              display: flex;
            }
          `}
        </style>
      </header>
    );
  }
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Header;
