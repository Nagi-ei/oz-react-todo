import React from 'react';

export default function Button({ children, onClick, moreClass = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 m-0.5 border-2 border-transparent rounded-lg bg-neutral-700 hover:border-violet-900 active:bg-violet-900 ${moreClass}`}
    >
      {children}
    </button>
  );
}
