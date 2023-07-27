import { useEffect, useState } from 'react';

const useResize = () => {
  const [width, setWidth] = useState([0]);

  useEffect(() => {
    const handleWidth = () => {
      setWidth([window.innerWidth]);
    };

    window.addEventListener('resize', handleWidth);

    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);

  return width;
};

export default useResize;
