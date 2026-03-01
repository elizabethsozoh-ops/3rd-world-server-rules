
'use client';

import React, { createContext, useContext, useState } from 'react';

const BookContext = createContext();

const initialPages = [
    { id: 1, type: 'cover', title: 'Start Creating', subTitle: 'Your Interactive Book', bgImage: '' },
    { id: 2, type: 'text', title: 'Chapter 1', content: 'This is where your story begins. Edit this text or change the layout.', bgImage: '' }
];

export const BookProvider = ({ children }) => {
    const [bookSettings, setBookSettings] = useState({
        title: '3rd World RP Server Rules',
        theme: 'modern', // 'comic', 'modern', 'dark'
        layout: 'double', // 'single', 'double'
        showShadows: true,
    });

    const [pages, setPages] = useState(initialPages);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const addPage = () => {
        const newPage = {
            id: Date.now(),
            type: 'text',
            title: 'New Page',
            content: 'Add your content here...',
            bgImage: ''
        };
        setPages([...pages, newPage]);
    };

    const updatePage = (index, newData) => {
        const newPages = [...pages];
        newPages[index] = { ...newPages[index], ...newData };
        setPages(newPages);
    };

    const deletePage = (index) => {
        if (pages.length <= 1) return; // Prevent deleting last page
        const newPages = pages.filter((_, i) => i !== index);
        setPages(newPages);
    };

    const updateSettings = (key, value) => {
        setBookSettings(prev => ({ ...prev, [key]: value }));
    };

    return (
        <BookContext.Provider value={{
            bookSettings,
            updateSettings,
            pages,
            addPage,
            updatePage,
            deletePage,
            currentPageIndex,
            setCurrentPageIndex
        }}>
            {children}
        </BookContext.Provider>
    );
};

export const useBook = () => useContext(BookContext);
