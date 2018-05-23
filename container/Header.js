import React, { Component } from "react";
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

class Header extends Component {
  render() {
    return (
      <header className="header">
        {BUTTONS.map(button => (
          <Button key={button.id} href={button.href} route={button.href}>
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

export default Header;
