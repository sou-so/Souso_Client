import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useObserver = (data, fetchNextPage) => {
  const ObserverComponent = () => {
    const [ref, inView] = useInView();

    useEffect(() => {
      const pageLastIdx = data && data.pages.length - 1;
      const isLast = data && !data.pages[pageLastIdx].has_next;
      if (!isLast && inView) {
        fetchNextPage();
      }
    }, [inView]);

    return <div ref={ref} />;
  };

  return { ObserverComponent };
};
