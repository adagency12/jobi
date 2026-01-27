'use client';

import { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

interface Vertex {
    x: number;
    y: number;
    z: number;
    originX: number;
    originY: number;
    vx: number;
    vy: number;
}

interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    prevX: number;
    prevY: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
    glowColor: string;
    angleOffset: number;
}


interface Props {
    mode?: 'full' | 'container';
    className?: string;
}

export default function AnimatedBackground({ mode = 'full', className = '' }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let animationId: number;
        let particles: Particle[] = [];

        // "Fluid" Blobs configuration
        const blobs = [
            { x: 0, y: 0, r: 0, color: 'rgba(0, 194, 209, 0.15)', vx: 0.2, vy: 0.1, t: 0 },
            { x: 0, y: 0, r: 0, color: 'rgba(126, 231, 242, 0.12)', vx: -0.15, vy: 0.2, t: 100 },
            { x: 0, y: 0, r: 0, color: 'rgba(0, 151, 167, 0.08)', vx: 0.1, vy: -0.15, t: 200 },
        ];

        const initParticles = (count: number) => {
            particles = [];
            const particleColors = [
                { core: '#00C2D1', glow: 'rgba(0, 194, 209, 0.4)' },  // Modern Teal
                { core: '#2E7DFF', glow: 'rgba(46, 125, 255, 0.3)' },  // Electric Blue
                { core: '#00BFA5', glow: 'rgba(0, 191, 165, 0.3)' },  // Aqua Blue
                { core: '#01579B', glow: 'rgba(1, 87, 155, 0.2)' }    // Deep Tech Blue
            ];

            for (let i = 0; i < count; i++) {
                const colorSet = particleColors[Math.floor(Math.random() * particleColors.length)];
                const rx = Math.random() * width;
                const ry = Math.random() * height;
                particles.push({
                    x: rx,
                    y: ry,
                    originX: rx,
                    originY: ry,
                    prevX: rx,
                    prevY: ry,
                    vx: (Math.random() - 0.5) * 0.25,
                    vy: (Math.random() - 0.5) * 0.25,
                    size: Math.random() * 4 + 2,    // Smaller, more professional nodes
                    opacity: 0.6,                    // Subtle overall opacity
                    color: colorSet.core,
                    glowColor: colorSet.glow,
                    angleOffset: Math.random() * Math.PI * 2 // Individual path offset
                });
            }
        };

        const resize = () => {
            if (mode === 'container' && container) {
                width = container.clientWidth;
                height = container.clientHeight;
            } else {
                width = window.innerWidth;
                height = window.innerHeight;
            }

            canvas.width = width;
            canvas.height = height;

            // Initialize blobs
            blobs.forEach((b) => {
                b.x = width * (0.3 + Math.random() * 0.4);
                b.y = height * (0.3 + Math.random() * 0.4);
                b.r = Math.min(width, height) * 0.6;
            });

            initParticles(width > 768 ? 400 : 200); // Supercharged density for "more glowing lines"
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (mode === 'container' && container) {
                const rect = container.getBoundingClientRect();
                mouseRef.current = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                };
            } else {
                mouseRef.current = { x: e.clientX, y: e.clientY };
            }
        };

        const draw = () => {
            // Reverted to Premium Light Background
            ctx.fillStyle = '#F8FAFC';
            ctx.fillRect(0, 0, width, height);

            const time = Date.now() * 0.0002;
            const mouse = mouseRef.current;

            // 1. DRAW FLUID BLOBS (Background Depth Layer)
            blobs.forEach(b => {
                b.x += Math.sin(time + b.t) * 0.5 * b.vx;
                b.y += Math.cos(time + b.t * 0.8) * 0.5 * b.vy;

                const currentRadius = b.r + Math.sin(time * 2 + b.t) * 50;
                const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, currentRadius);
                // Optimized for light background
                gradient.addColorStop(0, b.color);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(b.x, b.y, currentRadius, 0, Math.PI * 2);
                ctx.fill();
            });

            // 2. INDEPENDENT FLOATING (Mesh connections removed per request)

            // 3. DRAW AND UPDATE PARTICLES (Data Slashes)
            particles.forEach(p => {
                p.prevX = p.x;
                p.prevY = p.y;

                // Flow field movement logic - Decoupled to prevent "combining"
                const angle = ((Math.sin(p.x * 0.008) + Math.cos(p.y * 0.008)) * Math.PI) + p.angleOffset;
                p.vx += Math.cos(angle) * 0.006;
                p.vy += Math.sin(angle) * 0.006;

                p.vx *= 0.99;
                p.vy *= 0.99;

                // Homing force to keep particles "in their own place"
                const dx = p.originX - p.x;
                const dy = p.originY - p.y;
                p.vx += dx * 0.0005;
                p.vy += dy * 0.0005;

                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges instead of wrapping
                if (p.x < 0) {
                    p.x = 0;
                    p.vx *= -1;
                } else if (p.x > width) {
                    p.x = width;
                    p.vx *= -1;
                }

                if (p.y < 0) {
                    p.y = 0;
                    p.vy *= -1;
                } else if (p.y > height) {
                    p.y = height;
                    p.vy *= -1;
                }

                // 1. Draw Data Slash (Supercharged trails)
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                const slashLength = p.size * (3 + speed * 18); // Longer cinematic slashes
                const lineAngle = Math.atan2(p.vy, p.vx);

                const slashGrad = ctx.createLinearGradient(
                    p.x - Math.cos(lineAngle) * slashLength,
                    p.y - Math.sin(lineAngle) * slashLength,
                    p.x,
                    p.y
                );
                slashGrad.addColorStop(0, 'rgba(0, 194, 209, 0)');
                slashGrad.addColorStop(1, p.glowColor.replace(/0\.\d+/, '0.5')); // Intensified glow

                ctx.beginPath();
                ctx.strokeStyle = slashGrad;
                ctx.lineWidth = p.size * 0.45;
                ctx.lineCap = 'round';
                ctx.globalAlpha = 1.0; // Max brightness slashes
                ctx.moveTo(p.x - Math.cos(lineAngle) * slashLength, p.y - Math.sin(lineAngle) * slashLength);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();

                // 2. Data Point Core
                ctx.beginPath();
                ctx.fillStyle = p.color;
                ctx.globalAlpha = 0.9;
                ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
                ctx.fill();

                // 3. Subtle "Jobber" Data Label (Sync Simulation)
                // Only show for a small subset of particles to keep it clean
                if (particles.indexOf(p) % 50 === 0) {
                    ctx.font = '700 8px Inter, sans-serif';
                    ctx.fillStyle = '#00C2D1';
                    ctx.globalAlpha = 0.6;
                    ctx.fillText('Jobber Sync', p.x + 8, p.y + 3);
                }

                ctx.globalAlpha = 1.0;
            });

            ctx.globalAlpha = 1.0;
            animationId = requestAnimationFrame(draw);
        };

        resize();
        window.addEventListener('resize', resize);

        animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, [mode]);

    return (
        <div
            ref={containerRef}
            className={`${styles.backgroundContainer} ${mode === 'container' ? styles.containerMode : ''} ${className}`}
        >
            <canvas ref={canvasRef} className={styles.activeCanvas} />
            <div className={styles.grainOverlay}></div>
        </div>
    );
}
