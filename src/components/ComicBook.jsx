// REVIEWED: ANTIGRAVITY
'use client';

import React, { useRef, useState, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import { RULEBOOK_CONTENT } from '@/data/content';
import { motion, AnimatePresence } from 'framer-motion';
import RudeCop from './RudeCop';
import ZerNessBadge from './ZerNessBadge';

const ComicBook = ({ onReadComplete }) => {
    const bookRef = useRef(null);
    const masterAudioRef = useRef(null);
    const finalAudioRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const playedPagesRef = useRef(new Set());
    const hasPlayedFinalVoice = useRef(false);

    // Intro sequence: 'button' -> 'video' -> 'book'
    const [introStage, setIntroStage] = useState('button');
    const [isLocked, setIsLocked] = useState(false);

    const handleStartIntro = () => {
        if (masterAudioRef.current) {
            masterAudioRef.current.play().catch(e => console.error("Audio play failed:", e));
        }
        setIntroStage('video');
    };

    const handleStartBook = () => {
        setIntroStage('book');
        hasPlayedFinalVoice.current = false;
        // Small delay to ensure book mounts before we might want to flip
        setTimeout(() => {
            if (bookRef.current) {
                // Initial trigger for first spread videos
                handleVideoAudio(0);
            }
        }, 100);
    };

    const handleVideoAudio = useCallback((pageIndex) => {
        // ... rest of handleVideoAudio logic (no changes needed)
        const pagesToCheck = [pageIndex + 2, pageIndex + 3];

        pagesToCheck.forEach((pageNum) => {
            if (playedPagesRef.current.has(pageNum)) return;

            const videos = document.querySelectorAll(`video[data-page-video="${pageNum}"]`);
            videos.forEach((vid) => {
                if (vid.dataset.footerVideo) return;
                playedPagesRef.current.add(pageNum);
                // vid.currentTime = 0; // Removed to prevent black-frame seek glitch
                // vid.muted = false; // Removed unmuting to satisfy user request
                const muteOnLoop = () => {
                    vid.muted = true;
                    vid.removeEventListener('seeked', muteOnLoop);
                };
                vid.addEventListener('timeupdate', function checkPlaying() {
                    if (vid.currentTime > 0.5) {
                        vid.removeEventListener('timeupdate', checkPlaying);
                        vid.addEventListener('seeked', muteOnLoop, { once: true });
                    }
                });
            });
        });

        document.querySelectorAll('video[data-page-video]').forEach((vid) => {
            const vidPage = parseInt(vid.dataset.pageVideo);
            if (!pagesToCheck.includes(vidPage)) {
                vid.muted = true;
            }
        });
    }, []);

    const onFlip = (e) => {
        const pageIndex = e.data;
        setCurrentPage(pageIndex);
        setTimeout(() => handleVideoAudio(pageIndex), 300);

        // Trigger final voice audio at the end where smoke screens starts
        if (pageIndex >= RULEBOOK_CONTENT.length && !hasPlayedFinalVoice.current) {
            if (finalAudioRef.current) {
                finalAudioRef.current.play().catch(err => console.error("Final voice failed:", err));
                hasPlayedFinalVoice.current = true;
            }
        }

        if (pageIndex === (RULEBOOK_CONTENT.length)) {
            onReadComplete && onReadComplete();
        }
    };

    const nextFlip = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipNext();
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-black w-full overflow-hidden relative">
            <audio ref={masterAudioRef} src="/sounds/master_mix_1771151581416.wav" />
            <audio ref={finalAudioRef} src="/sounds/[Mortal Kombat]   NOW WE WILL SEE......... -.mp3" />

            <AnimatePresence mode="wait">
                {/* INTRO STAGE 1: STANDALONE COVER (Single Page) */}
                {introStage === 'button' && (
                    <motion.div
                        key="intro-stage-button"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1.25, opacity: 1, x: '0%' }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 w-[700px] h-[500px] shadow-2xl border-l-4 border-zinc-900"
                    >
                        <Page
                            id="intro-button"
                            type="intro-button"
                            onEnterCity={handleStartIntro}
                        />
                    </motion.div>
                )}

                {/* INTRO STAGE 2: STANDALONE VIDEO (Single Page) */}
                {introStage === 'video' && (
                    <motion.div
                        key="intro-stage-video"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1.25, opacity: 1, x: '0%' }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-20 w-[700px] h-[500px] shadow-2xl border-l-4 border-zinc-900"
                    >
                        <Page
                            id="intro-video"
                            type="intro-video"
                            videoUrl="/assets/Whisk_etojrznmjtm0ydn20cn0gtotewn1qtllljz20sm.mp4"
                            muted={true}
                            loop={true}
                            onEnterCity={handleStartBook}
                        />
                    </motion.div>
                )}

                {/* THE ACTUAL BOOK (Dual Page) */}
                {introStage === 'book' && (
                    <motion.div
                        key="intro-stage-book"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1.25, opacity: 1, x: '0%' }}
                        exit={{ scale: 1, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        <div className="absolute -inset-10 bg-cyan-500/5 blur-3xl rounded-full z-0 transform translate-y-10" />

                        <HTMLFlipBook
                            width={700}
                            height={500}
                            size="fixed"
                            minWidth={400}
                            maxWidth={1000}
                            minHeight={300}
                            maxHeight={800}
                            maxShadowOpacity={0.5}
                            showCover={false}
                            mobileScrollSupport={true}
                            onFlip={onFlip}
                            className="shadow-2xl"
                            ref={bookRef}
                            useMouseEvents={true}
                            usePortrait={false}
                            flippingTime={1500}
                            style={{ background: 'transparent' }}
                        >
                            {RULEBOOK_CONTENT.map((page, index) => (
                                <div key={page.id || index} className="demoPage" data-density={page.type === 'cover' ? 'hard' : 'soft'}>
                                    <Page
                                        {...page}
                                        type={page.type || 'comic-panel'}
                                        pageNumber={index + 2} // offset by 2 for intro pages styling
                                        onEnterCity={nextFlip}
                                    />
                                </div>
                            ))}

                            {/* Final End Cover — Video Back Page */}
                            <div className="demoPage comic-page bg-black relative overflow-hidden" data-density="hard">
                                <video
                                    src="/assets/backpage.mp4"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    playsInline
                                    preload="auto"
                                    onEnded={(e) => {
                                        // Track loop count locally inside the element for simplicity
                                        const loopCount = parseInt(e.target.dataset.loops || "0") + 1;
                                        e.target.dataset.loops = loopCount;

                                        if (loopCount < 2) {
                                            e.target.play();
                                        } else {
                                            e.target.pause();
                                            e.target.currentTime = 0; // Reset to the clean smoke frame
                                        }
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
                            </div>

                            {/* Final Spread Right Page — Target for Quiz Wiz */}
                            <div className="demoPage comic-page bg-black relative overflow-hidden" data-density="hard">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.15),_transparent_70%)]" />
                            </div>
                        </HTMLFlipBook>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Quiz Wiz (W.I.Z) - Appears on the last page */}
            <RudeCop
                currentPage={currentPage}
                totalPages={RULEBOOK_CONTENT.length}
            />

            {/* Designer Credit Badge - bottom-right on last page */}
            <ZerNessBadge visible={currentPage >= RULEBOOK_CONTENT.length} />

            {/* Navigation Controls - Hidden if Locked */}
            {!isLocked && (
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-black/60 backdrop-blur-md border border-zinc-800 p-2 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                >
                    <button
                        onClick={() => bookRef.current.pageFlip().flip(0)}
                        className="p-3 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-all text-xs font-bold font-sans uppercase tracking-widest px-4 border border-transparent hover:border-zinc-700"
                    >
                        Beginning
                    </button>
                    <button
                        onClick={() => bookRef.current.pageFlip().flipPrev()}
                        className="p-3 hover:bg-zinc-800 rounded-full text-white transition-all border border-zinc-700 hover:scale-105"
                        title="Previous Page"
                    >
                        <span className="text-xl">◀</span>
                    </button>

                    <div className="px-4 border-x border-zinc-800 flex flex-col items-center">
                        <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider font-sans">Section</span>
                        <span className="text-cyan-400 font-sans text-lg font-bold leading-none">{currentPage + 1} / {RULEBOOK_CONTENT.length + 2}</span>
                    </div>

                    <button
                        onClick={() => bookRef.current.pageFlip().flipNext()}
                        className="p-3 hover:bg-zinc-800 rounded-full text-white transition-all border border-zinc-700 hover:scale-105"
                        title="Next Page"
                    >
                        <span className="text-xl">▶</span>
                    </button>
                    <button
                        onClick={() => bookRef.current.pageFlip().flip(RULEBOOK_CONTENT.length)}
                        className="p-3 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-all text-xs font-bold font-sans uppercase tracking-widest px-4 border border-transparent hover:border-zinc-700"
                    >
                        End
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default ComicBook;
