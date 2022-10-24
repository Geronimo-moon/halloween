import React, {useState} from "react";
import Paragraph from "./Paragraph";

const scrollTop = (): number => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
};

const App = () => {
  const [scroll, setScroll] = useState(() => scrollTop()); 

  return (<>
    <Paragraph>{`音が出る場合・目まぐるしい画面変遷、その他
    \n精神的に痛めつけられる場合があります。予めご了承ください。`}</Paragraph>
    <Paragraph>{
      `この物語はフィクションです。`}</Paragraph>
  </>);
};

export default App;
