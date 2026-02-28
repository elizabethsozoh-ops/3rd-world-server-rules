
'use client';

import React from 'react';
import ComicBook from '@/components/ComicBook';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 overflow-hidden relative theme-comic">

      {/* Preload first book video - real video element so browser actually caches it */}
      <video
        src="/assets/allthree.mp4"
        preload="auto"
        autoPlay
        muted
        playsInline
        style={{ position: 'fixed', width: 1, height: 1, opacity: 0.01, pointerEvents: 'none', zIndex: -1 }}
      />

      {/* The Main Comic Product */}
      <ComicBook />

    </main>
  );
}
