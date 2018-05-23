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
        <style jsx>
          {`
            .header {
              display: flex;
              justify-content: flex-end;
              border-bottom: 1px solid #e056fd;
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
