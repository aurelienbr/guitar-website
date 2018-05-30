// @flow
import React from "react";
import Link from "next/link";

type Props = {
  children: string,
  href: string,
  selected: boolean
};

const Button = ({ children, href, selected }: Props) => (
  <div className="container">
    <Link href={href}>
      <a>
        <p className={selected ? "selected-button" : "button"}>{children}</p>
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
        .button:hover {
          border-bottom: 1px solid #e056fd;
        }
        a {
          height: 80px;
          text-transform: uppercase;
        }
      `}
    </style>
  </div>
);

export default Button;
