import React from "react";
// import Style from "./Start.module.scss"
import Paragraph from "./Paragraph";

const Start = () => (
  <div>
    <Paragraph>{`音が出る場合・目まぐるしい画面変遷、
    その他精神的に痛めつけられる
    場合があります。予めご了承ください。`}</Paragraph>
    <Paragraph>この物語はフィクションです。</Paragraph>
    <button type="button">進む</button>
  </div>
);

export default Start;
