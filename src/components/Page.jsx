// REVIEWED: ANTIGRAVITY
import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SpiritTicTacToe, SecretSafe } from './InteractivePages';

const Page = forwardRef((props, ref) => {
    const { id, title, content, videoUrl, imageBg, pageNumber, type = 'standard', popups, objectFit, imagePosition, pageLabelPos, showPageNumber, footerImage, footerImageStyle, footerVideo, footerVideoStyle, loop, muted, scale, playOnce, electricEffect, noAudio } = props;

    // Dual Intro Mode Support
    const introMode = typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_INTRO_MODE || 'full' : 'full';
    const skipIntro = introMode === 'skip';

    const [canEnter, setCanEnter] = useState(skipIntro); // Start true if skip mode
    const [hasStarted, setHasStarted] = useState(false);
    const audioRef = useRef(null);
    const briefingStartTime = useRef(Infinity);
    const videoReadyRef = useRef(false);

    // Initial Start Action (User Intent)
    const handleStartBriefing = () => {
        setCanEnter(false);
        briefingStartTime.current = Date.now();
        if (audioRef.current) {
            try {
                audioRef.current.currentTime = 0;
            } catch (e) {
                console.warn("Could not reset audio time", e);
            }
            audioRef.current.play()
                .then(() => {
                    setHasStarted(true);
                })
                .catch(err => {
                    console.error("Audio Play Error:", err);
                    setHasStarted(true);
                    // Fallback: If audio fails, wait 5s then allow entry (so they see the Waiting Screen)
                    setTimeout(() => setCanEnter(true), 5000);
                });
        } else {
            console.warn("No Audio Ref");
            setHasStarted(true);
            setTimeout(() => setCanEnter(true), 5000);
        }
    };

    // Prevent auto-play in useEffect, rely on user click
    useEffect(() => {
        // No-op for cover audio, we wait for user.
    }, [type]);

    // Shared Helper: Background Media
    const BgMedia = ({ isSpread = false, isLeft = false }) => {
        const objectStyle = objectFit === 'contain' ? 'object-contain' : 'object-cover';

        const handleVideoEnd = (e) => {
            if (playOnce) {
                e.target.pause();
                e.target.currentTime = e.target.duration;
            }
        };

        if (videoUrl) {
            return (
                <video
                    key={`video-${pageNumber}-${videoUrl}`}
                    src={videoUrl}
                    className={`absolute inset-0 w-full h-full ${isSpread ? 'max-w-none' : objectStyle}`}
                    style={isSpread ? { width: '200%', left: isLeft ? '0%' : '-100%', objectFit: 'cover' } : {}}
                    autoPlay
                    loop={loop !== undefined ? loop : true}
                    muted={true}
                    playsInline={true}
                    preload="auto"
                    onCanPlay={(e) => e.target.play()}
                    onEnded={handleVideoEnd}
                    data-page-video={noAudio ? undefined : pageNumber}
                />
            );
        }
        if (imageBg) {
            const baseStyle = imagePosition ? { objectPosition: imagePosition } : {};
            const finalStyle = scale ? { ...baseStyle, transform: `scale(${scale})` } : baseStyle;
            return (
                <img
                    src={imageBg}
                    className={`absolute inset-0 w-full h-full ${isSpread ? 'max-w-none' : objectStyle}`}
                    style={isSpread ? { width: '200%', objectPosition: isLeft ? 'left' : 'right', marginLeft: isLeft ? '0' : '-100%' } : finalStyle}
                    alt="Background"
                />
            );
        }
        return null;
    };

    // --- TYPES ---

    // Intro Button Page - Simple button to start, then flips to next page
    if (type === 'intro-button') {
        const { onEnterCity } = props;

        return (
            <div className="comic-page w-full h-full bg-black relative overflow-hidden border-l-4 border-zinc-900 cursor-default" ref={ref} data-density="hard">
{/* Smoke video moved inside inner frame */}

                {/* Button Overlay */}
                <div
                    className="absolute inset-0 z-50 overflow-hidden flex items-center justify-center bg-zinc-900"
                    onMouseDown={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onPointerDown={(e) => e.stopPropagation()}
                >
                    {/* Spinning Frame Effect */}
                    <div className="absolute inset-[-50%] bg-[conic-gradient(transparent_0deg,transparent_270deg,silver_300deg,transparent_360deg)] animate-[spin_4s_linear_infinite] opacity-80" />
                    <div className="absolute inset-[-50%] bg-[conic-gradient(transparent_90deg,transparent_180deg,white_210deg,transparent_270deg)] animate-[spin_4s_linear_infinite] opacity-60 mix-blend-overlay" style={{ animationDirection: 'reverse', animationDuration: '7s' }} />

                    {/* Inner Content */}
                    <div className="absolute inset-[6px] bg-black z-0 shadow-[inset_0_0_40px_rgba(0,0,0,1)] flex flex-col items-center justify-center">
                        {/* Sparkles */}
                        <div className="absolute top-2 left-2 w-1 h-1 bg-white shadow-[0_0_10px_white] animate-pulse rounded-full" />
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-silver shadow-[0_0_10px_silver] animate-bounce rounded-full" />
                        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white shadow-[0_0_8px_white] animate-pulse rounded-full" style={{ animationDelay: '1s' }} />
                        <div className="absolute bottom-2 right-2 w-1 h-1 bg-silver shadow-[0_0_15px_silver] animate-ping rounded-full" style={{ animationDelay: '0.5s', animationDuration: '2s' }} />

                        {/* Smoke video background - scaled to crop Veo watermark */}
                        <video
                            src="/assets/SMOKE2.mp4"
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-[1]"
                            style={{ transform: 'scale(1.15)', transformOrigin: 'top left', opacity: 0.35 }}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                        />

                        {/* Smoke clouds */}
                        <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" style={{ animation: 'smoke-drift-1 12s ease-in-out infinite' }} />
                        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" style={{ animation: 'smoke-drift-2 16s ease-in-out infinite' }} />

                        <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-1000 font-sans w-full h-full animate-sway-x">
                            {/* Logo / Title - Styled to match 3rd World RP graffiti logo */}
                            <div className="mb-10 relative">
                                <div className="absolute -inset-10 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-green-500/20 blur-3xl rounded-full animate-pulse"></div>
                                <div className="relative flex flex-col items-center leading-none">
                                    <span
                                        className="text-6xl md:text-8xl font-black uppercase tracking-tight"
                                        style={{
                                            color: '#e2e8f0',
                                            WebkitTextStroke: '1.5px rgba(16, 185, 129, 0.6)',
                                            textShadow: '0 0 40px rgba(16, 185, 129, 0.4), 0 0 80px rgba(6, 182, 212, 0.2), 0 4px 0 rgba(0,0,0,0.8)',
                                            filter: 'drop-shadow(0 0 12px rgba(16, 185, 129, 0.3))',
                                        }}
                                    >
                                        3RD WORLD
                                    </span>
                                    <span
                                        className="text-3xl md:text-5xl font-black uppercase tracking-[0.25em] mt-1"
                                        style={{
                                            background: 'linear-gradient(135deg, #10b981, #06b6d4, #22c55e)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            textShadow: 'none',
                                            filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.5)) drop-shadow(0 4px 0 rgba(0,0,0,0.6))',
                                        }}
                                    >
                                        ROLEPLAY
                                    </span>
                                </div>
                            </div>

                            {/* Server Rules Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (onEnterCity) onEnterCity();
                                }}
                                className="group relative px-16 py-6 bg-black overflow-hidden border-4 border-slate-300 hover:border-white transition-all duration-300 pointer-events-auto"
                                style={{ animation: 'button-border-glow 3s ease-in-out infinite' }}
                            >
                                <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" style={{ animation: 'button-shimmer-sweep 4s ease-in-out infinite' }} />
                                <div className="absolute inset-0 w-0 bg-gradient-to-r from-slate-700 via-gray-600 to-slate-700 transition-all duration-500 ease-out group-hover:w-full opacity-50"></div>
                                <span className="relative text-white font-black text-2xl tracking-widest uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] pointer-events-none">
                                    SERVER RULES
                                </span>
                            </button>

                            {/* Audio Required Warning */}
                            <div className="mt-8 flex items-center gap-2 text-red-500 text-sm font-bold tracking-wider animate-pulse">
                                <span className="text-xl">⚠</span>
                                <span className="uppercase">AUDIO REQUIRED</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Intro Video Page - Shows video with audio, locks until complete, then shows ENTER
    if (type === 'intro-video') {
        const { onEnterCity } = props;
        const [showEnter, setShowEnter] = useState(false);
        const videoRef = useRef(null);

        useEffect(() => {
            if (videoRef.current) {
                videoRef.current.play().catch(err => {
                    console.warn("Video autoplay failed:", err);
                });
            }

            // Show enter button after 14 seconds (matching voice duration)
            const timer = setTimeout(() => {
                setShowEnter(true);
            }, 14000);

            return () => clearTimeout(timer);
        }, []);

        return (
            <div className="comic-page w-full h-full bg-black relative overflow-hidden border-l-4 border-zinc-900" ref={ref} data-density="hard">
                {/* Full-screen video */}
                <video
                    ref={videoRef}
                    src={videoUrl}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted={muted}
                    loop={loop}
                    playsInline
                />

                {/* Vertical Banner - STOP! AND LISTEN (while voice is playing) */}
                {!showEnter && (
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            backgroundColor: ['#ef4444', '#ffffff', '#ef4444', '#991b1b', '#ef4444'],
                            filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'],
                        }}
                        transition={{
                            x: { duration: 0.5 },
                            backgroundColor: { repeat: Infinity, duration: 1.2, ease: "linear" },
                            filter: { repeat: Infinity, duration: 0.4 }
                        }}
                        className="absolute top-0 left-0 bottom-0 w-20 z-40 flex items-center justify-center border-r-4 border-white shadow-[30px_0_60px_rgba(239,68,68,0.6)]"
                    >
                        <div className="whitespace-nowrap -rotate-90 flex items-center gap-6">
                            <motion.span
                                animate={{ color: ['#ffffff', '#000000', '#ffffff'] }}
                                transition={{ repeat: Infinity, duration: 0.4 }}
                                className="font-black text-lg tracking-[0.3em] uppercase drop-shadow-lg"
                            >
                                STOP! AND LISTEN
                            </motion.span>
                            <span className="text-white text-3xl animate-bounce">⚠</span>
                            <motion.span
                                animate={{ color: ['#ffffff', '#000000', '#ffffff'] }}
                                transition={{ repeat: Infinity, duration: 0.4 }}
                                className="font-black text-lg tracking-[0.3em] uppercase drop-shadow-lg"
                            >
                                STOP TRYING TO TURN THE PAGE
                            </motion.span>
                        </div>
                    </motion.div>
                )}

                {/* ENTER button appears after voice ends (14s) */}
                {showEnter && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-1000">
                        <motion.button
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (onEnterCity) onEnterCity();
                            }}
                            className="group relative px-20 py-8 bg-black border-4 border-cyan-400 hover:border-white transition-all duration-300 pointer-events-auto shadow-[0_0_50px_rgba(34,211,238,0.3)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative text-white font-black text-3xl tracking-widest uppercase drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
                                ENTER CITY
                            </span>
                        </motion.button>
                    </div>
                )}
            </div>
        );
    }

    if (type === 'cover') {
        const isWaiting = hasStarted && !canEnter;

        return (
            <div className={`comic-page w-full h-full bg-black relative overflow-hidden border-l-4 border-zinc-900 cursor-default ${isWaiting ? 'animate-shake-glitch' : ''}`} ref={ref} data-density="hard">

                {/* PERSISTENT BACKGROUND - Never unmounts */}
                <div className="absolute inset-0 z-0">{BgMedia({})}</div>
                <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] opacity-60" />

                {/* 1. PRE-ENTRY OVERLAY - SKIP MODE (Direct Entry) */}
                {!hasStarted && skipIntro && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60">
                        <div className="relative z-20 text-center space-y-8">
                            <h1 className="text-7xl font-black text-cyan-400 mb-8 drop-shadow-[0_0_40px_rgba(34,211,238,0.8)] uppercase tracking-tight">
                                3RD WORLD RP
                            </h1>
                            <p className="text-2xl text-zinc-300 font-bold tracking-wide">
                                SERVER RULEBOOK
                            </p>
                        </div>
                    </div>
                )}

                {/* 1. PRE-ENTRY OVERLAY - FULL MODE (Audio Intro) */}
                {!hasStarted && !skipIntro && (
                    <div
                        className="absolute inset-0 z-50 overflow-hidden flex items-center justify-center bg-zinc-900"
                        onMouseDown={(e) => e.stopPropagation()}
                        onMouseUp={(e) => e.stopPropagation()}
                        onPointerDown={(e) => e.stopPropagation()}
                    >

                        {/* THE MAGIC TRACING FRAME (Spinning Gradient) */}
                        <div className="absolute inset-[-50%] bg-[conic-gradient(transparent_0deg,transparent_270deg,silver_300deg,transparent_360deg)] animate-[spin_4s_linear_infinite] opacity-80" />
                        <div className="absolute inset-[-50%] bg-[conic-gradient(transparent_90deg,transparent_180deg,white_210deg,transparent_270deg)] animate-[spin_4s_linear_infinite] opacity-60 mix-blend-overlay" style={{ animationDirection: 'reverse', animationDuration: '7s' }} />

                        {/* MASK / INNER BLACK BG */}
                        <div className="absolute inset-[6px] bg-black z-0 shadow-[inset_0_0_40px_rgba(0,0,0,1)] flex flex-col items-center justify-center">

                            {/* SPARKLES */}
                            <div className="absolute top-2 left-2 w-1 h-1 bg-white shadow-[0_0_10px_white] animate-pulse rounded-full" />
                            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-silver shadow-[0_0_10px_silver] animate-bounce rounded-full" />
                            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white shadow-[0_0_8px_white] animate-pulse rounded-full" style={{ animationDelay: '1s' }} />
                            <div className="absolute bottom-2 right-2 w-1 h-1 bg-silver shadow-[0_0_15px_silver] animate-ping rounded-full" style={{ animationDelay: '0.5s', animationDuration: '2s' }} />

                            {/* Logo-colored smoke clouds */}
                            <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" style={{ animation: 'smoke-drift-1 12s ease-in-out infinite' }} />
                            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" style={{ animation: 'smoke-drift-2 16s ease-in-out infinite' }} />
                            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-400/6 rounded-full blur-[90px] pointer-events-none" style={{ animation: 'smoke-drift-3 10s ease-in-out infinite' }} />
                            <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-blue-400/8 rounded-full blur-[70px] pointer-events-none" style={{ animation: 'smoke-drift-1 14s ease-in-out infinite reverse' }} />

                            {/* CONTENT */}
                            <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-1000 font-sans w-full h-full animate-sway-x">
                                {/* Logo / Title */}
                                <div className="mb-10 relative">
                                    {/* Multi-colored glow: Cyan/Blue/Green */}
                                    <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-green-500/20 blur-3xl rounded-full animate-pulse"></div>

                                    <h1 className="relative text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-green-500 drop-shadow-[0_0_35px_rgba(34,211,238,0.4)] tracking-tighter uppercase">
                                        3RD WORLD RP
                                    </h1>
                                </div>

                                {/* Start Button — Animated shimmer + glow */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleStartBriefing();
                                    }}
                                    className="group relative px-16 py-6 bg-black overflow-hidden border-4 border-slate-300 hover:border-white transition-all duration-300 pointer-events-auto"
                                    style={{ animation: 'button-border-glow 3s ease-in-out infinite' }}
                                >
                                    {/* Shimmer sweep */}
                                    <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" style={{ animation: 'button-shimmer-sweep 4s ease-in-out infinite' }} />
                                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-slate-700 via-gray-600 to-slate-700 transition-all duration-500 ease-out group-hover:w-full opacity-50"></div>
                                    <span className="relative text-white font-black tracking-[0.1em] text-2xl uppercase z-10 group-hover:text-cyan-200 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        SERVER RULES
                                    </span>
                                </button>

                                <div className="mt-10 flex flex-col items-center gap-2">
                                    <span className="text-red-600 font-black text-xl tracking-widest uppercase animate-pulse drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
                                        ⚠️ AUDIO REQUIRED
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. BRIEFING LOCK — Full overlay prevents page flipping + vertical STOP strip */}
                {hasStarted && !canEnter && (
                    <div
                        className="absolute inset-0 z-40 cursor-not-allowed"
                        onMouseDown={(e) => e.stopPropagation()}
                        onMouseUp={(e) => e.stopPropagation()}
                        onPointerDown={(e) => e.stopPropagation()}
                    >
                        {/* Vertical STOP strip on the left */}
                        <div
                            className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center"
                            style={{ background: 'linear-gradient(to right, rgba(128,0,0,0.95), rgba(128,0,0,0.6), transparent)', animation: 'banner-flash-maroon 1.5s ease-in-out infinite' }}
                        >
                            <div className="flex flex-col items-center gap-1 -rotate-90 whitespace-nowrap origin-center">
                                <span className="text-sm font-black tracking-[0.3em] uppercase font-sans" style={{ color: '#fca5a5', textShadow: '0 0 20px rgba(128,0,0,1)' }}>
                                    STOP — LISTEN TO ME
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. Audio Component - Only in Full Mode */}
                {!skipIntro && (
                    <audio
                        ref={audioRef}
                        src="/sounds/master_mix_1771151581416.wav"
                        preload="auto"
                        onEnded={() => {
                            const start = briefingStartTime.current;
                            if (start === Infinity) return; // Prevent premature unlock
                            const elapsed = Date.now() - briefingStartTime.current;
                            const remaining = 5000 - elapsed;
                            if (remaining > 0) {
                                setTimeout(() => setCanEnter(true), remaining);
                            } else {
                                setCanEnter(true);
                            }
                        }}
                        onError={() => setTimeout(() => setCanEnter(true), 5000)}
                    />
                )}

                {/* The "Enter City" Button */}
                {canEnter && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            if (props.onEnterCity) {
                                props.onEnterCity();
                            }
                        }}
                        onMouseDown={(e) => e.stopPropagation()}
                        onMouseUp={(e) => e.stopPropagation()}
                        onPointerDown={(e) => e.stopPropagation()}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 px-12 py-6 border-4 font-body font-black italic text-3xl transition-all duration-500 tracking-widest
                            bg-black/80 border-cyan-500 text-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.6)] hover:scale-110 hover:bg-cyan-950/80 cursor-pointer animate-in zoom-in duration-300"
                    >
                        ENTER CITY
                    </button>
                )}

                <div className="absolute inset-x-0 bottom-16 md:bottom-24 z-20 flex flex-col items-center justify-center text-center px-4 mix-blend-difference pointer-events-none w-full">
                    <h1 className="font-body font-black italic text-6xl md:text-9xl text-red-600 drop-shadow-[0_0_20px_rgba(255,0,0,0.8)] uppercase tracking-tighter animate-pulse glitch-text w-full leading-none" data-text={title}>
                        {title}
                    </h1>
                </div>
            </div>
        );
    }

    if (type === 'spread-left' || type === 'spread-right') {
        const isLeft = type === 'spread-left';
        // If it's a video, treat it as a single-page full bleed (not a double-page spread) 
        // to prevent it from being pushed off-center
        const useSpreadLogic = !videoUrl;

        return (
            <div className="comic-page w-full h-full relative overflow-hidden flex flex-col bg-black" ref={ref} data-density="hard">
                <div className="absolute inset-0 flex items-center justify-center">
                    {BgMedia({ isSpread: useSpreadLogic, isLeft })}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                {title && (
                    <div className={`relative z-20 mt-auto p-12 ${isLeft ? '' : 'text-right'}`}>
                        <h2 className="font-body font-black italic text-4xl text-cyan-400 drop-shadow-lg">{title}</h2>
                    </div>
                )}
                <div className={`absolute bottom-4 ${isLeft ? 'left-4' : 'right-4'} font-body font-bold text-cyan-900 z-30 opacity-50`}>P-{pageNumber}</div>
            </div>
        );
    }

    if (type === 'interactive') {
        const { interactiveType } = props;
        return (
            <div className="w-full h-full relative overflow-hidden bg-black border-r-2 border-zinc-900 dense-page-border" ref={ref} data-density="soft">
                {/* Silver corner glows matching rule pages */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-gray-400/15 rounded-full blur-3xl dense-page-glow pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-300/10 rounded-full blur-3xl dense-page-glow pointer-events-none" style={{ animationDelay: '2s' }} />

                {interactiveType === 'spirit-tictactoe' && (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 relative">
                        {/* Full Size Silver Frame Background */}
                        <div className="absolute inset-0 border-[16px] border-zinc-900 bg-zinc-950 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]" />
                        <div className="absolute inset-4 border-2 border-zinc-700/50 pointer-events-none" />
                        <div className="absolute inset-4 border border-zinc-500/20 m-1 pointer-events-none" />

                        {/* Corner Accents */}
                        <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-slate-400 rounded-tl-xl z-10" />
                        <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-slate-400 rounded-tr-xl z-10" />
                        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-slate-400 rounded-bl-xl z-10" />
                        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-slate-400 rounded-br-xl z-10" />


                        {/* The Game Container - Simplified Border */}
                        <div className="relative z-20 p-2">
                            <SpiritTicTacToe />
                        </div>
                    </div>
                )}
                {interactiveType === 'forbidden-page' && <SecretSafe />}
            </div>
        );
    }

    if (type === 'comic-panel') {
        return (
            <div className="comic-page w-full h-full relative overflow-hidden bg-black flex flex-col border-r-2 border-zinc-900" ref={ref} data-density="soft">
                <div className="flex-1 relative">
                    {/* High-Energy Comic Background */}
                    <div className="absolute inset-0 bg-zinc-950" />
                    <div className="comic-sunburst animate-slow-rotate opacity-40 scale-150" />
                    <div className="comic-speed-lines opacity-30" />

                    {/* Radial Glow matched to character center */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />

                    <div className={`relative z-10 w-full h-full flex items-center justify-center ${videoUrl && objectFit === 'contain' ? 'p-8' : ''}`}>
                        {videoUrl && objectFit === 'contain' ? (
                            <div className="relative w-[90%] h-[80%] border-4 border-cyan-900/30 shadow-[0_0_50px_rgba(0,0,0,1)] bg-black overflow-hidden flex items-center justify-center">
                                {BgMedia({})}
                                {/* Internal frame shine */}
                                <div className="absolute inset-0 border border-white/10 pointer-events-none" />
                            </div>
                        ) : (
                            BgMedia({})
                        )}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />

                    {/* Electric pulse effects when showPageNumber is true */}
                    {showPageNumber && (
                        <div className="z-20">
                            {/* Main electric bars with glow - left and right */}
                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-90 animate-pulse" style={{ animationDuration: '1.5s', boxShadow: '0 0 20px rgba(34,211,238,0.9), 0 0 40px rgba(34,211,238,0.5)' }} />
                            <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-90 animate-pulse" style={{ animationDuration: '1.5s', animationDelay: '0.75s', boxShadow: '0 0 20px rgba(34,211,238,0.9), 0 0 40px rgba(34,211,238,0.5)' }} />

                            {/* Secondary glow lines */}
                            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-300 to-transparent opacity-70 animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.3s', boxShadow: '0 0 10px rgba(34,211,238,0.6)' }} />
                            <div className="absolute right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-300 to-transparent opacity-70 animate-pulse" style={{ animationDuration: '2s', animationDelay: '1s', boxShadow: '0 0 10px rgba(34,211,238,0.6)' }} />

                            {/* Flickering accent lines */}
                            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-500 to-cyan-500/0 opacity-80 animate-pulse" style={{ animationDuration: '1s', animationDelay: '0.5s' }} />
                            <div className="absolute right-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-500 to-cyan-500/0 opacity-80 animate-pulse" style={{ animationDuration: '1s', animationDelay: '1.2s' }} />
                        </div>
                    )}
                </div>
                {/* Title Support for Comic Panel */}
                {title && (
                    <div className="absolute bottom-28 left-8 z-20">
                        <h2 className="font-body font-black italic text-4xl text-cyan-400 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] uppercase">{title}</h2>
                    </div>
                )}


                {/* ⚡ Border Electric Effects — only in the black padding area around the media */}
                {(objectFit === 'contain' || electricEffect) && (() => {
                    const BorderEffects = () => {
                        const mouseX = useMotionValue(50);
                        const mouseY = useMotionValue(50);

                        // Multi-layered spring physics for a high-end parallax feel
                        const bloomSpring = useSpring(mouseX, { damping: 30, stiffness: 100, mass: 1 });
                        const bloomSpringY = useSpring(mouseY, { damping: 30, stiffness: 100, mass: 1 });

                        const ringSpring = useSpring(mouseX, { damping: 25, stiffness: 150, mass: 0.5 });
                        const ringSpringY = useSpring(mouseY, { damping: 25, stiffness: 150, mass: 0.5 });

                        const dotSpring = useSpring(mouseX, { damping: 15, stiffness: 200, mass: 0.2 });
                        const dotSpringY = useSpring(mouseY, { damping: 15, stiffness: 200, mass: 0.2 });

                        const handleMouseMove = (e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
                            mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
                        };

                        return (
                            <div
                                className="absolute inset-0 pointer-events-auto z-20 overflow-hidden"
                                onMouseMove={handleMouseMove}
                                style={{ cursor: 'default' }}
                            >
                                <style>{`
                                    @keyframes boltFlicker {
                                        0%,100%{opacity:0;transform:scaleX(1);}
                                        15%{opacity:1;transform:scaleX(1.02);}
                                        30%{opacity:0.3;transform:scaleX(0.98);}
                                        55%{opacity:0.9;transform:scaleX(1.01);}
                                        75%{opacity:0.1;}
                                    }
                                    @keyframes sparkRise {
                                        0%{transform:translateY(0) scale(1);opacity:0.9;}
                                        100%{transform:translateY(-100px) scale(0.1);opacity:0;}
                                    }
                                    @keyframes coronaPulse {
                                        0%,100%{opacity:0.12;transform:scale(1);}
                                        50%{opacity:0.5;transform:scale(1.15);}
                                    }
                                    @keyframes borderShimmer {
                                        0%{opacity:0.3;} 50%{opacity:0.7;} 100%{opacity:0.3;}
                                    }
                                    .ep-bolt-h { position:absolute; height:2px; background:linear-gradient(to right,transparent,#38bdf8,#7dd3fc,#38bdf8,transparent); border-radius:2px; animation:boltFlicker var(--dur,1.6s) ease-in-out infinite var(--del,0s); filter:blur(0.8px) drop-shadow(0 0 8px #38bdf8); pointer-events:none; }
                                    .ep-bolt-v { position:absolute; width:2px; background:linear-gradient(to bottom,transparent,#38bdf8,#7dd3fc,#38bdf8,transparent); border-radius:2px; animation:boltFlicker var(--dur,2s) ease-in-out infinite var(--del,0s); filter:blur(0.8px) drop-shadow(0 0 8px #38bdf8); pointer-events:none; }
                                    .ep-spark { position:absolute; border-radius:50%; animation:sparkRise var(--dur,2s) ease-out infinite var(--del,0s); filter:blur(0.8px); pointer-events:none; }
                                    .ep-corona { position:absolute; border-radius:50%; animation:coronaPulse var(--dur,3s) ease-in-out infinite var(--del,0s); pointer-events:none; }
                                    .ep-frame { position:absolute; border-radius:2px; animation:borderShimmer 3s ease-in-out infinite; pointer-events:none; }
                                `}</style>

                                {/* ── TOP BORDER BOLTS ── */}
                                {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                                    <div key={`th${i}`} className="ep-bolt-h" style={{
                                        top: `${2 + (i % 3) * 2}%`,
                                        left: `${4 + i * 11}%`,
                                        width: `${40 + (i % 4) * 20}px`,
                                        '--dur': `${1.2 + (i % 4) * 0.4}s`,
                                        '--del': `${i * 0.18}s`,
                                        opacity: 0,
                                    }} />
                                ))}

                                {/* ── BOTTOM BORDER BOLTS ── */}
                                {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                                    <div key={`bh${i}`} className="ep-bolt-h" style={{
                                        bottom: `${2 + (i % 3) * 2}%`,
                                        left: `${6 + i * 11}%`,
                                        width: `${35 + (i % 3) * 25}px`,
                                        '--dur': `${1.4 + (i % 3) * 0.5}s`,
                                        '--del': `${0.1 + i * 0.2}s`,
                                        opacity: 0,
                                    }} />
                                ))}

                                {/* ── LEFT BORDER BOLTS ── */}
                                {[0, 1, 2, 3, 4].map(i => (
                                    <div key={`lv${i}`} className="ep-bolt-v" style={{
                                        left: `${1 + (i % 2) * 2}%`,
                                        top: `${10 + i * 16}%`,
                                        height: `${30 + (i % 3) * 20}px`,
                                        '--dur': `${1.8 + (i % 3) * 0.3}s`,
                                        '--del': `${i * 0.25}s`,
                                        opacity: 0,
                                    }} />
                                ))}

                                {/* ── RIGHT BORDER BOLTS ── */}
                                {[0, 1, 2, 3, 4].map(i => (
                                    <div key={`rv${i}`} className="ep-bolt-v" style={{
                                        right: `${1 + (i % 2) * 2}%`,
                                        top: `${8 + i * 17}%`,
                                        height: `${25 + (i % 4) * 18}px`,
                                        '--dur': `${1.6 + (i % 3) * 0.4}s`,
                                        '--del': `${0.3 + i * 0.22}s`,
                                        opacity: 0,
                                    }} />
                                ))}

                                {/* ── RISING SPARKS (corners) ── */}
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => {
                                    const isLeft = i < 6;
                                    const color = i % 3 === 0 ? '#facc15' : i % 3 === 1 ? '#7dd3fc' : '#a78bfa';
                                    return (
                                        <div key={`sp${i}`} className="ep-spark" style={{
                                            width: `${3 + (i % 3)}px`,
                                            height: `${3 + (i % 3)}px`,
                                            background: color,
                                            boxShadow: `0 0 6px ${color}`,
                                            left: isLeft ? `${1 + (i % 6) * 1.5}%` : undefined,
                                            right: !isLeft ? `${1 + ((i - 6) % 6) * 1.5}%` : undefined,
                                            bottom: `${2 + (i % 5) * 3}%`,
                                            '--dur': `${1.5 + (i % 4) * 0.5}s`,
                                            '--del': `${i * 0.15}s`,
                                        }} />
                                    );
                                })}

                                {/* ── CORNER CORONA GLOWS ── */}
                                {[
                                    { top: -40, left: -40, size: 160, del: '0s', color: 'rgba(56,189,248,0.25)' },
                                    { top: -35, right: -35, size: 140, del: '0.7s', color: 'rgba(167,139,250,0.2)' },
                                    { bottom: -40, left: -35, size: 150, del: '1.3s', color: 'rgba(56,189,248,0.2)' },
                                    { bottom: -35, right: -40, size: 130, del: '0.4s', color: 'rgba(250,204,21,0.18)' },
                                ].map((c, i) => (
                                    <div key={`cr${i}`} className="ep-corona" style={{
                                        width: c.size, height: c.size,
                                        top: c.top, bottom: c.bottom, left: c.left, right: c.right,
                                        background: `radial-gradient(circle, ${c.color}, transparent 70%)`,
                                        '--dur': `${2.5 + i * 0.4}s`,
                                        '--del': c.del,
                                    }} />
                                ))}

                                {/* ── ELECTRIC FRAME OUTLINE ── */}
                                <div className="ep-frame" style={{
                                    inset: '8% 5%',
                                    border: '1px solid rgba(56,189,248,0.25)',
                                    boxShadow: '0 0 12px rgba(56,189,248,0.15), inset 0 0 12px rgba(56,189,248,0.08)',
                                }} />

                                {/* ── INTERACTIVE CURSOR — border-frame locked, per-page personality ── */}
                                {/* clip-path with evenodd punches a hole over the image (5% lr, 10% tb)
                                    so the cursor effect ONLY renders in the surrounding black border. */}
                                {(() => {
                                    // Assign each page a cursor variant so no two bordering pages look the same
                                    const variant =
                                        pageNumber === 3 || pageNumber === 16 || pageNumber === 27 || pageNumber === 34 ? 'amber' :
                                            pageNumber === 5 || pageNumber === 23 || pageNumber === 37 ? 'shadow' :
                                                'cyan'; // pages 12, 15 and any others

                                    const frameClip = 'polygon(evenodd, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 5% 10%, 5% 90%, 95% 90%, 95% 10%, 5% 10%)';

                                    if (variant === 'amber') return (
                                        // ★ AMBER ORB — warm gold bloom, the fan favourite
                                        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', clipPath: frameClip }}>
                                            {/* Outer soft bloom – slowest */}
                                            <motion.div style={{
                                                position: 'absolute', width: 300, height: 300, borderRadius: '50%',
                                                left: useTransform(bloomSpring, x => `${x}%`),
                                                top: useTransform(bloomSpringY, y => `${y}%`),
                                                x: '-50%', y: '-50%',
                                                background: 'radial-gradient(circle, rgba(251,191,36,0.25) 0%, rgba(245,158,11,0.08) 50%, transparent 80%)',
                                                filter: 'blur(20px)', pointerEvents: 'none',
                                            }} />
                                            {/* Glowing ring – medium */}
                                            <motion.div style={{
                                                position: 'absolute', width: 80, height: 80, borderRadius: '50%',
                                                left: useTransform(ringSpring, x => `${x}%`),
                                                top: useTransform(ringSpringY, y => `${y}%`),
                                                x: '-50%', y: '-50%',
                                                border: '2px solid rgba(251,191,36,0.9)',
                                                boxShadow: '0 0 20px rgba(251,191,36,0.7), 0 0 40px rgba(245,158,11,0.4)',
                                                background: 'transparent', pointerEvents: 'none',
                                            }} />
                                            {/* Bright centre dot – fastest */}
                                            <motion.div style={{
                                                position: 'absolute', width: 10, height: 10, borderRadius: '50%',
                                                left: useTransform(dotSpring, x => `${x}%`),
                                                top: useTransform(dotSpringY, y => `${y}%`),
                                                x: '-50%', y: '-50%',
                                                background: '#fbbf24',
                                                boxShadow: '0 0 15px rgba(251,191,36,1), 0 0 30px rgba(251,191,36,0.6)',
                                                pointerEvents: 'none',
                                            }} />
                                        </div>
                                    );

                                    if (variant === 'shadow') return (
                                        // ★ DARK SHADOW MIST — spectral purple-black void
                                        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', clipPath: frameClip }}>
                                            {/* Deep smoke cloud */}
                                            <motion.div style={{
                                                position: 'absolute', width: 320, height: 320, borderRadius: '50%',
                                                left: useTransform(bloomSpring, x => `${x}%`),
                                                top: useTransform(bloomSpringY, y => `${y}%`),
                                                x: '-50%', y: '-50%',
                                                background: 'radial-gradient(circle, rgba(15,5,40,0.9) 0%, rgba(30,10,60,0.5) 40%, transparent 75%)',
                                                filter: 'blur(28px)', mixBlendMode: 'multiply', pointerEvents: 'none',
                                            }} />
                                            {/* Mid purple mist */}
                                            <motion.div style={{
                                                position: 'absolute', width: 140, height: 140, borderRadius: '50%',
                                                left: useTransform(ringSpring, x => `${x}%`),
                                                top: useTransform(ringSpringY, y => `${y}%`),
                                                x: '-50%', y: '-50%',
                                                background: 'radial-gradient(circle, rgba(100,0,160,0.65) 0%, rgba(20,0,60,0.3) 55%, transparent 80%)',
                                                filter: 'blur(10px)', pointerEvents: 'none',
                                            }} />
                                            {/* Sharp dark void core */}
                                            <motion.div style={{
                                                position: 'absolute', width: 36, height: 36, borderRadius: '50%',
                                                left: useTransform(dotSpring, x => `${x}%`),
                                                top: useTransform(dotSpringY, y => `${y}%`),
                                                x: '-50%', y: '-50%',
                                                background: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(50,0,90,0.8) 60%, transparent 100%)',
                                                boxShadow: '0 0 18px rgba(80,0,120,0.9), 0 0 36px rgba(30,0,60,0.6)',
                                                filter: 'blur(2px)', pointerEvents: 'none',
                                            }} />
                                        </div>
                                    );

                                    // ★ CYAN ELECTRIC ARC — crackles like the border bolts
                                    return (
                                        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', clipPath: frameClip }}>
                                            {/* Wide electric halo */}
                                            <motion.div style={{
                                                position: 'absolute', width: 280, height: 280, borderRadius: '50%',
                                                left: useTransform(bloomSpring, x => `${x}%`),
                                                top: useTransform(bloomSpringY, y => `${y}%`),
                                                x: '-50%', y: '-50%',
                                                background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(14,165,233,0.05) 50%, transparent 80%)',
                                                filter: 'blur(18px)', pointerEvents: 'none',
                                            }} />
                                            {/* Crackling arc ring – dashed border illusion via box-shadow */}
                                            <motion.div style={{
                                                position: 'absolute', width: 90, height: 90, borderRadius: '50%',
                                                left: useTransform(ringSpring, x => `${x}%`),
                                                top: useTransform(ringSpringY, y => `${y}%`),
                                                x: '-50%', y: '-50%',
                                                border: '1.5px solid rgba(34,211,238,0.7)',
                                                boxShadow: '0 0 12px rgba(34,211,238,0.8), 0 0 30px rgba(34,211,238,0.4), inset 0 0 12px rgba(34,211,238,0.15)',
                                                background: 'transparent', pointerEvents: 'none',
                                            }} />
                                            {/* Inner ring offset for double-ring look */}
                                            <motion.div style={{
                                                position: 'absolute', width: 50, height: 50, borderRadius: '50%',
                                                left: useTransform(ringSpring, x => `${x}%`),
                                                top: useTransform(ringSpringY, y => `${y}%`),
                                                x: '-50%', y: '-50%',
                                                border: '1px solid rgba(125,211,252,0.5)',
                                                boxShadow: '0 0 6px rgba(125,211,252,0.6)',
                                                background: 'transparent', pointerEvents: 'none',
                                            }} />
                                            {/* Electric centre node */}
                                            <motion.div style={{
                                                position: 'absolute', width: 8, height: 8, borderRadius: '50%',
                                                left: useTransform(dotSpring, x => `${x}%`),
                                                top: useTransform(dotSpringY, y => `${y}%`),
                                                x: '-50%', y: '-50%',
                                                background: '#e0f2fe',
                                                boxShadow: '0 0 12px rgba(34,211,238,1), 0 0 28px rgba(34,211,238,0.7)',
                                                pointerEvents: 'none',
                                            }} />
                                        </div>
                                    );
                                })()}
                            </div>
                        );
                    };
                    return <BorderEffects key="border-fx" />;
                })()}

                {/* Render Comic Popups if any */}
                {popups && popups.map((popup, idx) => {
                    if (popup.type === 'bomb') return <ComicBomb key={idx} {...popup} />;
                    return <ComicPopup key={idx} {...popup} />;
                })}
            </div>
        );
    }

    if (type === 'rule-text-image') {
        return (
            <div className="comic-page w-full h-full relative overflow-hidden flex flex-col bg-black dense-page-border border-r-2" ref={ref} data-density="hard">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-emerald-950/30 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.12),_transparent_50%)] pointer-events-none" />

                {/* Animated corner glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl dense-page-glow pointer-events-none" />

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(4)].map((_, idx) => (
                        <div
                            key={idx}
                            className="particle-dot absolute rounded-full"
                            style={{
                                width: `${2 + (idx % 3)}px`,
                                height: `${2 + (idx % 3)}px`,
                                background: idx % 2 === 0 ? 'rgba(34,211,238,0.6)' : 'rgba(74,222,128,0.5)',
                                top: `${10 + idx * 8}%`,
                                left: `${10 + idx * 20}%`,
                                animationDelay: `${idx * 0.7}s`,
                            }}
                        />
                    ))}
                </div>

                <div className="absolute inset-0 opacity-[0.07] comic-halftone-dark pointer-events-none" />

                {/* Text section - top portion */}
                <div className="relative z-10 w-full px-6 pt-5 pb-1 flex flex-col shrink-0">
                    {title && (() => {
                        // ── SECTION BANNER COLOUR SYSTEM ──
                        // Each community rule section gets its own distinct colour + feel
                        const isOffServer = id === 'rules-off-server-conduct';
                        const isVibeTheme = props.theme === 'vibe';
                        const isAmberTheme = props.theme === 'amber';
                        const isCyanTheme = props.theme === 'cyan';
                        const isNeonBlueTheme = props.theme === 'neon-blue';
                        // neon = general conduct/accountability/server policies

                        const bannerConfig = isOffServer ? {
                            // 🔷 DEEP BLUE — Off-Server Conduct (unique, serious)
                            bar: 'bg-blue-600',
                            bg: 'bg-blue-950/60',
                            border: 'border-blue-500',
                            text: 'text-blue-300',
                            glow: 'shadow-[0_0_20px_rgba(37,99,235,0.5)]',
                            dot: 'bg-blue-400',
                            sweep: 'from-blue-500/20',
                            label: '🌐 OFF-SERVER POLICY',
                        } : isVibeTheme ? {
                            // 🔴 RED — Community Rules (hate speech, harassment — high severity)
                            bar: 'bg-red-600',
                            bg: 'bg-red-950/50',
                            border: 'border-red-500',
                            text: 'text-red-300',
                            glow: 'shadow-[0_0_20px_rgba(220,38,38,0.5)]',
                            dot: 'bg-red-500',
                            sweep: 'from-red-500/20',
                            label: '⚠️ COMMUNITY RULES',
                        } : isAmberTheme ? {
                            // 🟡 AMBER — Game Mechanics (NVL, VDM, respawn, value life)
                            bar: 'bg-amber-500',
                            bg: 'bg-amber-950/50',
                            border: 'border-amber-500',
                            text: 'text-amber-300',
                            glow: 'shadow-[0_0_20px_rgba(245,158,11,0.5)]',
                            dot: 'bg-amber-400',
                            sweep: 'from-amber-500/20',
                            label: '⚙️ GAME MECHANICS',
                        } : isCyanTheme ? {
                            // 🩵 TEAL — Character & Conduct (RP standards, character rules)
                            bar: 'bg-teal-500',
                            bg: 'bg-teal-950/50',
                            border: 'border-teal-400',
                            text: 'text-teal-300',
                            glow: 'shadow-[0_0_20px_rgba(20,184,166,0.5)]',
                            dot: 'bg-teal-400',
                            sweep: 'from-teal-500/20',
                            label: '🎭 CHARACTER & CONDUCT',
                        } : isNeonBlueTheme ? {
                            // 🟢 GREEN — Roleplay Standards (metagaming, powergaming, RP quality)
                            bar: 'bg-emerald-500',
                            bg: 'bg-emerald-950/50',
                            border: 'border-emerald-400',
                            text: 'text-emerald-300',
                            glow: 'shadow-[0_0_20px_rgba(16,185,129,0.5)]',
                            dot: 'bg-emerald-400',
                            sweep: 'from-emerald-500/20',
                            label: '📋 ROLEPLAY RULES',
                        } : {
                            // 🔵 CYAN — General Conduct, Accountability, Server Policies (neon default)
                            bar: 'bg-cyan-500',
                            bg: 'bg-cyan-950/50',
                            border: 'border-cyan-500',
                            text: 'text-cyan-300',
                            glow: 'shadow-[0_0_20px_rgba(34,211,238,0.4)]',
                            dot: 'bg-cyan-400',
                            sweep: 'from-cyan-500/20',
                            label: '🛡️ SERVER POLICY',
                        };

                        return (
                            <div className={`relative overflow-hidden group mb-3 rounded-r-md ${bannerConfig.glow}`}>
                                {/* Shimmer sweep on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${bannerConfig.sweep} to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] ease-in-out pointer-events-none`} />
                                {/* Left colour bar */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${bannerConfig.bar}`} />
                                {/* Background tint */}
                                <div className={`${bannerConfig.bg} border-l-0 border border-r-0 border-t-0 border-b ${bannerConfig.border} border-opacity-30 pl-5 pr-3 pt-2 pb-2`}>
                                    {/* Section type label */}
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <div className={`w-1.5 h-1.5 rounded-full ${bannerConfig.dot} animate-pulse`} />
                                        <span className={`text-[9px] font-black tracking-[0.25em] uppercase ${bannerConfig.text} opacity-70`}>
                                            {bannerConfig.label}
                                        </span>
                                    </div>
                                    {/* Main title */}
                                    <h2 className={`font-body font-black italic text-[22px] uppercase leading-tight ${bannerConfig.text} dense-title-shimmer`}>
                                        {title}
                                    </h2>
                                </div>
                            </div>
                        );
                    })()}
                    <div className="font-body text-[14px] text-zinc-100 leading-relaxed space-y-3 antialiased">
                        {content && content.split('\n\n').map((para, i) => {
                            const trimmed = para.trim();
                            const isHeader = trimmed === trimmed.toUpperCase() && trimmed.length < 130 && !trimmed.startsWith('\u2022');
                            const isBullet = trimmed.startsWith('\u2022');
                            // In-content headers inherit the section's colour from bannerConfig
                            if (isHeader) {
                                return (
                                    <p key={i}
                                        className={`${bannerConfig.text} text-[15px] font-bold mt-3 mb-1 tracking-wide uppercase border-l-4 ${bannerConfig.border} pl-3 ${bannerConfig.bg} py-0.5 rounded-r`}
                                        style={{ textShadow: `0 0 12px currentColor` }}
                                    >
                                        {trimmed}
                                    </p>
                                );
                            }

                            return (
                                <p key={i} className={`whitespace-pre-line ${isBullet
                                    ? `pl-4 ${bannerConfig.text} opacity-80 italic`
                                    : `${i % 2 === 0 ? 'text-zinc-300/90' : 'text-zinc-200'}`
                                    }`}>
                                    {trimmed}
                                </p>
                            );
                        })}
                    </div>
                </div>

                {/* Full Background Media (Video or Image) */}
                <div className="absolute inset-0 z-0">
                    {videoUrl ? (
                        <video
                            src={videoUrl}
                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                            autoPlay
                            loop={loop !== undefined ? loop : true}
                            muted={true}
                            playsInline={true}
                            preload="auto"
                            onCanPlay={(e) => e.target.play()}
                            data-page-video={noAudio ? undefined : pageNumber}
                            onEnded={(e) => {
                                if (playOnce) {
                                    e.target.pause();
                                    e.target.currentTime = e.target.duration;
                                }
                            }}
                        />
                    ) : imageBg ? (
                        <div className={`relative z-10 flex-1 overflow-hidden flex items-end justify-center ${showPageNumber ? 'bg-black' : ''} h-full`}>
                            <img
                                src={imageBg}
                                className={`w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                                style={{
                                    objectPosition: imagePosition || 'center top',
                                    transform: showPageNumber ? 'scale(0.92)' : 'none'
                                }}
                                alt="Background"
                            />
                        </div>
                    ) : null}

                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent z-10" />
                </div>

                {/* Text Content - Overlay */}
                <div className="relative z-20 w-full h-full p-6 pt-5 flex flex-col pointer-events-none">
                    {/* Pass pointer-events-auto to children if they need interaction */}

                    {showPageNumber && (
                        <div className="absolute bottom-2 right-8 p-4 border-4 border-cyan-500 bg-black transform rotate-2 z-20">
                            <div className="font-body font-black text-2xl text-cyan-400 tracking-wider">
                                PAGE {pageNumber}
                            </div>
                        </div>
                    )}
                </div>

                {/* Render Comic Popups if any */}
                {popups && popups.map((popup, idx) => {
                    if (popup.type === 'bomb') return <ComicBomb key={idx} {...popup} />;
                    return <ComicPopup key={idx} {...popup} />;
                })}

            </div>
        );
    }

    if (type === 'rule-text-dense') {
        return (
            <div className="comic-page w-full h-full relative overflow-hidden flex flex-col bg-black dense-page-border border-r-2" ref={ref} data-density="hard">
                {/* Layered background: deep gradient + silver radial glows */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-zinc-900/40 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(192,192,192,0.08),_transparent_50%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),_transparent_50%)] pointer-events-none" />

                {/* Special accent gradients for colorful pages */}
                {(pageNumber === 17 || pageNumber === 18) && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.1),_transparent_70%)] pointer-events-none" />
                )}
                {pageNumber === 19 && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.1),_transparent_70%)] pointer-events-none" />
                )}

                {/* Glassmorphism overlay panels */}
                <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-l from-white/5 to-transparent backdrop-blur-sm pointer-events-none rounded-l-3xl" style={{ transform: 'translateX(20%)' }} />
                <div className="absolute bottom-1/4 left-0 w-1/3 h-1/4 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm pointer-events-none rounded-r-3xl" style={{ transform: 'translateX(-20%)' }} />

                {/* Smoke effect overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(255,255,255,0.03)_50%,_transparent_100%)] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

                {/* Animated corner glow - silver */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-gray-400/15 rounded-full blur-3xl dense-page-glow pointer-events-none" />
                {/* Animated corner glow - bottom left */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-300/10 rounded-full blur-3xl dense-page-glow pointer-events-none" style={{ animationDelay: '2s' }} />

                {/* Floating particles - MORE AND SILVER */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(18)].map((_, idx) => (
                        <div
                            key={idx}
                            className="particle-dot absolute rounded-full"
                            style={{
                                width: `${2 + (idx % 4)}px`,
                                height: `${2 + (idx % 4)}px`,
                                background: idx % 3 === 0 ? 'rgba(192,192,192,0.7)' : idx % 3 === 1 ? 'rgba(255,255,255,0.5)' : 'rgba(224,224,224,0.6)',
                                top: `${5 + (idx * 5.5)}%`,
                                left: `${3 + (idx * 5)}%`,
                                animationDelay: `${idx * 0.3}s`,
                                boxShadow: '0 0 4px rgba(255,255,255,0.3)',
                            }}
                        />
                    ))}
                </div>

                {/* Halftone texture overlay */}
                <div className="absolute inset-0 opacity-[0.07] comic-halftone-dark pointer-events-none" />

                <div className={`relative z-10 w-full h-full flex flex-col ${id === 'rules-roleplay-first' ? 'p-5 pt-4' :
                    id === 'character-conduct-1' ? 'p-5 pt-4' :
                        id === 'exploiting-mechanics-1' ? 'p-5 pt-4' :
                            id === 'conflict-rules-1' ? 'p-5 pt-3.5' :
                                id === 'exploiting-mechanics-2' ? 'p-6 pt-3' :
                                    id === 'metagaming-powergaming-1' ? 'p-5 pt-4' :
                                        id === 'failrp-government-2' ? 'p-5 pt-4' :
                                            'p-6 pt-5'
                    }`}>
                    {/* Breadcrumb-only banner for continuation pages without title */}
                    {!title && props.section && !props.isFirstPageOfSection && (
                        <div className="mb-3">
                            <div className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${props.sectionColor === 'purple' ? 'bg-purple-400' :
                                    props.sectionColor === 'cyan' ? 'bg-cyan-400' :
                                        props.sectionColor === 'white' ? 'bg-white' :
                                            props.sectionColor === 'red' ? 'bg-red-400' :
                                                'bg-cyan-400'
                                    }`} />
                                <span className={`text-[9px] font-black tracking-[0.3em] uppercase ${props.sectionColor === 'purple' ? 'text-purple-400/70' :
                                    props.sectionColor === 'cyan' ? 'text-cyan-400/70' :
                                        props.sectionColor === 'white' ? 'text-white/70' :
                                            props.sectionColor === 'red' ? 'text-red-400/70' :
                                                'text-cyan-400/70'
                                    }`}>{props.section}</span>
                            </div>
                        </div>
                    )}

                    {title && (() => {
                        // ── SECTION BANNER SYSTEM ──
                        const communityRulesIds = [
                            'community-rules-hate-harassment',  // page 4
                            'rules-conduct-discipline',          // page 6
                            'rules-off-server-conduct',          // page 6.5
                            'rules-toxicity-appeals',            // page 7
                            'rules-policies',                    // page 8
                            'rules-server-policies-1',           // page 9
                            'rules-server-policies-2',           // page 12
                        ];
                        const serverRulesIds = [
                            'rules-roleplay-first',              // server rules start
                            'rules-harassment-1',                // in-game harassment
                            'character-conduct-1',               // character & conduct
                            'character-conduct-2',               // character & conduct continued
                            'exploiting-mechanics-1',            // game mechanics & rules
                            'exploiting-mechanics-2',            // game mechanics continued
                            'exploiting-mechanics-3',            // respawn & value life
                            'metagaming-powergaming-1',          // no metagaming
                            'metagaming-powergaming-2',          // no powergaming
                            'failrp-government-1',               // roleplay standards
                            'failrp-government-2',               // events & government rules
                            'greenzones-gunplay',                // final rules
                        ];
                        const conflictRulesIds = [
                            'conflict-rules-1',                   // conflict rules start
                        ];
                        const amberRulesIds = [
                            'government-jobs-rules',              // government & allow-listed jobs
                        ];
                        const isWhiteBanner = id === 'real-rules-start';
                        const isCyanBanner = communityRulesIds.includes(id);
                        const isPurpleBanner = serverRulesIds.includes(id);
                        const isRedBanner = conflictRulesIds.includes(id);
                        const isAmberBanner = amberRulesIds.includes(id);

                        if (isWhiteBanner) return (
                            // ── PAGE 2: WHITE SECTION BANNER ──
                            <div className="relative overflow-hidden mb-3 rounded-r-sm" style={{ boxShadow: '0 0 18px rgba(255,255,255,0.2)' }}>
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-white" />
                                <div className="bg-white/8 border-b border-white/20 pl-5 pr-3 pt-2 pb-2">
                                    <h2 className="font-body font-black italic text-[22px] leading-tight text-white underline underline-offset-4 decoration-white/40">
                                        {title}
                                    </h2>
                                </div>
                            </div>
                        );

                        if (isCyanBanner) return (
                            // ── COMMUNITY RULES: CYAN SECTION BANNER ──
                            <div className="relative overflow-hidden mb-3 rounded-r-sm" style={{ boxShadow: '0 0 18px rgba(34,211,238,0.25)' }}>
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-400" />
                                <div className="bg-cyan-950/40 border-b border-cyan-500/30 pl-5 pr-3 pt-2 pb-2">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                        <span className="text-[9px] font-black tracking-[0.3em] uppercase text-cyan-400/70">3RD WORLD COMMUNITY RULES</span>
                                    </div>
                                    <h2 className="font-body font-black italic text-[22px] uppercase leading-tight text-cyan-300">
                                        {title}
                                    </h2>
                                </div>
                            </div>
                        );

                        if (isPurpleBanner) return (
                            // ── SERVER RULES: PURPLE SECTION BANNER ──
                            <div className={`relative overflow-hidden rounded-r-sm ${id === 'rules-roleplay-first' ? 'mb-2.5' : 'mb-3'}`} style={{ boxShadow: '0 0 18px rgba(168,85,247,0.3)' }}>
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-purple-400" />
                                <div className={`bg-purple-950/40 border-b border-purple-500/30 pl-5 pr-3 ${id === 'rules-roleplay-first' ? 'pt-2 pb-2' : 'pt-2 pb-2'}`}>
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                                        <span className="text-[9px] font-black tracking-[0.3em] uppercase text-purple-400/70">⚔️ SERVER RULES</span>
                                    </div>
                                    <h2 className={`font-body font-black italic uppercase leading-tight text-purple-300 ${id === 'rules-roleplay-first' ? 'text-[21px]' : 'text-[22px]'}`}>
                                        {title}
                                    </h2>
                                </div>
                            </div>
                        );

                        if (isRedBanner) return (
                            // ── CONFLICT RULES: RED SECTION BANNER ──
                            <div className="relative overflow-hidden mb-2 rounded-r-sm" style={{ boxShadow: '0 0 18px rgba(239,68,68,0.3)' }}>
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-400" />
                                <div className="bg-red-950/40 border-b border-red-500/30 pl-5 pr-3 pt-1.5 pb-1.5">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                                        <span className="text-[9px] font-black tracking-[0.3em] uppercase text-red-400/70">⚔️ CONFLICT RULES</span>
                                    </div>
                                    <h2 className="font-body font-black italic text-[21px] uppercase leading-tight text-red-300">
                                        {title}
                                    </h2>
                                </div>
                            </div>
                        );

                        if (isAmberBanner) return (
                            // ── GOVERNMENT RULES: AMBER/YELLOW SECTION BANNER ──
                            <div className="relative overflow-hidden mb-2 rounded-r-sm" style={{ boxShadow: '0 0 18px rgba(250,204,21,0.3)' }}>
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-400" />
                                <div className="bg-yellow-950/40 border-b border-yellow-500/30 pl-5 pr-3 pt-1.5 pb-1.5">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                                        <span className="text-[9px] font-black tracking-[0.3em] uppercase text-yellow-400/70">GOVERNMENT RULES</span>
                                    </div>
                                    <h2 className="font-body font-black italic text-[21px] uppercase leading-tight text-yellow-300">
                                        {title}
                                    </h2>
                                </div>
                            </div>
                        );

                        // Default: plain italic title
                        return (
                            <h2 className="font-body font-black italic text-[24px] uppercase border-b-2 border-gray-400/60 mb-2 pb-1 dense-title-shimmer">
                                {title}
                            </h2>
                        );
                    })()}
                    <div className={`overflow-hidden ${id === 'rules-off-server-conduct' || id === 'greenzones-gunplay' ? 'flex-shrink-0' : 'flex-1'}`}>
                        <div className={`font-body text-zinc-100 antialiased ${id === 'rules-roleplay-first' ? 'text-[13.5px] leading-[1.55] space-y-2.5' :
                            id === 'character-conduct-1' ? 'text-[13px] leading-[1.5] space-y-2' :
                                id === 'exploiting-mechanics-1' ? 'text-[13px] leading-[1.45] space-y-0.5' :
                                    id === 'exploiting-mechanics-2' ? 'text-[14px] leading-relaxed space-y-2' :
                                        id === 'metagaming-powergaming-1' ? 'text-[11.5px] leading-[1.4] space-y-1.5' :
                                            id === 'failrp-government-2' ? 'text-[11px] leading-[1.4] space-y-1.5' :
                                                id === 'greenzones-gunplay' ? 'text-[14px] leading-[1.5] space-y-1' :
                                                    'text-[14px] leading-relaxed space-y-3'
                            }`}>
                            {content && (() => {
                                const paras = content.split('\n\n');
                                const elements = [];
                                let skipUntil = -1;

                                paras.forEach((para, i) => {
                                    if (i < skipUntil) return;

                                    const trimmed = para.trim();
                                    const isHeader = trimmed === trimmed.toUpperCase() && trimmed.length < 130 && !trimmed.startsWith('\u2022');
                                    const isBullet = trimmed.startsWith('\u2022');
                                    const isMultiBullet = isBullet && (trimmed.match(/\u2022/g) || []).length > 1;
                                    const isIntro = i < 2 && trimmed.length > 100 && !isHeader && !isBullet;

                                    // THEME: VIBE – only applies to page 2 (Community Philosophy)
                                    if (pageNumber === 2) {
                                        // ── Para 0: Split "Welcome to 3rd World RP." as big red headline ──
                                        if (i === 0) {
                                            const full = trimmed;
                                            // Grab everything after the first sentence
                                            const firstDot = full.indexOf('. ');
                                            const headline = firstDot !== -1 ? full.slice(0, firstDot + 1) : full;
                                            const rest = firstDot !== -1 ? full.slice(firstDot + 2) : '';
                                            // Para 1 also merged in
                                            const para1 = paras[1] ? paras[1].trim() : '';
                                            const bodyText = [rest, para1].filter(Boolean).join(' ');
                                            elements.push(
                                                <div key="welcome-block" className="mb-4">
                                                    {/* Big red welcome */}
                                                    <p className="text-red-500 font-black text-3xl uppercase leading-tight mb-3 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)] text-center italic tracking-wider">
                                                        {headline}
                                                    </p>
                                                    {/* Body text */}
                                                    <p className="text-zinc-200 text-[14px] leading-relaxed">
                                                        {bodyText}
                                                    </p>
                                                </div>
                                            );
                                            skipUntil = 2; // skip para 1 (merged)
                                            return;
                                        }

                                        // ── Para 2: Troll warning – scrolling marquee ──
                                        if (i === 2) {
                                            const plain = trimmed.replace(/^⚠️\s*/, '');
                                            const repeatedText = Array(8).fill(`⚠️  ${plain}  `).join('   ');
                                            elements.push(
                                                <div key={i} className="relative w-full overflow-hidden mb-4 py-2 border-y border-orange-500/20 bg-orange-950/10">
                                                    <style>{`
                                                        @keyframes marquee {
                                                            0% { transform: translateX(0); }
                                                            100% { transform: translateX(-50%); }
                                                        }
                                                        .animate-marquee {
                                                            display: inline-block;
                                                            white-space: nowrap;
                                                            animation: marquee 40s linear infinite;
                                                        }
                                                    `}</style>
                                                    <div className="animate-marquee">
                                                        <span className="text-orange-400 font-black text-[13px] uppercase tracking-tight">
                                                            {repeatedText}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                            return;
                                        }

                                        // ── OUR PHILOSOPHY IS SIMPLE: – subtitle + big spaced bullet list ──
                                        if (trimmed === 'OUR PHILOSOPHY IS SIMPLE:') {
                                            const pillars = paras.slice(i + 1, i + 4);
                                            elements.push(
                                                <div key={`philosophy-${i}`} className="flex flex-col flex-1">
                                                    <p className="text-white font-black text-[18px] mb-4 tracking-wide uppercase bg-white/5 py-1 px-3 rounded border-l-4 border-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.4)' }}>
                                                        Our philosophy is simple:
                                                    </p>
                                                    {/* Spaced bullet list to fill remaining page */}
                                                    <ul className="flex flex-col gap-5 flex-1">
                                                        {pillars.map((p, pIdx) => {
                                                            const t = p.trim();
                                                            const [emoji, ...rest] = t.split(' ');
                                                            const line = rest.join(' ');
                                                            const [titlePart, descPart] = line.split(' – ');
                                                            return (
                                                                <li key={pIdx} className="flex items-start gap-3 text-[14px] leading-relaxed py-1 border-l-2 border-white/20 pl-4">
                                                                    <span className="text-xl flex-shrink-0 mt-0.5">{emoji}</span>
                                                                    <span className="text-zinc-100">
                                                                        <strong className="text-white font-black text-[15px]">{titlePart}</strong>
                                                                        <span className="text-zinc-300"> – {descPart}</span>
                                                                    </span>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                            );
                                            skipUntil = i + 4;
                                            return;
                                        }

                                        // Anything else on vibe pages – plain
                                        elements.push(
                                            <p key={i} className="text-zinc-100 text-[14px] leading-relaxed mb-2">
                                                {trimmed}
                                            </p>
                                        );
                                        return;
                                    }

                                    // ACCOUNTABILITY SPECIAL HIGHLIGHT
                                    if (trimmed.startsWith('ACCOUNTABILITY MATTERS:')) {
                                        const [label, ...rest] = trimmed.split(':');
                                        const content = rest.join(':');
                                        elements.push(
                                            <div key={i} className="mb-4 mt-2">
                                                <span className="text-pink-400 font-black text-lg uppercase tracking-wide border-b-2 border-pink-500/50 mr-2">
                                                    {label}
                                                </span>
                                                <span className="text-zinc-200 text-[14px] leading-relaxed">
                                                    {content}
                                                </span>
                                            </div>
                                        );
                                        return;
                                    }

                                    // STAFF Text Styling
                                    if (trimmed.startsWith('Staff –') || trimmed.startsWith('Staff -')) {
                                        const separator = trimmed.includes('–') ? '–' : '-';
                                        const [label, ...rest] = trimmed.split(separator);
                                        const content = rest.join(separator);
                                        elements.push(
                                            <p key={i} className="text-zinc-200 text-[14px] leading-relaxed mb-4">
                                                <span className="font-black text-white mr-1">
                                                    {label} {separator}
                                                </span>
                                                {content}
                                            </p>
                                        );
                                        return;
                                    }

                                    // LEAVE DRAMA Styling
                                    if (trimmed.startsWith('LEAVE DRAMA AT THE DOOR -') || trimmed.startsWith('Leave Drama at the Door -')) {
                                        const separator = '-';
                                        const [label, ...rest] = trimmed.split(separator);
                                        const content = rest.join(separator);
                                        elements.push(
                                            <p key={i} className="text-zinc-200 text-[14px] leading-relaxed mb-4">
                                                <span className="font-black text-red-500 text-lg mr-1 align-middle">
                                                    {label} {separator}
                                                </span>
                                                {content}
                                            </p>
                                        );
                                        return;
                                    }

                                    // Detect harassment + important pattern for two-column layout
                                    if (trimmed === 'HARASSMENT IN-SERVER INCLUDES:') {
                                        const importantIdx = paras.findIndex((p, idx) => idx > i && p.trim() === 'IMPORTANT:');
                                        if (importantIdx > 0) {
                                            elements.push(
                                                <div key={`harassment-grid-${i}`} className="grid grid-cols-2 gap-4 mt-3">
                                                    <div className="space-y-1">
                                                        {paras.slice(i, importantIdx).map((p, idx) => {
                                                            const t = p.trim();
                                                            const isH = t === t.toUpperCase() && t.length < 60 && !t.startsWith('\u2022');
                                                            const isB = t.startsWith('\u2022');
                                                            return (
                                                                <p key={`left-${idx}`} className={`whitespace-pre-line ${isH ? "text-gray-300 text-[14px] border-l-2 border-gray-400/70 pl-2 mb-1 tracking-wider uppercase dense-header-glow" : isB ? "pl-4 text-gray-300/70 italic text-[12px]" : "text-zinc-200"}`}>
                                                                    {t}
                                                                </p>
                                                            );
                                                        })}
                                                    </div>
                                                    <div className="p-3 border-2 border-gray-400/60 bg-gray-800/30 rounded backdrop-blur-sm">
                                                        <p className="text-zinc-200 text-[10px] leading-relaxed">
                                                            {paras[importantIdx + 1]?.trim()}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                            skipUntil = importantIdx + 2;
                                            return;
                                        }
                                    }

                                    // THEME: PURPLE (Server Rules - Section 3) - PRIORITY CHECK
                                    if (props.theme === 'purple') {
                                        // Special handling for "NO CONTACTING STAFF" inline text
                                        if (trimmed.startsWith('NO CONTACTING STAFF ')) {
                                            const rest = trimmed.replace('NO CONTACTING STAFF ', '');
                                            elements.push(
                                                <p key={i} className={`leading-relaxed pl-1 opacity-90 ${id === 'rules-roleplay-first' ? 'text-[13.5px] mb-2' : 'text-[14px] mb-2.5'
                                                    }`}>
                                                    <span className="text-purple-400 font-bold" style={{ textShadow: '0 0 10px rgba(168,85,247,0.6)' }}>
                                                        NO CONTACTING STAFF
                                                    </span>
                                                    <span className="text-zinc-100"> {rest}</span>
                                                </p>
                                            );
                                            return;
                                        }
                                        if (isHeader) {
                                            // THEFT line as green text, not a banner
                                            if (id === 'exploiting-mechanics-1' && trimmed.startsWith('THEFT AND OPERATION')) {
                                                elements.push(
                                                    <p key={i} className="text-emerald-400 font-bold text-[13px] mt-1.5 mb-0.5 leading-[1.45]" style={{ textShadow: '0 0 8px rgba(74,222,128,0.4)' }}>
                                                        {trimmed}
                                                    </p>
                                                );
                                                return;
                                            }
                                            elements.push(
                                                <p key={i} className={`text-purple-400 font-bold tracking-wide uppercase border-l-4 border-purple-500 pl-3 bg-purple-950/20 py-1 rounded-r ${id === 'rules-roleplay-first' ? 'text-[17px] mt-3 mb-2' :
                                                    id === 'character-conduct-1' ? 'text-[16px] mt-2.5 mb-1.5' :
                                                        id === 'exploiting-mechanics-1' ? 'text-[17px] mt-3 mb-2' :
                                                            'text-[18px] mt-4 mb-2'
                                                    }`} style={{ textShadow: '0 0 12px rgba(168,85,247,0.8)' }}>
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }
                                        if (isBullet) {
                                            // Special rendering for exploiting-mechanics-1: white text with green bold
                                            if (id === 'exploiting-mechanics-1') {
                                                const bulletText = trimmed.replace(/^• ?/, '');
                                                const boldParts = [
                                                    'Combat logging',
                                                    'Camping respawn points',
                                                    'Any form of money/item duplication, glitch abuse, or exploiting game mechanics',
                                                    'Speed boosting',
                                                    'Glitch rolling',
                                                    'PROHIBITED',
                                                    'immediate 7-Day Timeout',
                                                    '30 minutes before or after regularly scheduled restarts.'
                                                ];
                                                let remaining = bulletText;
                                                const spans = [];
                                                let spanKey = 0;
                                                while (remaining.length > 0) {
                                                    let earliestIdx = remaining.length;
                                                    let earliestPart = null;
                                                    for (const bp of boldParts) {
                                                        const idx = remaining.indexOf(bp);
                                                        if (idx !== -1 && idx < earliestIdx) {
                                                            earliestIdx = idx;
                                                            earliestPart = bp;
                                                        }
                                                    }
                                                    if (earliestPart) {
                                                        if (earliestIdx > 0) {
                                                            spans.push(<span key={spanKey++} className="text-zinc-100">{remaining.slice(0, earliestIdx)}</span>);
                                                        }
                                                        spans.push(<span key={spanKey++} className="text-emerald-400 font-bold">{earliestPart}</span>);
                                                        remaining = remaining.slice(earliestIdx + earliestPart.length);
                                                    } else {
                                                        spans.push(<span key={spanKey++} className="text-zinc-100">{remaining}</span>);
                                                        remaining = '';
                                                    }
                                                }
                                                elements.push(
                                                    <p key={i} className="block pl-4 leading-[1.45] text-[13px] mb-0.5">
                                                        <span className="text-emerald-400 font-bold" style={{ textShadow: '0 0 8px rgba(74,222,128,0.4)' }}>• </span>
                                                        {spans}
                                                    </p>
                                                );
                                                return;
                                            }
                                            elements.push(
                                                <p key={i} className={`block text-emerald-400 font-normal pl-4 leading-relaxed ${id === 'rules-roleplay-first' ? 'text-[13px] mb-2' :
                                                    id === 'character-conduct-1' ? 'text-[12.5px] mb-1.5' :
                                                            'text-[14px] mb-2'
                                                    }`} style={{ textShadow: '0 0 8px rgba(74,222,128,0.4)' }}>
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }
                                        // Special handling for "Do not exploit situations including:"
                                        const isExploitIntro = trimmed === 'Do not exploit situations including:';
                                        // NVL + Metagaming page: green starts, no gaps between paragraphs
                                        if (id === 'exploiting-mechanics-3' || id === 'metagaming-powergaming-1') {
                                            const greenStarts = [
                                                'Value your life',
                                                'This includes when a gun',
                                                'Metagaming is the act',
                                                'This includes indirectly',
                                                '*NB* This includes',
                                                'The use of any 3rd Party Communication Tools',
                                                'Support streamers by subscribing',
                                                'Do not under any circumstance',
                                                'Powergaming is when you force',
                                                'Do not engage streamers'
                                            ];
                                            let matched = null;
                                            for (const gs of greenStarts) {
                                                if (trimmed.startsWith(gs)) {
                                                    matched = gs;
                                                    break;
                                                }
                                            }
                                            if (matched) {
                                                const rest = trimmed.slice(matched.length);
                                                elements.push(
                                                    <p key={i} className="text-zinc-100 leading-[1.45] pl-1 opacity-90 text-[13.5px] mb-0.5">
                                                        <span className="text-emerald-400 font-bold" style={{ textShadow: '0 0 8px rgba(74,222,128,0.4)' }}>{matched}</span>
                                                        {rest}
                                                    </p>
                                                );
                                            } else {
                                                elements.push(
                                                    <p key={i} className="text-zinc-100 leading-[1.45] pl-1 opacity-90 text-[13.5px] mb-0.5">
                                                        {trimmed}
                                                    </p>
                                                );
                                            }
                                            return;
                                        }
                                        elements.push(
                                            <p key={i} className={`text-zinc-100 leading-relaxed pl-1 opacity-90 ${id === 'rules-roleplay-first' ? 'text-[13.5px] mb-2' :
                                                id === 'character-conduct-1' ? 'text-[13px] mb-1.5' :
                                                    id === 'exploiting-mechanics-1' ? `text-[14px] ${isExploitIntro ? 'mt-0 mb-1' : 'mb-2'}` :
                                                        'text-[14px] mb-2.5'
                                                }`}>
                                                {trimmed}
                                            </p>
                                        );
                                        return;
                                    }

                                    // THEME: AMBER
                                    if (props.theme === 'amber') {
                                        if (isHeader) {
                                            elements.push(
                                                <div key={`header-wrap-${i}`} className={`relative overflow-hidden group ${id === 'exploiting-mechanics-2' ? 'mt-3 mb-1' : 'mt-4 mb-2'}`}>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2000ms] ease-in-out pointer-events-none" />
                                                    <p className="text-yellow-400 font-black tracking-[0.1em] uppercase border-l-4 border-yellow-500 pl-4 bg-yellow-950/40 py-1 rounded-r relative z-10 text-[18px]" style={{ textShadow: '0 0 12px rgba(250,204,21,1)' }}>
                                                        {trimmed}
                                                    </p>
                                                </div>
                                            );
                                            return;
                                        }

                                        // Bullet Point with Highlighted First Word
                                        if (isBullet) {
                                            const cleanText = trimmed.replace(/^•\s*/, '');
                                            const [firstWord, ...rest] = cleanText.split(' ');
                                            const remainder = rest.join(' ');

                                            elements.push(
                                                <p key={i} className="text-zinc-100 text-[14px] leading-snug mb-2 pl-4 relative">
                                                    <span className="absolute left-0 text-yellow-500 font-bold">•</span>
                                                    <span className="text-yellow-400 font-black tracking-wide mr-1">{firstWord}</span>
                                                    <span className="opacity-90">{remainder}</span>
                                                </p>
                                            );
                                            return;
                                        }

                                        elements.push(
                                            <p key={i} className="text-zinc-100 pl-1 text-[14px] leading-snug mb-1.5 tracking-tight font-medium opacity-100 drop-shadow-sm">
                                                {trimmed}
                                            </p>
                                        );
                                        return;
                                    }

                                    // THEME: CONFLICT (Page 17, 18, 21)
                                    if (props.theme === 'conflict' || pageNumber === 17 || pageNumber === 21) {
                                        // Special formatting for "NO EROTIC ROLEPLAY" - Green Highlight with image
                                        if (trimmed === 'NO EROTIC ROLEPLAY') {
                                            elements.push(
                                                <div key={i} className="relative">
                                                    <p className="text-zinc-200 text-[13px] leading-relaxed mb-1 pl-1">
                                                        <span className="text-emerald-400 font-black tracking-wide" style={{ textShadow: '0 0 8px rgba(52,211,153,0.6)' }}>NO EROTIC ROLEPLAY</span>
                                                    </p>
                                                    {/* Image with glassmorphism X overlay */}
                                                    <div className="absolute -top-8 right-4 w-48 h-56">
                                                        <img src="/assets/wrong.png" alt="Wrong" className="w-full h-full object-contain rounded-lg" />
                                                        {/* Big transparent X overlay */}
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            {/* First diagonal bar */}
                                                            <div className="absolute w-[120%] h-3 bg-red-500/25 border border-red-400/30 rounded-full"
                                                                style={{
                                                                    transform: 'rotate(45deg)',
                                                                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.3)'
                                                                }} />
                                                            {/* Second diagonal bar */}
                                                            <div className="absolute w-[120%] h-3 bg-red-500/25 border border-red-400/30 rounded-full"
                                                                style={{
                                                                    transform: 'rotate(-45deg)',
                                                                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.3)'
                                                                }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                            return;
                                        }

                                        // Special formatting for "BAD TASTE RP" - Green Highlight (just the text)
                                        if (trimmed === 'BAD TASTE RP') {
                                            elements.push(
                                                <p key={i} className="text-zinc-200 text-[13px] leading-relaxed mb-1 mt-3 pl-1">
                                                    <span className="text-emerald-400 font-black tracking-wide" style={{ textShadow: '0 0 8px rgba(52,211,153,0.6)' }}>BAD TASTE RP</span>
                                                </p>
                                            );
                                            return;
                                        }

                                        // Special formatting for paragraphs after "BAD TASTE RP" - narrow width for wrapping
                                        if (trimmed.includes('You may not roleplay topics that mirror real-life trauma')) {
                                            elements.push(
                                                <p key={i} className="text-zinc-200 text-[13px] leading-relaxed mb-2 pl-1 max-w-[72%]">
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }

                                        if (trimmed.includes('Cancer, terminal illness')) {
                                            elements.push(
                                                <p key={i} className="text-zinc-200 text-[13px] leading-relaxed mb-2 pl-1 max-w-[72%]">
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }

                                        if (isHeader) {
                                            // Special case: NEW LIFE RULE and memory headers in neon green
                                            if (trimmed.includes('NEW LIFE RULE') || trimmed.includes('YOU MAY REMEMBER') || trimmed.includes('YOU MAY NOT REMEMBER') || trimmed.includes('OCEAN DUMPING') || trimmed.includes('GRAPHIC CONTENT')) {
                                                elements.push(
                                                    <p key={i} className="text-emerald-400 text-[16px] font-black mt-4 mb-2 tracking-wide uppercase border-l-4 border-emerald-500 pl-3 bg-emerald-950/20 py-1 rounded-r shadow-[0_0_15px_rgba(52,211,153,0.4)]" style={{ textShadow: '0 0 12px rgba(52,211,153,0.8), 0 0 20px rgba(52,211,153,0.5)' }}>
                                                        {trimmed}
                                                    </p>
                                                );
                                                return;
                                            }

                                            elements.push(
                                                <p key={i} className="text-red-500 text-[16px] font-black mt-4 mb-2 tracking-wide uppercase border-l-4 border-red-600 pl-3 bg-red-950/20 py-1 rounded-r shadow-[0_0_15px_rgba(239,68,68,0.2)]" style={{ textShadow: '0 0 12px rgba(239,68,68,0.8)' }}>
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }

                                        // Handle bullet points starting with "-" (smaller text, tighter spacing)
                                        if (trimmed.startsWith('- ')) {
                                            elements.push(
                                                <p key={i} className="text-zinc-100 leading-tight pl-1 opacity-90 text-[12px] mb-0.5">
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }

                                        // Special formatting for "DO NOT" sentences - Red Highlight + Spacing
                                        if (trimmed.startsWith('DO NOT')) {
                                            const label = 'DO NOT';
                                            const content = trimmed.substring(6).trim();
                                            elements.push(
                                                <p key={i} className="text-zinc-200 text-[13px] leading-relaxed mb-2 mt-6 pl-1 border-l-2 border-red-500/50">
                                                    <span className="text-red-500 font-black text-lg mr-1.5 shadow-red-500/20 drop-shadow-sm">{label}</span>
                                                    {content}
                                                </p>
                                            );
                                            return;
                                        }

                                        elements.push(
                                            <p key={i} className={`text-zinc-200 text-[13px] leading-relaxed mb-2 ${isBullet ? 'pl-4 italic text-orange-300/70 border-l border-orange-500/20 ml-1' : 'pl-1'}`}>
                                                {trimmed}
                                            </p>
                                        );
                                        return;
                                    }

                                    // THEME: NEON (Page 4, 6, 8)
                                    if (props.theme === 'neon') {
                                        if (isHeader) {
                                            elements.push(
                                                <p key={i} className="text-cyan-400 text-[18px] font-bold mt-4 mb-2 tracking-wide uppercase border-l-4 border-cyan-500 pl-3 bg-cyan-950/20 py-1 rounded-r" style={{ textShadow: '0 0 10px rgba(34,211,238,0.8), 0 0 20px rgba(34,211,238,0.4)' }}>
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }
                                        if (isBullet) {
                                            elements.push(
                                                <p key={i} className="block text-emerald-400 text-[14px] font-normal pl-4 mb-2 leading-relaxed" style={{ textShadow: '0 0 8px rgba(74,222,128,0.4)' }}>
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }
                                        elements.push(
                                            <p key={i} className="text-zinc-200 text-[14px] leading-relaxed mb-2 pl-2 border-l border-zinc-800">
                                                {trimmed}
                                            </p>
                                        );
                                        return;
                                    }

                                    // THEME: CYAN / POST-CONFLICT
                                    if (props.theme === 'cyan') {
                                        if (isHeader) {
                                            elements.push(
                                                <p key={i} className="text-cyan-400 text-[18px] font-black mt-4 mb-2 tracking-wide uppercase border-l-4 border-cyan-500 pl-3 bg-cyan-950/20 py-1 rounded-r" style={{ textShadow: '0 0 12px rgba(34,211,238,0.8)' }}>
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }
                                        elements.push(
                                            <p key={i} className="text-zinc-100 text-[14px] leading-relaxed mb-2.5 pl-1 opacity-90">
                                                {trimmed}
                                            </p>
                                        );
                                        return;
                                    }

                                    // THEME: CONFLICT (Red headers for Conflict Rules section)
                                    if (props.theme === 'conflict') {
                                        // Special formatting for "NO EROTIC ROLEPLAY" - Green Highlight with image
                                        if (trimmed === 'NO EROTIC ROLEPLAY') {
                                            elements.push(
                                                <div key={i} className="relative">
                                                    <p className="text-zinc-200 text-[13px] leading-relaxed mb-1 pl-1">
                                                        <span className="text-emerald-400 font-black tracking-wide" style={{ textShadow: '0 0 8px rgba(52,211,153,0.6)' }}>NO EROTIC ROLEPLAY</span>
                                                    </p>
                                                    {/* Image with glassmorphism X overlay */}
                                                    <div className="absolute -top-8 right-4 w-48 h-56">
                                                        <img src="/assets/wrong.png" alt="Wrong" className="w-full h-full object-contain rounded-lg" />
                                                        {/* Big transparent X overlay */}
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            {/* First diagonal bar */}
                                                            <div className="absolute w-[120%] h-3 bg-red-500/25 border border-red-400/30 rounded-full"
                                                                style={{
                                                                    transform: 'rotate(45deg)',
                                                                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.3)'
                                                                }} />
                                                            {/* Second diagonal bar */}
                                                            <div className="absolute w-[120%] h-3 bg-red-500/25 border border-red-400/30 rounded-full"
                                                                style={{
                                                                    transform: 'rotate(-45deg)',
                                                                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.3)'
                                                                }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                            return;
                                        }

                                        // Special formatting for "BAD TASTE RP" - Green Highlight (just the text)
                                        if (trimmed === 'BAD TASTE RP') {
                                            elements.push(
                                                <p key={i} className="text-zinc-200 text-[13px] leading-relaxed mb-1 mt-3 pl-1">
                                                    <span className="text-emerald-400 font-black tracking-wide" style={{ textShadow: '0 0 8px rgba(52,211,153,0.6)' }}>BAD TASTE RP</span>
                                                </p>
                                            );
                                            return;
                                        }

                                        // Special formatting for paragraphs after "BAD TASTE RP" - narrow width for wrapping
                                        if (trimmed.includes('You may not roleplay topics that mirror real-life trauma')) {
                                            elements.push(
                                                <p key={i} className="text-zinc-200 text-[13px] leading-relaxed mb-2 pl-1 max-w-[72%]">
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }

                                        if (trimmed.includes('Cancer, terminal illness')) {
                                            elements.push(
                                                <p key={i} className="text-zinc-200 text-[13px] leading-relaxed mb-2 pl-1 max-w-[72%]">
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }

                                        if (isHeader) {
                                            // Special case: NEW LIFE RULE and memory headers in neon green
                                            if (trimmed.includes('NEW LIFE RULE') || trimmed.includes('YOU MAY REMEMBER') || trimmed.includes('YOU MAY NOT REMEMBER') || trimmed.includes('OCEAN DUMPING') || trimmed.includes('GRAPHIC CONTENT')) {
                                                elements.push(
                                                    <p key={i} className={`text-emerald-400 font-black tracking-wide uppercase border-l-4 border-emerald-500 pl-3 bg-emerald-950/20 py-1 rounded-r ${id === 'conflict-rules-1' ? 'text-[15px] mt-3 mb-1.5' : 'text-[16px] mt-4 mb-2'
                                                        }`} style={{ textShadow: '0 0 12px rgba(52,211,153,0.8), 0 0 20px rgba(52,211,153,0.5)' }}>
                                                        {trimmed}
                                                    </p>
                                                );
                                                return;
                                            }

                                            elements.push(
                                                <p key={i} className={`text-red-400 font-black tracking-wide uppercase border-l-4 border-red-500 pl-3 bg-red-950/20 py-1 rounded-r ${id === 'conflict-rules-1' ? 'text-[15px] mt-3 mb-1.5' : 'text-[16px] mt-4 mb-2'
                                                    }`} style={{ textShadow: '0 0 12px rgba(239,68,68,0.8)' }}>
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }
                                        if (isBullet) {
                                            elements.push(
                                                <p key={i} className="block text-emerald-400 text-[13px] font-normal pl-4 mb-2 leading-relaxed" style={{ textShadow: '0 0 8px rgba(74,222,128,0.4)' }}>
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }

                                        // Handle bullet points starting with "-" (smaller text)
                                        if (trimmed.startsWith('- ')) {
                                            elements.push(
                                                <p key={i} className="text-zinc-100 leading-tight pl-1 opacity-90 text-[10px] -mt-2 mb-0">
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }

                                        // Handle bold text markers ***text***
                                        if (trimmed.includes('***')) {
                                            const parts = trimmed.split('***');
                                            const rendered = parts.map((part, idx) => {
                                                if (idx % 2 === 1) {
                                                    return <strong key={idx}>{part}</strong>;
                                                }
                                                return <span key={idx}>{part}</span>;
                                            });
                                            elements.push(
                                                <p key={i} className="text-zinc-100 leading-relaxed pl-1 opacity-90 text-[13px] mb-2.5">
                                                    {rendered}
                                                </p>
                                            );
                                            return;
                                        }

                                        elements.push(
                                            <p key={i} className={`text-zinc-100 leading-relaxed pl-1 opacity-90 ${id === 'conflict-rules-1' ? 'text-[12.5px] mb-2' : 'text-[13px] mb-2.5'
                                                }`}>
                                                {trimmed}
                                            </p>
                                        );
                                        return;
                                    }

                                    // THEME: NEON-BLUE
                                    if (props.theme === 'neon-blue') {
                                        if (isHeader) {
                                            elements.push(
                                                <p key={i} className="text-cyan-400 text-[18px] font-bold mt-3 mb-1.5 tracking-wide uppercase border-l-4 border-cyan-500 pl-3 bg-cyan-950/30 py-1 rounded-r" style={{ textShadow: '0 0 12px rgba(34,211,238,0.9)' }}>
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }
                                        if (isBullet) {
                                            elements.push(
                                                <p key={i} className="block text-blue-300 text-[14px] font-normal pl-4 mb-2 leading-snug" style={{ textShadow: '0 0 8px rgba(147,197,253,0.6)' }}>
                                                    {trimmed}
                                                </p>
                                            );
                                            return;
                                        }
                                        elements.push(
                                            <p key={i} className="text-zinc-200 text-[14px] leading-snug mb-2 pl-1 italic opacity-80">
                                                {trimmed}
                                            </p>
                                        );
                                        return;
                                    }

                                    // DEFAULT / COMPACT
                                    elements.push(
                                        <p key={i} className={`whitespace-pre-line ${isHeader
                                            ? "text-gray-300 text-[14px] border-l-2 border-gray-400/70 pl-2 mt-4 mb-2 first:mt-0 tracking-wider uppercase dense-header-glow font-bold"
                                            : isMultiBullet
                                                ? "text-zinc-200 text-[12px]"
                                                : isBullet
                                                    ? "pl-4 text-gray-300/70 italic text-[14px]"
                                                    : isIntro
                                                        ? "text-[16px] font-semibold text-zinc-100 leading-relaxed mb-3 border-b border-zinc-800 pb-2"
                                                        : `${i % 2 === 0 ? 'text-zinc-300/90' : 'text-zinc-200'} text-[14px] leading-relaxed mb-2`
                                            }`}>
                                            {trimmed}
                                        </p>
                                    );
                                });

                                return elements;
                            })()}
                        </div>
                    </div>
                    {/* Render Comic Popups if any */}
                    {
                        popups && popups.map((popup, idx) => (
                            <ComicPopup key={idx} {...popup} />
                        ))
                    }

                    {/* Embedded Video for Dense Pages (e.g. Off-Server Conduct) */}
                    {
                        videoUrl && (
                            <div className={`w-full flex justify-center relative z-20 ${id === 'greenzones-gunplay' || id === 'rules-off-server-conduct' ? 'flex-1 min-h-0' :
                                'mt-2'
                                }`}>
                                <video
                                    src={videoUrl}
                                    autoPlay
                                    loop
                                    muted
                                    data-page-video={noAudio ? undefined : pageNumber}
                                    className={`w-full opacity-90 ${id === 'greenzones-gunplay' || id === 'rules-off-server-conduct' ? 'h-full object-cover object-top' :
                                        'object-contain max-h-[180px] object-bottom'
                                        }`}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }

    if (type === 'rule-text') {
        return (
            <div className="comic-page w-full h-full relative overflow-hidden flex flex-col bg-black border-r border-cyan-900/30" ref={ref} data-density="hard">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-cyan-950/40 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.1),_transparent_60%)] pointer-events-none" />
                <div className="absolute inset-0 opacity-10 comic-halftone-dark pointer-events-none" />

                {/* Footer Video - Behind Text */}
                {footerVideo && (
                    <div className="absolute bottom-0 right-0 z-0 pointer-events-none w-full h-full flex items-end justify-end overflow-hidden">
                        <video
                            src={footerVideo}
                            className="max-w-[120%] h-auto object-contain object-bottom opacity-70 mix-blend-lighten"
                            style={footerVideoStyle}
                            autoPlay
                            loop
                            muted
                            playsInline
                            data-footer-video="true"
                            onEnded={(e) => {
                                if (playOnce) {
                                    e.target.pause();
                                    e.target.currentTime = e.target.duration;
                                }
                            }}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </div>
                )}

                <div className="relative z-10 w-full h-full p-6 flex flex-col">
                    {title && (
                        <h2 className="font-display font-black italic text-4xl mb-6 uppercase border-b-4 border-cyan-500 pb-2 text-cyan-400 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] -rotate-1">
                            {title}
                        </h2>
                    )}
                    <div className="flex-1 overflow-visible z-10">
                        <div className="font-body text-[14px] md:text-[16px] text-zinc-100 leading-loose space-y-8 uppercase tracking-wider antialiased">
                            {content && content.split('\n\n').map((para, i) => {
                                const isHeader = para.includes(':') || (para === para.toUpperCase() && para.length < 130);
                                return (
                                    <p key={i} className={isHeader ? "text-cyan-400 font-black border-l-4 border-cyan-600 pl-4 mt-10 first:mt-0 tracking-widest py-1" : `opacity-95 text-shadow-sm ${i % 2 === 0 ? 'italic text-zinc-300' : 'font-medium text-white'}`}>
                                        {para}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {footerImage && (
                    <div className="absolute bottom-0 right-0 z-20 pointer-events-none">
                        <img src={footerImage} className="w-80 max-h-60 object-contain object-bottom drop-shadow-[0_-10px_20px_rgba(0,0,0,0.8)]" style={footerImageStyle} alt="Footer Character" />
                    </div>
                )}
            </div>
        );
    }

    // Default Fallback
    return (
        <div className="comic-page w-full h-full bg-zinc-900 flex flex-col relative overflow-hidden text-white p-8" ref={ref} data-density="hard">
            <h2 className="text-4xl font-black italic text-cyan-400 mb-4">{title || '3RD WORLD RP'}</h2>
            <p className="text-xl leading-relaxed text-zinc-300 italic">{content}</p>
            <div className="mt-auto text-right text-cyan-800">PAGE {pageNumber}</div>
        </div>
    );
});

// SUB-COMPONENT: Comic-style onomatopoeia popups
const ComicPopup = ({ text, x, y, rotate, color = 'yellow', scale = 1, delay = 0.5 }) => {
    const colors = {
        yellow: 'bg-yellow-400 text-black border-black shadow-[4px_4px_0_rgba(0,0,0,1)]',
        red: 'bg-red-600 text-white border-white shadow-[4px_4px_0_rgba(255,255,255,0.3)]',
        blue: 'bg-blue-500 text-white border-white shadow-[4px_4px_0_rgba(255,255,255,0.3)]',
        green: 'bg-emerald-500 text-white border-black shadow-[4px_4px_0_rgba(0,0,0,1)]',
        pink: 'bg-pink-500 text-white border-white shadow-[0_0_20px_rgba(236,72,153,0.8)]',
    };

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0, rotate: rotate - 20 }}
            animate={{ scale: scale, opacity: 1, rotate: rotate }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 10,
                delay: delay
            }}
            className={`absolute z-[100] px-6 py-2 border-4 font-body font-black italic text-3xl uppercase pointer-events-none select-none ${colors[color] || colors.yellow}`}
            style={{
                left: x,
                top: y,
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`
            }}
        >
            <div className="relative z-10 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
                {text}
            </div>
            {/* Simple spike elements */}
            <div className="absolute inset-x-[-20%] inset-y-[-20%] z-0 overflow-visible pointer-events-none opacity-40">
                <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-inherit border-inherit border-4 transform -rotate-12 translate-y-[-10%]" />
                <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-inherit border-inherit border-4 transform rotate-12 translate-y-[10%]" />
            </div>
        </motion.div>
    );
};

