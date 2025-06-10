import React from 'react';
import Enterprise from './Enterprise';
import Navigation from '../../Components/Navigation';

export default function Index() {
  return (
    <div className="relative  w-full min-h-screen">
      <Navigation />
      <Enterprise />
    </div>
  );
}