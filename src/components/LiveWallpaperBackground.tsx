import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

type RGB = [number, number, number];

interface PaletteStop {
  light: RGB;
  dark: RGB;
  lightAlpha: number;
  darkAlpha: number;
}

/**
 * Curated minimal palette strictly anchored to a predominantly white canvas:
 * whisper-thin crimson fading to white, soft lavender, and delicate reddish-orange.
 * Designed to add organic dynamism without ever competing with foreground content.
 */
const PALETTE: PaletteStop[] = [
  { light: [239, 68, 68], dark: [220, 38, 38], lightAlpha: 0.052, darkAlpha: 0.13 },   // Thin Crimson -> White
  { light: [248, 113, 113], dark: [225, 29, 72], lightAlpha: 0.048, darkAlpha: 0.11 }, // Soft Blush Red -> White
  { light: [251, 113, 68], dark: [234, 88, 12], lightAlpha: 0.045, darkAlpha: 0.10 },  // Thin Reddish-Orange
  { light: [196, 181, 253], dark: [139, 92, 246], lightAlpha: 0.052, darkAlpha: 0.12 }, // Soft Lavender
  { light: [221, 214, 254], dark: [167, 139, 250], lightAlpha: 0.048, darkAlpha: 0.11 }, // Mist Lavender -> White
];

/**
 * Nine spawn anchors across corners, edges, and center so gentle gradient
 * blooms can emerge naturally from anywhere while preserving wide white breathing room.
 */
const SPAWN_ZONES: Array<[number, number]> = [
  [0.08, 0.10], // Top-Left
  [0.50, 0.06], // Top-Center
  [0.92, 0.10], // Top-Right
  [0.06, 0.50], // Mid-Left
  [0.50, 0.50], // Center
  [0.94, 0.50], // Mid-Right
  [0.10, 0.90], // Bottom-Left
  [0.50, 0.94], // Bottom-Center
  [0.90, 0.90], // Bottom-Right
];

interface GradientBloom {
  zoneIndex: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  curveAmp: number;
  curveFreq: number;
  baseRadius: number;
  age: number;
  duration: number;
  startColorIdx: number;
  endColorIdx: number;
  intensity: number;
}

const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

const lerpRGB = (c1: RGB, c2: RGB, t: number): RGB => [
  Math.round(lerp(c1[0], c2[0], t)),
  Math.round(lerp(c1[1], c2[1], t)),
  Math.round(lerp(c1[2], c2[2], t)),
];

const clamp = (val: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, val));

const safePaletteIndex = (idx: number): number => {
  const len = PALETTE.length;
  if (!Number.isFinite(idx)) return 0;
  return ((Math.floor(idx) % len) + len) % len;
};

/** Quintic smootherstep for zero-jerk drift and color morphing */
const smootherstep = (t: number): number =>
  t * t * t * (t * (t * 6 - 15) + 10);

function createBloom(
  recentZones: number[],
  climateCursor: number,
  initialProgress = 0
): GradientBloom {
  // Choose a zone outside recent spawns so blooms stay spread out and never clump
  const candidates = SPAWN_ZONES.map((_, idx) => idx).filter(
    (idx) => !recentZones.includes(idx)
  );
  const pool = candidates.length > 0 ? candidates : SPAWN_ZONES.map((_, i) => i);
  const zoneIndex = pool[Math.floor(Math.random() * pool.length)];

  const [anchorX, anchorY] = SPAWN_ZONES[zoneIndex];
  const startX = clamp(anchorX + (Math.random() - 0.5) * 0.18, -0.06, 1.06);
  const startY = clamp(anchorY + (Math.random() - 0.5) * 0.18, -0.06, 1.06);

  // Slow, graceful drift along a gentle arc
  const angle = Math.atan2(0.5 - startY, 0.5 - startX) + (Math.random() - 0.5) * 1.9;
  const distance = 0.12 + Math.random() * 0.18;
  const endX = clamp(startX + Math.cos(angle) * distance, -0.08, 1.08);
  const endY = clamp(startY + Math.sin(angle) * distance, -0.08, 1.08);

  const safeCursor = Number.isFinite(climateCursor) ? Math.max(0, climateCursor) : 0;
  const baseIdx = safePaletteIndex(safeCursor + Math.random() * 2.5);
  // Transition strictly to an adjacent harmonic stop for seamless shifts
  const direction = Math.random() > 0.5 ? 1 : -1;
  const endColorIdx = safePaletteIndex(baseIdx + direction);

  const duration = 22 + Math.random() * 12; // 22s–34s meditative lifecycle

  return {
    zoneIndex,
    startX,
    startY,
    endX,
    endY,
    curveAmp: (Math.random() - 0.5) * 0.10,
    curveFreq: 0.8 + Math.random() * 0.6,
    baseRadius: 0.36 + Math.random() * 0.22,
    age: initialProgress * duration,
    duration,
    startColorIdx: baseIdx,
    endColorIdx,
    intensity: 0.9 + Math.random() * 0.15,
  };
}

