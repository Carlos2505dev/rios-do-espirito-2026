import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .spinner {
          width: 48px;
          height: 48px;
          border: 4px solid rgba(211, 104, 60, 0.2);
          border-top: 4px solid hsl(16, 79%, 54%);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
      `}</style>
      <div className="spinner" />
    </div>
  );
};
