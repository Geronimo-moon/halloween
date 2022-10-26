import { useState } from "react";

const scrollTop = (): number =>
  Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );

const useScroll = () => {
  const [scroll, setScroll] = useState<number | undefined>(() => scrollTop());
  const nowScroll = scrollTop();
  if (nowScroll !== scroll) {
    setScroll(nowScroll);
  }
};

const hooks = { useScroll: () => useScroll() };

export default hooks;
