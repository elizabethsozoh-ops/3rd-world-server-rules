
'use client';

import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import useSound from 'use-sound';
import Page from './Page';

// Hardcoded 3rd World RP content for MVP demo
const RP_RULES = [
    {
        type: 'cover',
        imageBg: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1000' // Generic city night
    },
    {
        type: 'rule-left',
        title: 'NO META',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-glitch-loading-loop-2114-large.mp4' // Glitch effect
        // NOTE: For MVP we use placeholder stock videos. Real app would have specific assets.
    },
    {
        type: 'rule-right',
        content: '"Metagaming" is the act of using out-of-character (OOC) information in-character (IC). Do not use Discord, Twitch streams, or any external method to gain an advantage. If your character didn\'t see it or hear it, it didn\'t happen.',
        pageNumber: 2
    },
    {
        type: 'rule-left',
        title: 'VDM / RDM',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-police-car-lights-in-the-night-4217-large.mp4' // Police lights
    },
    {
        type: 'rule-right',
        content: 'Random Death Match (RDM) and Vehicle Death Match (VDM) are strictly prohibited. You cannot kill another player without a valid roleplay reason and initiation. Running people over with your car for fun is a permanent ban.',
        pageNumber: 4
    },
    {
        type: 'rule-left',
        title: 'NEW LIFE',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-heart-rate-monitor-screen-904-large.mp4' // Heart monitor
    },
    {
        type: 'rule-right',
        content: 'The New Life Rule (NLR). If you are "downed" and respawn at the hospital, you forget the events leading to your death. You cannot return to the scene of your death for 15 minutes. This prevents revenge loops.',
        pageNumber: 6
    }
];

const Book = () => {
    const bookRef = useRef(null);
    const audioRef = useRef(null);

    // Manual sound handling to ensure it works
    const playFlipSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.log("Audio play failed interaction required", e));
        }
    }

    const onFlip = (e) => {
        playFlipSound();
    };

    const nextFlip = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipNext();
        }
    };

    const prevFlip = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipPrev();
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-zinc-900 w-full overflow-hidden">
            {/* Audio Element for robustness */}
            <audio ref={audioRef} src="/sounds/flip.mp3" preload="auto" />

            {/* Previous Button */}
            <button
                onClick={prevFlip}
                className="absolute left-4 md:left-10 z-50 p-4 rounded-full bg-yellow-400 border-4 border-black shadow-[4px_4px_0px_#000] 
                           hover:translate-y-1 hover:shadow-none transition-all group active:scale-95"
                aria-label="Previous Page"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-black group-hover:-translate-x-1 transition-transform">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            <div className="relative z-10 scale-75 md:scale-90 xl:scale-100 transition-transform duration-500">
                <HTMLFlipBook
                    width={550}
                    height={733}
                    size="fixed"
                    minWidth={300}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1200}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={onFlip}
                    className="shadow-2xl"
                    ref={bookRef}
                    useMouseEvents={true}
                    usePortrait={false}
                    flippingTime={1000}
                >
                    {RP_RULES.map((page, index) => (
                        <div key={index} className="demoPage">
                            <Page
                                type={page.type || 'standard'}
                                title={page.title}
                                content={page.content}
                                videoUrl={page.videoUrl}
                                imageBg={page.imageBg}
                                pageNumber={index + 1}
                            />
                        </div>
                    ))}
                    {/* End Cover */}
                    <div className="bg-black text-white flex items-center justify-center border-l-4 border-zinc-800">
                        <h2 className="text-zinc-500 font-display text-4xl">END</h2>
                    </div>
                </HTMLFlipBook>
            </div>

            {/* Next Button */}
            <button
                onClick={nextFlip}
                className="absolute right-4 md:right-10 z-50 p-4 rounded-full bg-yellow-400 border-4 border-black shadow-[4px_4px_0px_#000] 
                           hover:translate-y-1 hover:shadow-none transition-all group active:scale-95"
                aria-label="Next Page"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-black group-hover:translate-x-1 transition-transform">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>

            {/* Visual Instructions */}
            <div className="absolute bottom-10 text-zinc-500 text-sm font-display tracking-widest animate-pulse pointer-events-none">
                USE ARROWS OR DRAG CORNERS
            </div>
        </div>
    );
};

export default Book;
