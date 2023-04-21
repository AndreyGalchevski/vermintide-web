import { useEffect, MutableRefObject } from 'react';

const useOnClickOutside = (
  ref: MutableRefObject<HTMLDivElement | null>,
  handler: () => void,
): void => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
