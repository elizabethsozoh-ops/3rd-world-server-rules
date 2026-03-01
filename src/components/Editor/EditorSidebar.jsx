
'use client';

import React from 'react';
import { useBook } from '../../context/BookContext';
import { motion } from 'framer-motion';

const EditorSidebar = () => {
    const {
        pages, addPage, deletePage, currentPageIndex, setCurrentPageIndex,
        bookSettings, updateSettings, updatePage
    } = useBook();

    const pageCount = pages.length;

    return (
        <div className="w-80 bg-zinc-800 border-r border-zinc-700 p-4 h-full flex flex-col gap-6 text-white overflow-y-auto z-50">
            {/* Header */}
            <div>
                <h2 className="text-xl font-display text-yellow-500 mb-1">3rd World RP Studio</h2>
                <p className="text-xs text-zinc-400">Interactive Book Builder</p>
                <div className="mt-4 flex gap-2">
                    <button className="flex-1 py-2 bg-blue-600 rounded text-xs font-bold hover:bg-blue-500 transition-colors uppercase">
                        Save
                    </button>
                    <button className="flex-1 py-2 bg-zinc-700 rounded text-xs font-bold hover:bg-zinc-600 transition-colors uppercase border border-zinc-600">
                        Export
                    </button>
                </div>
            </div>

            {/* Global Settings */}
            <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-700">
                <h3 className="text-sm font-bold text-zinc-300 mb-3 uppercase tracking-wider">Book Settings</h3>

                <div className="space-y-3">
                    <div>
                        <label className="text-xs text-zinc-500 block mb-1">Theme</label>
                        <div className="flex bg-zinc-800 rounded p-1 border border-zinc-700 text-xs">
                            {['Modern', 'Comic', 'Dark'].map(t => (
                                <button
                                    key={t}
                                    onClick={() => updateSettings('theme', t.toLowerCase())}
                                    className={`flex-1 py-1 rounded transition-colors ${bookSettings.theme === t.toLowerCase() ? 'bg-zinc-600 text-white' : 'text-zinc-400 hover:text-white'}`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="text-xs text-zinc-500 block mb-1">Title</label>
                        <input
                            type="text"
                            value={bookSettings.title}
                            onChange={(e) => updateSettings('title', e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 text-sm focus:outline-none focus:border-yellow-500"
                        />
                    </div>
                </div>
            </div>

            {/* Pages Manager */}
            <div className="flex-1 overflow-auto">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold text-zinc-300 uppercase tracking-wider">Pages ({pageCount})</h3>
                    <button
                        onClick={addPage}
                        className="p-1 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition-colors"
                        title="Add Page"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                </div>

                <div className="space-y-2">
                    {pages.map((page, idx) => (
                        <div
                            key={page.id}
                            className={`p-3 rounded border transition-all cursor-pointer ${idx === currentPageIndex
                                ? 'bg-zinc-700 border-yellow-500 shadow-md'
                                : 'bg-zinc-800 border-zinc-700 hover:border-zinc-500'
                                }`}
                            onClick={() => setCurrentPageIndex(idx)}
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-mono text-zinc-500">Page {idx + 1}</span>
                                <button
                                    onClick={(e) => { e.stopPropagation(); deletePage(idx); }}
                                    className="text-zinc-500 hover:text-red-400"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                </button>
                            </div>
                            <div className="mt-1 font-bold truncate text-sm">{page.title}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Current Page Editor */}
            {pages[currentPageIndex] && (
                <div className="bg-zinc-900/80 border-t border-zinc-700 pt-4 mt-auto">
                    <h4 className="text-xs font-bold text-zinc-400 uppercase mb-2">Selected Page Properties</h4>
                    <div className="space-y-3">
                        <input
                            type="text"
                            placeholder="Page Title"
                            value={pages[currentPageIndex].title || ''}
                            onChange={(e) => updatePage(currentPageIndex, { title: e.target.value })}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 text-xs text-white"
                        />
                        <textarea
                            placeholder="Page Content"
                            value={pages[currentPageIndex].content || ''}
                            onChange={(e) => updatePage(currentPageIndex, { content: e.target.value })}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 text-xs h-20 resize-none text-white"
                        />

                        {/* Layout Type */}
                        <div>
                            <label className="text-[10px] uppercase text-zinc-500 font-bold mb-1 block">Page Layout</label>
                            <select
                                value={pages[currentPageIndex].type || 'standard'}
                                onChange={(e) => updatePage(currentPageIndex, { type: e.target.value })}
                                className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 text-xs text-white"
                            >
                                <option value="standard">Standard Text</option>
                                <option value="cover">Cover Page</option>
                                <option value="rule-left">Title Focus (Left)</option>
                                <option value="rule-right">Text Focus (Right)</option>
                            </select>
                        </div>

                        {/* Background Media Selection */}
                        <div>
                            <label className="text-[10px] uppercase text-zinc-500 font-bold mb-1 block">Background Media</label>
                            <div className="flex gap-2 mb-2">
                                <button
                                    onClick={() => updatePage(currentPageIndex, { mediaType: 'image' })}
                                    className={`flex-1 py-1 text-xs rounded border ${pages[currentPageIndex].mediaType !== 'video' ? 'bg-zinc-600 border-zinc-500 text-white' : 'bg-transparent border-zinc-700 text-zinc-400'}`}
                                >
                                    Image
                                </button>
                                <button
                                    onClick={() => updatePage(currentPageIndex, { mediaType: 'video' })}
                                    className={`flex-1 py-1 text-xs rounded border ${pages[currentPageIndex].mediaType === 'video' ? 'bg-zinc-600 border-zinc-500 text-white' : 'bg-transparent border-zinc-700 text-zinc-400'}`}
                                >
                                    Video
                                </button>
                            </div>

                            {pages[currentPageIndex].mediaType === 'video' ? (
                                <input
                                    type="text"
                                    placeholder="Paste Video URL (mp4/webm)..."
                                    value={pages[currentPageIndex].videoUrl || ''}
                                    onChange={(e) => updatePage(currentPageIndex, { videoUrl: e.target.value })}
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 text-xs text-blue-300 font-mono"
                                />
                            ) : (
                                <input
                                    type="text"
                                    placeholder="Paste Image URL..."
                                    value={pages[currentPageIndex].bgImage || ''}
                                    onChange={(e) => updatePage(currentPageIndex, { bgImage: e.target.value })}
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 text-xs text-green-300 font-mono"
                                />
                            )}
                            <p className="text-[10px] text-zinc-500 mt-1 italic">
                                *Supports direct links from Unsplash, Pexels, etc.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditorSidebar;
