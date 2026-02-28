'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

const ZerNessBadge = ({ visible }) => {
    const canvasRef = useRef(null);
    const badgeRef = useRef(null);
    const spinBoostRef = useRef(0);
    const rendererRef = useRef(null);
    const frameRef = useRef(null);

    useEffect(() => {
        if (!visible || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const W = 80, H = 58;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(W, H);
        renderer.setClearColor(0x000000, 0);
        rendererRef.current = renderer;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
        camera.position.set(0, 0, 2.5);

        scene.add(new THREE.AmbientLight(0xffffff, 0.6));
        const d1 = new THREE.DirectionalLight(0xffffff, 5);
        d1.position.set(8, 8, 6);
        scene.add(d1);
        const d2 = new THREE.DirectionalLight(0x88ccff, 3);
        d2.position.set(-8, -6, -4);
        scene.add(d2);
        const d3 = new THREE.DirectionalLight(0xffffff, 2);
        d3.position.set(0, 10, -4);
        scene.add(d3);

        const mat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.95,
            roughness: 0.08,
        });

        let zGroup = null, nGroup = null;

        const loader = new FontLoader();
        loader.load(
            '/assets/helvetiker_bold.typeface.json',
            (font) => {
                const opts = {
                    font,
                    size: 0.7,
                    depth: 0.35,
                    curveSegments: 20,
                    bevelEnabled: true,
                    bevelSize: 0.05,
                    bevelThickness: 0.05,
                };

                function buildLetter(char, xPos) {
                    const geo = new TextGeometry(char, opts);
                    geo.center();
                    const mesh = new THREE.Mesh(geo, mat);
                    const group = new THREE.Group();
                    group.add(mesh);
                    group.position.set(xPos, 0, 0);
                    scene.add(group);
                    return group;
                }

                zGroup = buildLetter('Z', -0.55);
                nGroup = buildLetter('N', 0.55);
            }
        );

        const clock = new THREE.Clock();
        function animate() {
            frameRef.current = requestAnimationFrame(animate);
            const delta = clock.getDelta();

            spinBoostRef.current *= 0.96;
            const boost = spinBoostRef.current;

            if (zGroup) {
                zGroup.rotation.x += delta * (0.45 + boost);
                zGroup.rotation.y += delta * (0.7 + boost);
                zGroup.rotation.z += delta * (0.2 + boost * 0.5);
            }
            if (nGroup) {
                nGroup.rotation.x -= delta * (0.7 + boost);
                nGroup.rotation.y -= delta * (0.45 + boost);
                nGroup.rotation.z -= delta * (0.3 + boost * 0.5);
            }
            renderer.render(scene, camera);
        }
        animate();

        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
            renderer.dispose();
        };
    }, [visible]);

    const handleHover = () => { spinBoostRef.current = 8; };

    if (!visible) return null;

    return (
        <a
            ref={badgeRef}
            href="https://zernesslab.co.za"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleHover}
            onTouchStart={handleHover}
            className="fixed bottom-6 right-6 z-50 no-underline"
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '0 11px 0 0',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 100,
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                fontFamily: 'monospace',
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.24)';
                e.currentTarget.style.boxShadow = '0 0 26px rgba(255, 255, 255, 0.07)';
                const name = e.currentTarget.querySelector('.zn-name');
                if (name) {
                    name.style.color = '#ffffff';
                    name.style.textShadow = '0 0 14px rgba(255, 255, 255, 0.5)';
                }
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.boxShadow = 'none';
                const name = e.currentTarget.querySelector('.zn-name');
                if (name) {
                    name.style.color = 'rgba(255, 255, 255, 0.8)';
                    name.style.textShadow = 'none';
                }
            }}
        >
            {/* 3D Canvas */}
            <div style={{ width: 80, height: 58, borderRadius: 50, overflow: 'hidden', flexShrink: 0 }}>
                <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
            </div>

            {/* Divider */}
            <div style={{
                width: 1, height: 22, flexShrink: 0,
                background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.28), transparent)',
            }} />

            {/* Text */}
            <div style={{ textAlign: 'left' }}>
                <div style={{
                    fontSize: '0.5rem',
                    color: 'rgba(255, 255, 255, 0.36)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    lineHeight: 1.3,
                }}>
                    created by
                </div>
                <div className="zn-name" style={{
                    fontSize: '0.68rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    transition: 'all 0.3s ease',
                }}>
                    ZerNess Lab
                </div>
            </div>
        </a>
    );
};

export default ZerNessBadge;
