
'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { storage, db } from '../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Upload = ({ onBookReady }) => {
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState(null);

    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (!file) return;

        setIsUploading(true);
        setError(null);

        try {
            console.log("Starting upload for:", file.name);

            // Simulate/Attempt Upload Logic
            // In a real app with valid keys:
            // const storageRef = ref(storage, `uploads/${file.name}-${Date.now()}`);
            // await uploadBytes(storageRef, file);
            // const url = await getDownloadURL(storageRef);
            // const pages = ... // processing logic
            // await addDoc(collection(db, 'books'), { ... });

            // Simulating a delay for UX demo
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Since we don't have valid keys, we'll mock the resulting book object 
            // as if it came from Firestore
            const mockBook = {
                id: 'mock-book-id',
                pdfUrl: 'https://example.com/mock.pdf',
                pages: Array.from({ length: 6 }, (_, i) => ({
                    pageNumber: i + 1,
                    imageUrl: `https://via.placeholder.com/600x800.png?text=Page+${i + 1}`,
                    interactiveLayers: []
                }))
            };

            console.log("Book processed (mock):", mockBook);
            onBookReady(mockBook);

        } catch (err) {
            console.error("Upload error:", err);
            // Fallback for demo purposes even if error (e.g. invalid api key)
            const mockBook = {
                id: 'mock-book-id-fallback',
                pages: Array.from({ length: 6 }, (_, i) => ({
                    pageNumber: i + 1,
                    imageUrl: `https://via.placeholder.com/600x800.png?text=Page+${i + 1}`,
                    interactiveLayers: []
                }))
            };
            onBookReady(mockBook);
        } finally {
            setIsUploading(false);
        }
    }, [onBookReady]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'application/pdf': ['.pdf'] },
        maxFiles: 1
    });

    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            <motion.div
                {...getRootProps()}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, borderColor: '#a1a1aa' }}
                whileTap={{ scale: 0.98 }}
                className={`
          relative overflow-hidden rounded-2xl border-2 border-dashed 
          transition-all duration-300 h-64 flex flex-col items-center justify-center
          cursor-pointer backdrop-blur-sm
          ${isDragActive ? 'border-blue-500 bg-blue-500/10' : 'border-zinc-700 bg-zinc-800/50'}
        `}
            >
                <input {...getInputProps()} />

                <AnimatePresence mode='wait'>
                    {isUploading ? (
                        <motion.div
                            key="uploading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="w-12 h-12 border-4 border-zinc-600 border-t-white rounded-full animate-spin" />
                            <p className="text-zinc-400 font-medium">Uploading & Processing...</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center p-6"
                        >
                            <div className="mb-4 text-4xl">📄</div>
                            <h3 className="text-xl font-bold text-white mb-2">Drop your PDF here</h3>
                            <p className="text-zinc-400 text-sm">
                                or click to browse
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Upload;
