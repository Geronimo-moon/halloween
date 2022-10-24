import React, {useState} from 'react';

const scrollTop = (): number => {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  };

const useScroll = () => {
    const [scroll, setScroll] = useState<number | undefined>(() => scrollTop()); 
}