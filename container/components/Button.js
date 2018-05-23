import React, { Component } from "react";
import Link from "next/link";

class Button extends Component {
  state = {
    active: false
  };

  render() {
    const { children, href, defaultMessage } = this.props;

    return (
      <div className="container">
        <Link href={href}>
          <a
            onClick={() => this.setState({ active: !this.state.active })}
            style={styles.button}
          >
            <p>{children}</p>
          </a>
        </Link>
        <style jsx>
          {`
            p {
              font-size: 26px;
              color: #9a4c8e;
            }
          `}
        </style>
      </div>
    );
  }
}

const styles = {
  button: {
    paddingTop: 7,
    paddingBottom: 7,
    height: 80,
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10
  }
};

export default Button;
