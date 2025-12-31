// lib/config/theme.config.ts

/**
 * DCITC Theme Configuration
 * 
 * ⚠️ NOTE: Most styling should use CSS variables from theme.css
 * This file is ONLY for:
 * - JavaScript/TypeScript logic that needs theme values
 * - Dynamic calculations
 * - Type-safe theme constants
 * 
 * For styling, prefer: className="text-primary" or style={{ color: 'var(--primary)' }}
 */

export const themeConfig = {
  // Animation Durations (can't be done in CSS variables easily)
  animations: {
    fast: 150,
    normal: 300,
    slow: 500,
    verySlow: 1000,
  },

  // Framer Motion Variants
  motionVariants: {
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
    slideInRight: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    },
  },

  // Stagger timing for animations
  staggerDelays: {
    children: 0.1,
    fast: 0.05,
    slow: 0.15,
  },

  // Breakpoints (for JavaScript usage, Tailwind handles CSS)
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },

  // Z-index layers (maintain consistent layering)
  zIndex: {
    dropdown: 1000,
    modal: 1100,
    tooltip: 1200,
    navbar: 50,
    footer: 10,
  },
};

/**
 * Helper Functions for Dynamic Calculations
 */

// Get CSS variable value at runtime
export const getCSSVariable = (variableName: string): string => {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
};

// Set CSS variable dynamically
export const setCSSVariable = (variableName: string, value: string): void => {
  if (typeof window === 'undefined') return;
  document.documentElement.style.setProperty(variableName, value);
};

// Check if dark mode is active
export const isDarkMode = (): boolean => {
  if (typeof window === 'undefined') return true;
  return document.documentElement.classList.contains('dark');
};

// Get current brand color
export const getBrandColor = (variant: 'violet' | 'mint'): string => {
  return variant === 'violet' 
    ? getCSSVariable('--brand-violet') 
    : getCSSVariable('--brand-mint');
};

// Animation timing helper
export const getTransition = (duration: keyof typeof themeConfig.animations = 'normal') => {
  return {
    duration: themeConfig.animations[duration] / 1000, // Convert to seconds for Framer Motion
    ease: [0.43, 0.13, 0.23, 0.96], // Custom easing
  };
};

// Stagger children animation helper
export const getStaggerContainer = (delayType: keyof typeof themeConfig.staggerDelays = 'children') => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: themeConfig.staggerDelays[delayType],
        delayChildren: 0.1,
      },
    },
  };
};

export default themeConfig;