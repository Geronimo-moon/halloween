import React from "react";
import Style from "./Paragraph.module.scss";

type Props = {
  children: string;
  scare?: boolean;
};

const Paragraph: React.FC<Props> = ({ children, scare = false }) => (
  <div className={scare ? `${Style.pg} ${Style.scare}` : Style.pg}>
    <p>{children}</p>
  </div>
);

export default Paragraph;
