import React from 'react';
import './styles/coreLayout.scss';

export default function CoreLayout({ children }) {
  return (
    <div className="core-layout">
      {children}
    </div>
  )
}