// SUB-COMPONENT: Comic Bomb Animation — 3-phase: tick → explode → TV static
const ComicBomb = ({ x, y, scale = 1, delay = 0 }) => {
    const [phase, setPhase] = React.useState('idle'); // idle | ticking | exploding | static
    const [glitchSeed, setGlitchSeed] = React.useState(0);

    React.useEffect(() => {
        // Start ticking after initial drop-in delay
        const t1 = setTimeout(() => setPhase('ticking'), (delay + 1.2) * 1000);
        return () => clearTimeout(t1);
    }, [delay]);

    React.useEffect(() => {
        if (phase !== 'ticking') return;
        // After 5s of ticking → explode
        const t = setTimeout(() => setPhase('exploding'), 5000);
        return () => clearTimeout(t);
    }, [phase]);

    React.useEffect(() => {
        if (phase !== 'exploding') return;
        // Explosion lasts 1.2s then go static
        const t = setTimeout(() => setPhase('static'), 1200);
        return () => clearTimeout(t);
    }, [phase]);

    React.useEffect(() => {
        if (phase !== 'static') return;
        // Glitch seed randomiser during static phase
        const interval = setInterval(() => setGlitchSeed(Math.random()), 120);
        // Static lasts 4s then reset and tick again
        const t = setTimeout(() => {
            clearInterval(interval);
            setPhase('ticking');
        }, 4000);
        return () => { clearInterval(interval); clearTimeout(t); };
    }, [phase]);

    const tickSpeed = phase === 'ticking' ? '0.5s' : '1s';

    return (
        <>
            <style>{`
                @keyframes bombBob {
                    0%,100% { transform: translate(-50%,-50%) rotate(-3deg); }
                    50% { transform: translate(-50%,-58%) rotate(3deg); }
                }
                @keyframes fuseFlicker {
                    0%,100%{opacity:1;transform:scale(1);}
                    50%{opacity:0.4;transform:scale(1.8);}
                }
                @keyframes shockwave {
                    0% { transform:translate(-50%,-50%) scale(0.1); opacity:0.9; }
                    100% { transform:translate(-50%,-50%) scale(4); opacity:0; }
                }
                @keyframes boom-text {
                    0%{transform:translate(-50%,-50%) scale(0) rotate(-20deg);opacity:1;}
                    60%{transform:translate(-50%,-50%) scale(1.3) rotate(5deg);opacity:1;}
                    100%{transform:translate(-50%,-50%) scale(1.1) rotate(2deg);opacity:0;}
                }
                @keyframes debris {
                    0%{transform:translate(0,0) rotate(0deg);opacity:1;}
                    100%{transform:translate(var(--dx),var(--dy)) rotate(720deg);opacity:0;}
                }
                @keyframes scanlineScroll {
                    0%{background-position:0 0;}
                    100%{background-position:0 100%;}
                }
                @keyframes tvGlitchH {
                    0%,94%,100%{transform:translateX(0) skewX(0);}
                    95%{transform:translateX(-6px) skewX(-2deg);}
                    97%{transform:translateX(4px) skewX(1deg);}
                    99%{transform:translateX(-2px) skewX(-0.5deg);}
                }
                @keyframes colorBleed {
                    0%,100%{filter:none;}
                    10%{filter:hue-rotate(90deg) saturate(3) brightness(1.4) contrast(2);}
                    12%{filter:none;}
                    40%{filter:hue-rotate(180deg) invert(0.1) saturate(0.2);}
                    42%{filter:none;}
                    70%{filter:hue-rotate(-60deg) brightness(0.5) contrast(3);}
                    72%{filter:none;}
                }
                @keyframes staticNoise {
                    0%,100%{opacity:0.55;}
                    50%{opacity:0.7;}
                }
                .bomb-bob { animation: bombBob 0.9s ease-in-out infinite; }
                .fuse-spark { animation: fuseFlicker var(--speed,0.8s) ease-in-out infinite; }
            `}</style>

            {/* ── BOMB (ticking phase) ── */}
            {(phase === 'idle' || phase === 'ticking') && (
                <motion.div
                    initial={{ scale: 0, opacity: 0, y: -50 }}
                    animate={{ scale: scale, opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay }}
                    className="absolute z-[100] flex flex-col items-center justify-center pointer-events-none"
                    style={{ left: x, top: y }}
                >
                    <div className={`relative w-24 h-24 ${phase === 'ticking' ? 'bomb-bob' : ''}`}>
                        {/* Fuse Spark */}
                        <div className="fuse-spark absolute -top-5 right-6 w-4 h-4 bg-orange-500 rounded-full z-30"
                            style={{ '--speed': tickSpeed, boxShadow: '0 0 12px #f97316, 0 0 24px #f97316' }} />
                        <div className="absolute -top-5 right-6 w-2.5 h-2.5 bg-yellow-200 rounded-full z-40" />

                        {/* Fuse Line */}
                        <svg className="absolute -top-4 right-7 w-6 h-8 z-10 overflow-visible">
                            <path d="M5,25 Q10,10 20,0" fill="none" stroke="#78350f" strokeWidth="4" />
                        </svg>

                        {/* Fuse Holder */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-zinc-800 border-2 border-black rounded-sm z-10" />

                        {/* Bomb Body */}
                        <div className="relative w-full h-full bg-zinc-900 rounded-full shadow-[inset_-8px_-8px_15px_rgba(255,255,255,0.05),_4px_4px_0_rgba(0,0,0,1)] border-4 border-black flex items-center justify-center animate-pulse"
                            style={{ animationDuration: tickSpeed }}>
                            <div className="absolute top-5 left-5 w-6 h-4 bg-white/20 rounded-full rotate-45 blur-[2px]" />
                            <span className="text-4xl select-none opacity-40 grayscale font-black text-black">☠</span>
                        </div>

                        {/* Urgency red glow when ticking */}
                        {phase === 'ticking' && (
                            <div className="absolute inset-0 rounded-full animate-ping"
                                style={{ background: 'rgba(239,68,68,0.25)', animationDuration: tickSpeed }} />
                        )}
                    </div>

                    {/* TICK TOCK text */}
                    {phase === 'ticking' && (
                        <motion.div
                            animate={{ opacity: [1, 0.3, 1], scale: [1, 1.05, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="mt-2 font-body font-black text-3xl text-white uppercase"
                            style={{ textShadow: '3px 3px 0 #000, -1px -1px 0 #000', letterSpacing: '0.15em' }}
                        >
                            TICK TOCK
                        </motion.div>
                    )}
                </motion.div>
            )}

            {/* ── EXPLOSION (exploding phase) ── */}
            {phase === 'exploding' && (
                <div className="absolute inset-0 z-[200] pointer-events-none overflow-hidden">
                    {/* White flash */}
                    <motion.div
                        initial={{ opacity: 1 }} animate={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="absolute inset-0 bg-white"
                    />

                    {/* Shockwave rings */}
                    {[0, 1, 2].map(i => (
                        <div key={i} style={{
                            position: 'absolute', left: x, top: y,
                            width: 100, height: 100, borderRadius: '50%',
                            border: `${4 - i}px solid ${i === 0 ? '#facc15' : i === 1 ? '#f97316' : '#ef4444'}`,
                            animation: `shockwave ${0.6 + i * 0.2}s ease-out ${i * 0.1}s forwards`,
                            boxShadow: `0 0 20px ${i === 0 ? '#facc15' : '#f97316'}`,
                        }} />
                    ))}

                    {/* BOOM text */}
                    <div style={{
                        position: 'absolute', left: x, top: y,
                        animation: 'boom-text 1.1s ease-out forwards',
                        fontFamily: 'sans-serif', fontWeight: 900, fontStyle: 'italic',
                        fontSize: '96px', color: '#facc15', lineHeight: 1,
                        textShadow: '6px 6px 0 #000, -2px -2px 0 #000, 0 0 40px rgba(250,204,21,0.8)',
                        whiteSpace: 'nowrap', userSelect: 'none',
                    }}>
                        💥 BOOM!
                    </div>

                    {/* Debris particles */}
                    {[...Array(16)].map((_, i) => {
                        const angle = (i / 16) * 360;
                        const dist = 80 + Math.random() * 120;
                        const dx = Math.cos((angle * Math.PI) / 180) * dist;
                        const dy = Math.sin((angle * Math.PI) / 180) * dist;
                        return (
                            <div key={i} style={{
                                position: 'absolute', left: x, top: y,
                                width: 8 + (i % 3) * 4, height: 8 + (i % 3) * 4,
                                background: i % 3 === 0 ? '#facc15' : i % 3 === 1 ? '#f97316' : '#ef4444',
                                borderRadius: i % 2 === 0 ? '50%' : '2px',
                                '--dx': `${dx}px`, '--dy': `${dy}px`,
                                animation: `debris ${0.8 + (i % 4) * 0.15}s ease-out forwards`,
                                transform: 'translate(-50%,-50%)',
                            }} />
                        );
                    })}
                </div>
            )}

            {/* ── TV STATIC (static phase) ── */}
            {phase === 'static' && (
                <div className="absolute inset-0 z-[150] pointer-events-none overflow-hidden"
                    style={{ animation: 'tvGlitchH 0.3s steps(1) infinite, colorBleed 2s steps(1) infinite' }}>

                    {/* Scanlines */}
                    <div className="absolute inset-0" style={{
                        background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.45) 0px, rgba(0,0,0,0.45) 1px, transparent 1px, transparent 3px)',
                        animation: 'scanlineScroll 4s linear infinite',
                        backgroundSize: '100% 4px',
                    }} />

                    {/* Static noise overlay */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                        backgroundSize: '150px 150px',
                        opacity: 0.18 + glitchSeed * 0.12,
                        mixBlendMode: 'overlay',
                        animation: 'staticNoise 0.12s steps(1) infinite',
                    }} />

                    {/* Random horizontal glitch tears */}
                    {[0, 1, 2, 3].map(i => (
                        <div key={i} style={{
                            position: 'absolute',
                            top: `${15 + i * 20 + glitchSeed * 10}%`,
                            left: 0, right: 0,
                            height: `${2 + glitchSeed * 4}px`,
                            background: glitchSeed > 0.5
                                ? `rgba(${Math.floor(glitchSeed * 255)},255,255,0.6)`
                                : 'rgba(0,0,0,0.8)',
                            transform: `translateX(${(glitchSeed - 0.5) * 30}px)`,
                            mixBlendMode: 'screen',
                        }} />
                    ))}

                    {/* Colour channel shift (RGB separation) */}
                    <div className="absolute inset-0" style={{
                        background: `rgba(255,0,0,${0.03 + glitchSeed * 0.04})`,
                        transform: `translateX(${glitchSeed * 6 - 3}px)`,
                        mixBlendMode: 'screen',
                    }} />
                    <div className="absolute inset-0" style={{
                        background: `rgba(0,255,255,${0.03 + glitchSeed * 0.04})`,
                        transform: `translateX(${-(glitchSeed * 6 - 3)}px)`,
                        mixBlendMode: 'screen',
                    }} />

                    {/* "NO SIGNAL" text flicker */}
                    {glitchSeed > 0.6 && (
                        <div style={{
                            position: 'absolute', top: '50%', left: '50%',
                            transform: 'translate(-50%,-50%)',
                            fontFamily: 'monospace', fontWeight: 900,
                            fontSize: '28px', color: '#fff',
                            letterSpacing: '0.3em', opacity: 0.7,
                            textShadow: '0 0 10px rgba(255,255,255,0.5)',
                        }}>
                            NO SIGNAL
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

Page.displayName = 'Page';
export default Page;
