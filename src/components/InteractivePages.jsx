'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * THE SPIRIT'S GAME - Haunted Tic-Tac-Toe
 * Play against a mysterious entity that knows your moves before you make them...
 */
export const SpiritTicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [winner, setWinner] = useState(null);
    const [glitch, setGlitch] = useState(false);
    const [ghostMessage, setGhostMessage] = useState("I've been waiting...");
    const [gameStarted, setGameStarted] = useState(false);

    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    const checkWinner = (currentBoard) => {
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                return currentBoard[a];
            }
        }
        return currentBoard.includes(null) ? null : 'draw';
    };

    const spiritMove = (currentBoard) => {
        const emptySpots = currentBoard.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
        if (emptySpots.length === 0) return;

        // Spirit AI: Smart but occasionally lets you win for creepy effect
        let move;

        // 70% smart move, 30% random (to make it beatable but unpredictable)
        if (Math.random() < 0.7) {
            // Check if spirit can win
            for (let pattern of winPatterns) {
                const [a, b, c] = pattern;
                const values = [currentBoard[a], currentBoard[b], currentBoard[c]];
                if (values.filter(v => v === 'O').length === 2 && values.includes(null)) {
                    move = pattern.find(idx => currentBoard[idx] === null);
                    break;
                }
            }

            // Block player from winning
            if (move === undefined) {
                for (let pattern of winPatterns) {
                    const [a, b, c] = pattern;
                    const values = [currentBoard[a], currentBoard[b], currentBoard[c]];
                    if (values.filter(v => v === 'X').length === 2 && values.includes(null)) {
                        move = pattern.find(idx => currentBoard[idx] === null);
                        break;
                    }
                }
            }

            // Take center if available
            if (move === undefined && currentBoard[4] === null) {
                move = 4;
            }
        }

        // Random move if no strategic move found
        if (move === undefined) {
            move = emptySpots[Math.floor(Math.random() * emptySpots.length)];
        }

        const newBoard = [...currentBoard];
        newBoard[move] = 'O';
        return newBoard;
    };

    const handleCellClick = (index) => {
        if (!gameStarted) {
            setGameStarted(true);
            setGhostMessage("Your move... or is it?");
        }

        if (board[index] || winner || !isPlayerTurn) return;

        const newBoard = [...board];
        newBoard[index] = 'X';
        setBoard(newBoard);

        const playerWinMsgs = [
            "Impossible... you shouldn't have won...",
            "This... cannot be. The rules are mine to bend.",
            "You cheated. Somehow. I'll find out.",
            "Fine. But the city doesn't care if you win games.",
            "Enjoy it. You won't survive the streets as easily.",
            "A fluke. Play again. I won't be so generous.",
            "...I let you win. Don't get comfortable.",
        ];
        const drawMsgs = [
            "Neither wins... we're bound together now.",
            "A stalemate. Like most arguments on this server.",
            "No winner. Classic 3rd World outcome.",
            "You matched me. That's... unsettling.",
            "Draw. Even the void doesn't decide this one.",
        ];

        const gameWinner = checkWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
            if (gameWinner === 'X') {
                setGhostMessage(playerWinMsgs[Math.floor(Math.random() * playerWinMsgs.length)]);
                triggerGlitch();
            } else if (gameWinner === 'draw') {
                setGhostMessage(drawMsgs[Math.floor(Math.random() * drawMsgs.length)]);
            }
            return;
        }

        setIsPlayerTurn(false);

        // Spirit moves after a creepy delay
        setTimeout(() => {
            const spiritBoard = spiritMove(newBoard);
            setBoard(spiritBoard);

            const spiritWinner = checkWinner(spiritBoard);
            if (spiritWinner) {
                setWinner(spiritWinner);
                const spiritWinMsgs = [
                    "I always win. Want to play again?",
                    "Your soul is mine. Temporarily.",
                    "Did you really think you could beat me?",
                    "Pathetic. The city will eat you alive.",
                    "Game over. Just like your last character.",
                    "Skill issue. Try the tutorial first.",
                    "You played well... for a civilian.",
                ];
                const spiritDrawMsgs = [
                    "Neither wins... fascinating.",
                    "A draw? Even I am surprised.",
                    "You held your ground. Respect. Minimal respect.",
                ];
                if (spiritWinner === 'O') {
                    setGhostMessage(spiritWinMsgs[Math.floor(Math.random() * spiritWinMsgs.length)]);
                } else if (spiritWinner === 'draw') {
                    setGhostMessage(spiritDrawMsgs[Math.floor(Math.random() * spiritDrawMsgs.length)]);
                }
            } else {
                const messages = [
                    "I know your next move...",
                    "You can't escape the rules...",
                    "This game nunca ends...",
                    "I've played this 1,000 times...",
                    "Your turn... don't be slow...",
                    "The codes are hidden in the walls...",
                    "I see your cursor moving...",
                    "Step into the light, civilian...",
                    "3rd World is watching you...",
                    "Valor isn't found in a game board...",
                    "Are you enjoying the briefing?",
                    "The Founders built me to win.",
                    "Is your character already dead?",
                    "Forget your previous life. NLR.",
                    "Metagaming won't save you here."
                ];
                setGhostMessage(messages[Math.floor(Math.random() * messages.length)]);
            }
            setIsPlayerTurn(true);
        }, Math.random() * 1000 + 800);
    };

    const triggerGlitch = () => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 2000);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsPlayerTurn(true);
        setWinner(null);
        setGhostMessage("Again? Very well...");
        setGameStarted(false);
        if (Math.random() < 0.3) triggerGlitch(); // Random glitch on reset
    };

    return (
        <div className="w-full h-full relative bg-black overflow-hidden flex items-center justify-center font-sans">
            {/* Creepy Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-purple-950/30" />
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_rgba(139,92,246,0.3),_transparent_70%)]" />

            {/* Glitch Effect */}
            {glitch && (
                <div className="absolute inset-0 bg-red-500/20 animate-shake-glitch z-50 pointer-events-none" />
            )}

            <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-2 p-2 w-full">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-1"
                >
                    <h2 className="text-3xl font-black text-purple-400 tracking-wider uppercase"
                        style={{ textShadow: '0 0 20px rgba(168,85,247,0.8)' }}>
                        The Spirit's Game
                    </h2>
                    <p className="text-xs text-zinc-500 italic tracking-widest">
                        {gameStarted ? "There is no escape..." : "Click to begin..."}
                    </p>
                </motion.div>

                {/* Ghost Message */}
                <div className="h-12 flex items-center justify-center w-full px-4">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={ghostMessage}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-sm md:text-lg text-purple-300 font-bold italic text-center leading-tight"
                            style={{ textShadow: '0 0 10px rgba(216,180,254,0.5)' }}
                        >
                            "{ghostMessage}"
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Game Board - Compact */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-zinc-900/50 rounded-xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                    {board.map((cell, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCellClick(index)}
                            disabled={!isPlayerTurn || cell !== null || winner !== null}
                            className={`w-14 h-14 md:w-16 md:h-16 bg-zinc-800 border ${cell === null ? 'border-purple-500/40 hover:border-purple-300 hover:bg-purple-900/20' : 'border-purple-600'
                                } rounded-md flex items-center justify-center text-3xl md:text-4xl font-black transition-all ${!isPlayerTurn && cell === null ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                                }`}
                        >
                            {cell === 'X' && (
                                <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">X</span>
                            )}
                            {cell === 'O' && (
                                <motion.span
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                                >
                                    O
                                </motion.span>
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Winner Display & Reset - Compact */}
                <div className="h-16 flex items-center justify-center">
                    {winner ? (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <p className="text-sm font-black text-white px-2 uppercase tracking-wide">
                                {winner === 'X' && '🎉 YOU DEFEATED THE SPIRIT?!'}
                                {winner === 'O' && '👻 LOSER. I OWN YOUR SOUL.'}
                                {winner === 'draw' && '🤝 BUSTED. NO ONE WINS.'}
                            </p>
                            <button
                                onClick={resetGame}
                                className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-black rounded shadow-[0_0_15px_rgba(168,85,247,0.4)] uppercase tracking-wider transition-all hover:scale-105"
                            >
                                Play Again
                            </button>
                        </motion.div>
                    ) : !gameStarted && (
                        <p className="text-[10px] text-zinc-600 tracking-wide uppercase font-black">
                            Character <span className="text-cyan-400">X</span> vs Spirit <span className="text-red-500">O</span>
                        </p>
                    )}
                </div>
            </div>

            {/* Spooky Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="particle-dot absolute w-1 h-1 bg-purple-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

/**
 * THE SECRET SAFE - Cracking the Code
 * A 3-digit tumbler lock mini-game that reveals a secret reward
 */
export const SecretSafe = () => {
    const [digits, setDigits] = useState([0, 0, 0]);
    const [unlocked, setUnlocked] = useState(false);
    const [shake, setShake] = useState(false);
    const [showReward, setShowReward] = useState(false);

    const [joke, setJoke] = useState(null);

    // The secret code: 9-1-1 (Emergency)
    const TARGET_CODE = [9, 1, 1];

    const JOKES = [
        "Why did the developer go broke? Because he used up all his cache.",
        "Why do programmers prefer dark mode? Because light attracts bugs.",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
        "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
        "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
        "Honest officer, I wasn't RDMing, I was just testing the physics engine!",
        "Why did the RP character cross the road? To get to the Green Zone.",
        "What do you call a FiveM player with a job? An admin.",
        "'It's not a bug, it's a feature.' - Every dev ever.",
        "Why did the server crash? It saw the code.",
        "Knock knock. Who's there? Async. Async who? ... ... ... function!",
        "I'd tell you a UDP joke, but you might not get it.",
        "A user interface is like a joke. If you have to explain it, it's not that good.",
        "Why do Java developers wear glasses? Because they don't C#.",
        "What is a pirate's favorite programming language? You'd think it's R, but his first love be the C.",
        "Startrek fan? No, I'm a full stack dev.",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        "My wife told me to stop impersonating a flamingo. I had to put my foot down.",
        "I threw a boomerang a few years ago. I now live in constant fear.",
        "Breaking News: A man has been stealing wheels of police cars. Police are working tirelessly to catch him.",
        "What do you call a fake noodle? An Impasta.",
        "Why did the scarecrow win an award? Because he was outstanding in his field.",
        "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.",
        "3rd World RP Rule #1: If you trip over a rock, you must roleplay the injury for 30 minutes.",
        "Admin: 'Why did you shoot him?' Player: 'He failed the vibe check.'",
        "Why don't skeletons fight each other? They don't have the guts.",
        "What do you call cheese that isn't yours? Nacho Cheese.",
        "Why couldn't the bicycle stand up by itself? It was two tired.",
        "Cop: 'Do you know how fast you were going?' Me: 'In this lag? No idea.'",
        "I only know 25 letters of the alphabet. I don't know y.",
        "I don't trust stairs. They're always up to something."
    ];

    const cycleDigit = (index, direction) => {
        const newDigits = [...digits];
        if (direction === 'up') {
            newDigits[index] = newDigits[index] === 9 ? 0 : newDigits[index] + 1;
        } else {
            newDigits[index] = newDigits[index] === 0 ? 9 : newDigits[index] - 1;
        }
        setDigits(newDigits);
        setShake(true); // Tactile feel
        setTimeout(() => setShake(false), 100);
    };

    const checkCode = () => {
        if (digits[0] === TARGET_CODE[0] &&
            digits[1] === TARGET_CODE[1] &&
            digits[2] === TARGET_CODE[2]) {
            handleUnlock();
        } else {
            // Error feedback
            setShake(true);
            setTimeout(() => setShake(false), 300);
        }
    };

    const handleUnlock = () => {
        setUnlocked(true);
        setJoke(JOKES[Math.floor(Math.random() * JOKES.length)]);
        setTimeout(() => setShowReward(true), 800);
    };

    const handleRelock = () => {
        setUnlocked(false);
        setShowReward(false);
        setDigits([0, 0, 0]);
        setJoke(null);
    };

    const handleInteraction = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            onClick={handleInteraction}
            className="w-full h-full relative bg-zinc-900 overflow-hidden flex items-center justify-center"
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-black to-zinc-900 opacity-90"></div>

            {!unlocked ? (
                /* LOCKED STATE - THE SAFE DOOR */
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`relative z-10 bg-zinc-800 p-8 rounded-3xl border-8 border-zinc-700 shadow-2xl max-w-sm w-full input-safe-container ${shake ? 'animate-shake-glitch' : ''}`}
                    style={{ boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8), 0 10px 30px rgba(0,0,0,0.5)' }}
                >
                    {/* Safe Header */}
                    <div className="text-center mb-8 border-b-2 border-zinc-600 pb-4">
                        <h3 className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-sm">Security Override</h3>
                        <div className="flex items-center justify-center gap-2 mt-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]"></div>
                            <span className="text-red-500 font-mono text-xs font-black">LOCKED</span>
                        </div>
                    </div>

                    {/* Tumblers */}
                    <div className="flex justify-center gap-4 mb-8">
                        {digits.map((digit, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <button
                                    onClick={(e) => { e.stopPropagation(); cycleDigit(index, 'up'); }}
                                    className="p-2 text-zinc-500 hover:text-cyan-400 transition-colors"
                                >
                                    ▲
                                </button>
                                <div className="w-16 h-20 bg-black rounded-lg border-2 border-zinc-600 flex items-center justify-center relative overflow-hidden shadow-inner">
                                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-50"></div>
                                    <span className="text-4xl font-mono text-cyan-500 font-black">{digit}</span>
                                </div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); cycleDigit(index, 'down'); }}
                                    className="p-2 text-zinc-500 hover:text-cyan-400 transition-colors"
                                >
                                    ▼
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Unlock Button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); checkCode(); }}
                        className="w-full py-4 bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-lg border-t border-zinc-600"
                    >
                        Engage Lock
                    </button>

                    {/* Hint */}
                    <div className="mt-6 text-center opacity-50 hover:opacity-100 transition-opacity">
                        <p className="text-[10px] text-zinc-400 font-mono tracking-[0.2em] uppercase">
                            HINT: <span className="font-bold text-red-500">WHO DO YOU CALL?</span>
                        </p>
                    </div>
                </motion.div>
            ) : (
                /* UNLOCKED STATE - REWARD */
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 text-center max-w-sm w-full"
                >
                    {showReward ? (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-zinc-100 text-black p-6 rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.2)] rotate-1 relative"
                        >
                            {/* Tape effect */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/50 -rotate-2 backdrop-blur-sm border border-yellow-300"></div>

                            <div className="border-4 border-black p-6 relative overflow-hidden bg-white">
                                <div className="text-4xl mb-4">🤡</div>
                                <h3 className="text-xl font-black uppercase mb-4 text-zinc-800 border-b-4 border-black pb-2">
                                    CLASSIFIED HUMOR
                                </h3>

                                <p className="text-lg font-display tracking-wide mb-6 leading-relaxed">
                                    "{joke}"
                                </p>

                                <div className="text-[10px] font-mono bg-zinc-900 text-white p-2 text-center uppercase tracking-widest">
                                    Official Server Dad Joke
                                </div>
                            </div>

                            <div className="mt-6">
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleRelock(); }}
                                    className="px-6 py-3 bg-red-600 text-white font-black rounded hover:bg-red-500 shadow-lg uppercase tracking-widest text-xs transition-all hover:scale-105"
                                >
                                    Lock Safe & Reset
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="w-64 h-64 bg-black rounded-full border-4 border-green-500 flex items-center justify-center animate-pulseShadow mx-auto">
                            <span className="text-6xl">🔓</span>
                        </div>
                    )}
                </motion.div>
            )}

            {/* Ambient Particles */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-20"></div>
            </div>
        </div>
    );
};
