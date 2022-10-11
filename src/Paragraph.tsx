import React from "react";
import Style from "./Paragraph.module.scss"

type Props = {
  children: string;
};

const Paragraph: React.FC<Props> = ({ children }) => (
  <div className={Style.pg}>
    <p>{children}</p>
  </div>
);

export default Paragraph;
