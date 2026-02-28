
'use client';

import React, { useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from '../Page';
import { useBook } from '../../context/BookContext';
import { motion, AnimatePresence } from 'framer-motion';

const EditorPreview = () => {
    const { pages, currentPageIndex, setCurrentPageIndex, bookSettings } = useBook();
    const bookRef = useRef();

    // Sync Preview flip with sidebar selection
    useEffect(() => {
        if (bookRef.current && bookRef.current.pageFlip()) {
            // Basic attempt to sync visual page with selected index
            // Note: real app would need more robust sync logic
            try {
                // If odd index (right page), show it
                const visualIndex = currentPageIndex % 2 === 0 ? currentPageIndex : currentPageIndex - 1;
                // bookRef.current.pageFlip().flip(visualIndex); 
            } catch (e) {
                // Ignore initial loading errors
            }
        }
    }, [currentPageIndex]);

    return (
        <div className={`flex-1 flex flex-col items-center justify-center bg-zinc-950 relative overflow-hidden theme-${bookSettings.theme || 'modern'}`}>

            {/* Background Grid for "Editor" Vibe */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />

            <div className="z-10 relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={bookSettings.theme}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <HTMLFlipBook
                            width={500}
                            height={700}
                            size="fixed"
                            minWidth={300} // Responsive
                            maxWidth={600}
                            minHeight={400}
                            maxHeight={800}
                            showCover={true}
                            mobileScrollSupport={true}
                            className={`shadow-2xl transition-all duration-500 ${bookSettings.showShadows ? 'drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : ''}`}
                            ref={bookRef}
                            flippingTime={800}
                            usePortrait={false}
                        >
                            {pages.map((page, index) => (
                                <div key={page.id} className="demoPage">
                                    <Page
                                        type={page.type || 'standard'}
                                        title={page.title}
                                        content={page.content}
                                        videoUrl={page.videoUrl}
                                        imageBg={page.bgImage}
                                        pageNumber={index + 1}
                                    // Pass interactive props if needed
                                    />
                                </div>
                            ))}
                            {/* End Cover */}
                            <div className="bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                                <h2 className="text-zinc-700 font-mono text-xl uppercase tracking-widest">End of Content</h2>
                            </div>
                        </HTMLFlipBook>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Live Editor Controls Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-zinc-800/80 backdrop-blur-md px-6 py-2 rounded-full border border-zinc-700 flex gap-4 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    LIVE PREVIEW
                </div>
                <div className="border-l border-zinc-600 pl-4">
                    {bookSettings.theme.toUpperCase()} THEME
                </div>
                <div className="border-l border-zinc-600 pl-4">
                    Desktop Mode
                </div>
            </div>
        </div>
    );
};

export default EditorPreview;
