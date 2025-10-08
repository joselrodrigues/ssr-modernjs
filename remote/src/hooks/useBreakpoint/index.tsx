import { useEffect, useState } from 'react';

const BREAKPOINTS = {
  small: '0px',
  medium: '768px',
  large: '1024px',
  extralarge: '1440px',
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('small');

  const checkBreakpoint = () => {
    const width = window.innerWidth;

    if (width >= 1440) {
      setBreakpoint('extralarge');
    } else if (width >= 1024) {
      setBreakpoint('large');
    } else if (width >= 768) {
      setBreakpoint('medium');
    } else {
      setBreakpoint('small');
    }
  };

  useEffect(() => {
    checkBreakpoint();

    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        checkBreakpoint();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoint;