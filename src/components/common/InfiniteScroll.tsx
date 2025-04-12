'use client';

import React, { useEffect, useRef, useState } from 'react';

interface InfiniteScrollProps {
  loadMore: (page: number) => void;
  hasMore: boolean;
  isLoading: boolean;
  children: React.ReactNode;
  loadingIndicator?: React.ReactNode;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  loadMore,
  hasMore,
  isLoading,
  children,
  loadingIndicator
}) => {
  const [page, setPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only set up the observer if we have more items to load
    if (!hasMore || isLoading) return;

    const currentLoaderRef = loaderRef.current; // Store ref in variable to use in cleanup

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoading) {
          // When the loader element is visible and we have more items to load
          const nextPage = page + 1;
          setPage(nextPage);
          loadMore(nextPage);
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '100px', // Start loading a bit before reaching the end
        threshold: 0.1 // Trigger when 10% of the element is visible
      }
    );

    if (currentLoaderRef) {
      observer.observe(currentLoaderRef);
    }

    return () => {
      if (currentLoaderRef) {
        observer.unobserve(currentLoaderRef);
      }
    };
  }, [hasMore, isLoading, loadMore, page]);

  return (
    <div className="w-full">
      {children}
      
      <div ref={loaderRef} className="w-full py-4">
        {isLoading && (
          loadingIndicator || (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default InfiniteScroll;