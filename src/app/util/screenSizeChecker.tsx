import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    // Function to check screen size and update the flag
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    // Initial check on component mount
    checkScreenSize();

    // Event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return isSmallScreen;
};

export default useScreenSize;