// REVIEWED: ANTIGRAVITY
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ_QUESTIONS } from '../data/content';

const TOTAL_QUESTIONS = 10;
const PASS_THRESHOLD = 9; // 90% = 9 out of 10

/**
 * W.I.Z (Wisdom Intelligence Zenith)
 * Knowledge Exam — 10 Random Questions, 90% Pass Rate Required.
 * Results sent to Discord via webhook.
 */
const WIZ = ({ onPass, currentPage, totalPages }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState('idle'); // 'idle', 'quiz', 'finished', 'failed'
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [dialogue, setDialogue] = useState("Knowledge is power. Prove yours.");
    const [mood, setMood] = useState('calculating'); // 'calculating', 'impressed', 'strict'
    const [score, setScore] = useState(0);
    const [examQuestions, setExamQuestions] = useState([]);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [wrongCount, setWrongCount] = useState(0);

    const isEnd = currentPage >= totalPages;

    useEffect(() => {
        if (isEnd && !isOpen && mode !== 'finished') {
            setIsOpen(true);
            setMood('calculating');
            setDialogue("Terminal. Knowledge verification required for city access.");
        } else if (!isEnd && isOpen) {
            setIsOpen(false);
        }
    }, [currentPage, isEnd, isOpen, mode]);

    const startQuiz = () => {
        const shuffled = [...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, TOTAL_QUESTIONS);
        setExamQuestions(selected);
        setAnsweredQuestions([]);
        setMode('quiz');
        setCurrentQIndex(0);
        setScore(0);
        setWrongCount(0);
        setMood('calculating');
        setDialogue(`Query 1 of ${TOTAL_QUESTIONS}: ${selected[0].question}`);
    };

    const sendResultToDiscord = async (finalScore, questions) => {
        try {
            await fetch('/api/quiz-result', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    score: finalScore,
                    total: TOTAL_QUESTIONS,
                    questions,
                    timestamp: new Date().toISOString(),
                }),
            });
        } catch (err) {
            console.error('Failed to send quiz result:', err);
        }
    };

    const handleQuizAnswer = (optionIdx) => {
        const q = examQuestions[currentQIndex];
        const isCorrect = optionIdx === q.correct;

        const updatedAnswered = [...answeredQuestions, {
            question: q.question.substring(0, 80),
            correct: isCorrect,
        }];
        setAnsweredQuestions(updatedAnswered);

        if (isCorrect) {
            const newScore = score + 1;
            setScore(newScore);
            setMood('impressed');
            setDialogue(q.correctResponse);

            setTimeout(() => {
                if (currentQIndex < examQuestions.length - 1) {
                    setCurrentQIndex(prev => prev + 1);
                    setDialogue(`Query ${currentQIndex + 2} of ${TOTAL_QUESTIONS}: ${examQuestions[currentQIndex + 1].question}`);
                    setMood('calculating');
                } else {
                    // All questions answered — check pass
                    if (newScore >= PASS_THRESHOLD) {
                        setMood('impressed');
                        setDialogue(`KNOWLEDGE VERIFIED. ${newScore}/${TOTAL_QUESTIONS} correct. Welcome to 3rd World RP.`);
                        setMode('finished');
                    } else {
                        setMood('strict');
                        setDialogue(`${newScore}/${TOTAL_QUESTIONS} correct. Minimum ${PASS_THRESHOLD} required. Study the manual and try again.`);
                        setMode('failed');
                    }
                    sendResultToDiscord(newScore, updatedAnswered);
                }
            }, 5000);
        } else {
            const newWrong = wrongCount + 1;
            setWrongCount(newWrong);
            setMood('strict');
            setDialogue(q.wrongResponse);

            // If already 2 wrong, impossible to pass (need 9/10) — fail immediately
            if (newWrong >= 2) {
                sendResultToDiscord(score, updatedAnswered);
                setTimeout(() => {
                    setDialogue(`${score}/${currentQIndex + 1} so far. Too many errors. Minimum ${PASS_THRESHOLD}/${TOTAL_QUESTIONS} required. Study the manual.`);
                    setMode('failed');
                }, 4000);
                return;
            }

            // Still possible to pass — continue
            setTimeout(() => {
                if (currentQIndex < examQuestions.length - 1) {
                    setCurrentQIndex(prev => prev + 1);
                    setDialogue(`Query ${currentQIndex + 2} of ${TOTAL_QUESTIONS}: ${examQuestions[currentQIndex + 1].question}`);
                    setMood('calculating');
                } else {
                    // Last question wrong — check final score
                    if (score >= PASS_THRESHOLD) {
                        setMood('impressed');
                        setDialogue(`KNOWLEDGE VERIFIED. ${score}/${TOTAL_QUESTIONS} correct. Welcome to 3rd World RP.`);
                        setMode('finished');
                    } else {
                        setMood('strict');
                        setDialogue(`${score}/${TOTAL_QUESTIONS} correct. Minimum ${PASS_THRESHOLD} required. Study the manual.`);
                        setMode('failed');
                    }
                    sendResultToDiscord(score, updatedAnswered);
                }
            }, 5000);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* W.I.Z Avatar */}
            <motion.div
                className="fixed bottom-6 left-[75%] -translate-x-1/2 z-50 cursor-pointer group"
                onClick={() => setIsOpen(!isOpen)}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                whileHover={{ scale: 1.1 }}
            >
                <div className={`w-28 h-28 md:w-36 md:h-36 rounded-full border-4 ${mood === 'strict' ? 'border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.8)]' : 'border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.8)]'} bg-black/90 overflow-hidden relative flex items-center justify-center transition-all duration-300 group`}>
                    <div className={`absolute inset-0 opacity-40 ${mood === 'impressed' ? 'animate-pulse bg-blue-500' : 'bg-blue-900'}`} />

                    {/* W.I.Z Face Asset */}
                    <motion.div
                        className="relative z-10 w-full h-full flex items-center justify-center p-2"
                        animate={{
                            scale: mood === 'calculating' ? [1, 1.05, 1] : 1,
                            filter: mood === 'strict' ? 'hue-rotate(-45deg) brightness(1.2)' : 'none'
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <img
                            src="/assets/wiz.png"
                            className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                            alt="W.I.Z Interface"
                        />
                    </motion.div>

                    {/* Scanning ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-ping" style={{ animationDuration: '3s' }} />
                </div>
            </motion.div>

            {/* Dialogue Box */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-44 left-[75%] -translate-x-1/2 max-w-md w-full bg-zinc-950/95 backdrop-blur-xl border-2 border-blue-500/50 p-8 rounded-2xl shadow-[0_0_100px_rgba(59,130,246,0.3)] z-50 text-cyan-50 font-sans overflow-hidden"
                    >
                        {/* Animated depth background */}
                        <div className="absolute -top-16 -left-16 w-64 h-64 bg-cyan-500/8 rounded-full blur-[60px] pointer-events-none" style={{ animation: 'smoke-drift-1 12s ease-in-out infinite' }} />
                        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-blue-500/6 rounded-full blur-[70px] pointer-events-none" style={{ animation: 'smoke-drift-2 16s ease-in-out infinite' }} />
                        <div className="absolute top-1/3 right-0 w-48 h-48 bg-cyan-400/5 rounded-full blur-[50px] pointer-events-none" style={{ animation: 'smoke-drift-3 10s ease-in-out infinite' }} />

                        {/* Header */}
                        <div className="flex items-center justify-between mb-6 border-b border-blue-500/30 pb-2">
                            <span className="text-sm font-black text-blue-400 tracking-[0.3em] uppercase glow-text">QUIZ WIZ (W.I.Z) KNOWLEDGE EXAM</span>
                            <div className="flex gap-1.5 flex-wrap max-w-[180px] justify-end">
                                {[...Array(TOTAL_QUESTIONS)].map((_, i) => (
                                    <span key={i} className={`w-2 h-2 m-0.5 rounded-full ${i < answeredQuestions.length
                                        ? answeredQuestions[i]?.correct
                                            ? 'bg-green-500 shadow-[0_0_10px_#22c55e]'
                                            : 'bg-red-500 shadow-[0_0_10px_#ef4444]'
                                        : 'bg-zinc-800'
                                        }`} />
                                ))}
                            </div>
                        </div>

                        {/* IDLE MODE */}
                        {mode === 'idle' && (
                            <>
                                <p className="text-xl md:text-2xl mb-4 font-black leading-tight text-white drop-shadow-md">{dialogue}</p>

                                {/* Knowledge Verification Briefing */}
                                <div className="bg-zinc-900/80 border border-cyan-500/20 rounded-lg px-5 py-4 mb-6 backdrop-blur-sm">
                                    <h4 className="text-cyan-400 font-black text-[10px] tracking-[0.3em] uppercase mb-2 text-center" style={{ textShadow: '0 0 10px rgba(6,182,212,0.6)' }}>
                                        KNOWLEDGE VERIFICATION — MANDATORY
                                    </h4>
                                    <div className="space-y-1.5 text-zinc-400 text-[11px] leading-relaxed">
                                        <p className="flex items-start gap-2">
                                            <span className="text-cyan-500 mt-0.5">▸</span>
                                            <span>The 3rd World RP Exam requires a minimum <span className="text-white font-bold">90% pass rate</span> to verify your knowledge of server standards.</span>
                                        </p>
                                        <p className="flex items-start gap-2">
                                            <span className="text-cyan-500 mt-0.5">▸</span>
                                            <span>Upon successful verification, your results will be logged, and you may proceed with your <span className="text-white font-bold">Discord Whitelist Application</span>.</span>
                                        </p>
                                        <p className="flex items-start gap-2">
                                            <span className="text-cyan-500 mt-0.5">▸</span>
                                            <span>Completing this verification is a prerequisite for the <span className="text-white font-bold">Internal Interview Process</span>.</span>
                                        </p>
                                        <p className="flex items-start gap-2">
                                            <span className="text-cyan-500 mt-0.5">▸</span>
                                            <span>Professionalism and accuracy are expected during this terminal session.</span>
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={startQuiz}
                                    className="w-full py-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-black border-2 border-blue-500 hover:from-blue-500 hover:to-blue-700 transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] rounded-xl uppercase tracking-[0.2em] text-lg animate-pulse"
                                >
                                    START EXAM
                                </button>
                            </>
                        )}

                        {/* QUIZ MODE */}
                        {mode === 'quiz' && (
                            <>
                                <p className="text-xl md:text-2xl mb-8 font-black leading-tight text-white drop-shadow-md">{dialogue}</p>
                                <div className="space-y-4">
                                    {examQuestions[currentQIndex]?.options.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleQuizAnswer(idx)}
                                            className="w-full text-left p-5 bg-zinc-900/90 border border-zinc-700 hover:border-cyan-400 hover:bg-cyan-950/80 text-zinc-300 hover:text-white text-base font-bold transition-all rounded-xl group relative overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span className="relative z-10 flex items-center">
                                                <span className="text-cyan-500 mr-3 text-lg opacity-50 group-hover:opacity-100">&#10148;</span>
                                                {opt}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* FINISHED MODE — PASSED */}
                        {mode === 'finished' && (
                            <div className="text-center relative">
                                <p className="text-xl md:text-2xl mb-8 font-black leading-tight text-white drop-shadow-md">{dialogue}</p>

                                {/* Verification Badge */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -20 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", bounce: 0.5 }}
                                    className="mb-8 p-6 bg-zinc-900 border-4 border-green-600/50 rounded-lg relative overflow-hidden shadow-2xl"
                                >
                                    <div className="text-green-400 font-mono font-bold text-xs tracking-widest uppercase mb-2 border-b border-green-600/30 pb-1">3RD WORLD RP — KNOWLEDGE VERIFIED</div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-zinc-800 rounded border border-green-600/30 flex items-center justify-center">
                                            <span className="text-green-400 font-black text-xl" style={{ fontFamily: 'monospace' }}>W.I.Z</span>
                                        </div>
                                        <div className="text-left flex-1">
                                            <div className="text-[10px] text-zinc-500 tracking-wider">EXAM RESULT</div>
                                            <div className="text-white font-black text-lg tracking-wide">{score}/{TOTAL_QUESTIONS} PASSED</div>
                                            <div className="text-[10px] text-zinc-500 mt-1 tracking-wider">STATUS</div>
                                            <div className="text-green-400 font-bold text-xs">KNOWLEDGE VERIFIED</div>
                                        </div>
                                    </div>

                                    {/* VERIFIED STAMP */}
                                    <motion.div
                                        initial={{ scale: 3, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.8, type: "spring", bounce: 0.6 }}
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] border-4 border-green-500 text-green-500 px-4 py-2 font-black text-2xl uppercase tracking-widest opacity-90 mix-blend-screen backdrop-blur-[1px]"
                                        style={{ textShadow: "0 0 15px #22c55e", boxShadow: "0 0 20px rgba(34, 197, 94, 0.4), inset 0 0 20px rgba(34, 197, 94, 0.2)" }}
                                    >
                                        VERIFIED
                                    </motion.div>
                                </motion.div>

                                <p className="text-sm text-green-300/70 mb-4 italic">Results sent to Discord. You may now proceed to your whitelist application.</p>

                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        onPass && onPass();
                                    }}
                                    className="w-full py-4 bg-green-600 text-white font-black hover:bg-green-500 transition-all rounded-lg shadow-[0_0_20px_rgba(22,163,74,0.3)] uppercase tracking-wider text-sm animate-pulse"
                                >
                                    CLOSE
                                </button>
                            </div>
                        )}

                        {/* FAILED MODE */}
                        {mode === 'failed' && (
                            <div className="text-center relative">
                                <p className="text-xl md:text-2xl mb-8 font-black leading-tight text-white drop-shadow-md">{dialogue}</p>

                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="mb-8 p-6 bg-zinc-900 border-4 border-red-600/50 rounded-lg shadow-2xl"
                                >
                                    <div className="text-red-400 font-mono font-bold text-xs tracking-widest uppercase mb-2">EXAM FAILED</div>
                                    <div className="text-white font-black text-2xl">{score}/{TOTAL_QUESTIONS}</div>
                                    <div className="text-red-400/70 text-sm mt-2">Minimum {PASS_THRESHOLD}/{TOTAL_QUESTIONS} required</div>
                                </motion.div>

                                <button
                                    onClick={() => {
                                        setMode('idle');
                                        setDialogue("Terminal. Knowledge verification required for city access.");
                                        setMood('calculating');
                                    }}
                                    className="w-full py-4 bg-blue-600 text-white font-black hover:bg-blue-500 transition-all rounded-lg uppercase tracking-wider text-sm"
                                >
                                    TRY AGAIN
                                </button>
                            </div>
                        )}

                        {/* Connecting Line */}
                        <div className="absolute -bottom-12 right-16 w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent opacity-50" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default WIZ;
