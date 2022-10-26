import React from "react";
import { css } from '@emotion/react'

type Props = {
  children: string;
  scare?: boolean;
};

const stylePg = css`
  border-bottom: 1px solid rgb(255, 255, 255);
  border-top: 1px solid rgb(255, 255, 255);
`

const styleScare = css`color: crimson;`

const Paragraph: React.FC<Props> = ({ children, scare }) => (
  <div css={scare ? [stylePg,styleScare]:stylePg}>
    <p>{children}</p>
  </div>
);

export default Paragraph;