interface LiveWallpaperBackgroundProps {
  className?: string;
}

export const LiveWallpaperBackground: React.FC<LiveWallpaperBackgroundProps> = ({
  className = '',
}) => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const targetDarkRef = useRef<number>(theme === 'dark' ? 1 : 0);

  useEffect(() => {
    targetDarkRef.current = theme === 'dark' ? 1 : 0;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Compact logical canvas + generous CSS blur yields ultra-smooth, banding-free
    // gradients that feather cleanly into the dominant white base.
    const LOGICAL_W = 320;
    const LOGICAL_H = 180;
    canvas.width = LOGICAL_W;
    canvas.height = LOGICAL_H;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const BLOOM_COUNT = 5;
    const recentZones: number[] = [];
    const blooms: GradientBloom[] = [];
    for (let i = 0; i < BLOOM_COUNT; i++) {
      const bloom = createBloom(recentZones, (i / BLOOM_COUNT) * PALETTE.length, i / BLOOM_COUNT);
      recentZones.push(bloom.zoneIndex);
      if (recentZones.length > 4) recentZones.shift();
      blooms.push(bloom);
    }

    let darkMix = targetDarkRef.current;
    let globalTime = 0;
    let lastTimestamp = performance.now();
    let rafId: number | null = null;

    const renderFrame = (rawDt: number) => {
      const dt = Number.isFinite(rawDt) ? clamp(rawDt, 0, 0.05) : 0;
      globalTime += dt;

      // Smoothly transition light <-> dark palette weights
      const targetDark = targetDarkRef.current;
      darkMix += (targetDark - darkMix) * Math.min(1, dt * 4);

      // Ultra-slow global climate drift (~75s per cycle)
      const rawCursor = Math.max(0, globalTime * 0.068);
      const climateCursor = rawCursor % PALETTE.length;

      ctx.clearRect(0, 0, LOGICAL_W, LOGICAL_H);

      // 1. Single feather-light ambient breath so the white surface stays clean & dominant
      const orbitAngle = globalTime * 0.055;
      const washX = LOGICAL_W * (0.5 + Math.cos(orbitAngle) * 0.24);
      const washY = LOGICAL_H * (0.5 + Math.sin(orbitAngle * 0.85) * 0.22);
      const washR = Math.max(LOGICAL_W, LOGICAL_H) * 0.72;

      const idxA = safePaletteIndex(climateCursor);
      const idxB = safePaletteIndex(idxA + 1);
      const frac = smootherstep(clamp(climateCursor - Math.floor(climateCursor), 0, 1));

      const stopWashA = PALETTE[idxA];
      const stopWashB = PALETTE[idxB];
      const washLight = lerpRGB(stopWashA.light, stopWashB.light, frac);
      const washDark = lerpRGB(stopWashA.dark, stopWashB.dark, frac);
      const washCol = lerpRGB(washLight, washDark, darkMix);
      const washAlpha = lerp(0.022, 0.055, darkMix);

      const baseGrad = ctx.createRadialGradient(washX, washY, 0, washX, washY, washR);
      baseGrad.addColorStop(0, `rgba(${washCol[0]}, ${washCol[1]}, ${washCol[2]}, ${washAlpha.toFixed(4)})`);
      baseGrad.addColorStop(0.5, `rgba(${washCol[0]}, ${washCol[1]}, ${washCol[2]}, ${(washAlpha * 0.35).toFixed(4)})`);
      baseGrad.addColorStop(1, `rgba(${washCol[0]}, ${washCol[1]}, ${washCol[2]}, 0)`);
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, LOGICAL_W, LOGICAL_H);

      // 2. Multi-origin emerging & dissolving whisper-soft gradient blooms
      const maxDim = Math.max(LOGICAL_W, LOGICAL_H);

      for (let i = 0; i < blooms.length; i++) {
        const b = blooms[i];
        b.age += dt;

        if (b.age >= b.duration) {
          const replacement = createBloom(recentZones, climateCursor, 0);
          recentZones.push(replacement.zoneIndex);
          if (recentZones.length > 4) recentZones.shift();
          blooms[i] = replacement;
          continue;
        }

        const t = clamp(b.age / b.duration, 0, 1);
        const easeT = smootherstep(t);

        // Sine-squared envelope: perfectly flat 0 derivative at start, peak, and end
        const s = Math.sin(Math.PI * t);
        const envelope = s * s;

        // Gentle perpendicular arc sway
        const dx = b.endX - b.startX;
        const dy = b.endY - b.startY;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;
        const sway = Math.sin(t * Math.PI * b.curveFreq) * b.curveAmp;

        const px = (lerp(b.startX, b.endX, easeT) + nx * sway) * LOGICAL_W;
        const py = (lerp(b.startY, b.endY, easeT) + ny * sway) * LOGICAL_H;

        // Soft organic expansion & contraction
        const radiusScale = 0.8 + 0.32 * Math.sin(Math.PI * t);
        const radius = b.baseRadius * maxDim * radiusScale;

        // Smooth hue shift over bloom's lifetime
        const stopA = PALETTE[safePaletteIndex(b.startColorIdx)];
        const stopB = PALETTE[safePaletteIndex(b.endColorIdx)];
        const lightCol = lerpRGB(stopA.light, stopB.light, easeT);
        const darkCol = lerpRGB(stopA.dark, stopB.dark, easeT);
        const finalCol = lerpRGB(lightCol, darkCol, darkMix);

        const baseAlphaLight = lerp(stopA.lightAlpha, stopB.lightAlpha, easeT);
        const baseAlphaDark = lerp(stopA.darkAlpha, stopB.darkAlpha, easeT);
        const alpha = lerp(baseAlphaLight, baseAlphaDark, darkMix) * envelope * b.intensity;

        if (alpha <= 0.0015) continue;

        const grad = ctx.createRadialGradient(px, py, 0, px, py, radius);
        grad.addColorStop(0, `rgba(${finalCol[0]}, ${finalCol[1]}, ${finalCol[2]}, ${alpha.toFixed(4)})`);
        grad.addColorStop(0.32, `rgba(${finalCol[0]}, ${finalCol[1]}, ${finalCol[2]}, ${(alpha * 0.56).toFixed(4)})`);
        grad.addColorStop(0.66, `rgba(${finalCol[0]}, ${finalCol[1]}, ${finalCol[2]}, ${(alpha * 0.16).toFixed(4)})`);
        grad.addColorStop(1, `rgba(${finalCol[0]}, ${finalCol[1]}, ${finalCol[2]}, 0)`);

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, LOGICAL_W, LOGICAL_H);
      }
    };

    // Draw initial frame immediately
    renderFrame(0);

    if (prefersReducedMotion) {
      return;
    }

    const tick = (now: number) => {
      const dt = Number.isFinite(now)
        ? clamp((now - lastTimestamp) / 1000, 0, 0.05)
        : 0;
      lastTimestamp = Number.isFinite(now) ? Math.max(lastTimestamp, now) : performance.now();
      renderFrame(dt);
      rafId = window.requestAnimationFrame(tick);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (rafId !== null) {
          window.cancelAnimationFrame(rafId);
          rafId = null;
        }
      } else if (rafId === null) {
        lastTimestamp = performance.now();
        rafId = window.requestAnimationFrame(tick);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    rafId = window.requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 transform-gpu ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block scale-110 blur-[30px] opacity-90 transform-gpu [backface-visibility:hidden]"
      />
    </div>
  );
};

export default LiveWallpaperBackground;
