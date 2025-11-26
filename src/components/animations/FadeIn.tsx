import { motion, useInView, Variant, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, ReactNode, useEffect, useState } from "react";

// Hook to detect mobile devices
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

// Apple's signature easing curves - precisely tuned
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]; // Dramatic, confident exit - Apple's favorite
const EASE_OUT_QUINT = [0.22, 1, 0.36, 1]; // Ultra smooth, polished
const EASE_OUT_CUBIC = [0.33, 1, 0.68, 1]; // Gentle, natural
const EASE_IN_OUT_QUART = [0.76, 0, 0.24, 1]; // Balanced, sophisticated
const EASE_ANTICIPATE = [0.68, -0.55, 0.265, 1.55]; // Bouncy, playful (use sparingly)

// Spring configurations - Apple uses springs for interactive elements
const SPRING_CONFIGS = {
  gentle: { type: "spring" as const, stiffness: 80, damping: 20, mass: 1 },
  smooth: { type: "spring" as const, stiffness: 100, damping: 25, mass: 1 },
  snappy: { type: "spring" as const, stiffness: 150, damping: 30, mass: 0.8 },
  bouncy: { type: "spring" as const, stiffness: 200, damping: 20, mass: 0.6 },
};

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  scale?: boolean;
  blur?: boolean;
  className?: string;
  once?: boolean;
  variant?: "default" | "hero" | "heading" | "body" | "card";
  springConfig?: keyof typeof SPRING_CONFIGS;
}

export function FadeIn({
  children,
  delay = 0,
  duration,
  direction = "up",
  distance,
  scale = false,
  blur = false,
  className = "",
  once = true,
  variant = "default",
  springConfig,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Apple-style threshold: trigger slightly before element enters viewport
  const isInView = useInView(ref, {
    once,
    amount: 0.15, // Trigger when 15% visible for more immediate feel
    margin: "0px 0px -8% 0px", // Start animation slightly before element is visible
  });

  // Skip animations on mobile
  if (isMobile) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  // Variant-specific defaults - carefully tuned
  const variantDefaults = {
    hero: {
      duration: 1.6,
      distance: 80,
      easing: EASE_OUT_EXPO,
      scale: 0.95,
      blur: 8,
    },
    heading: {
      duration: 1.2,
      distance: 30,
      easing: EASE_OUT_QUINT,
      scale: 0.97,
      blur: 4,
    },
    body: {
      duration: 1.0,
      distance: 20,
      easing: EASE_OUT_CUBIC,
      scale: 0.98,
      blur: 2,
    },
    card: {
      duration: 1.1,
      distance: 35,
      easing: EASE_OUT_QUINT,
      scale: 0.96,
      blur: 6,
    },
    default: {
      duration: 1.0,
      distance: 25,
      easing: EASE_OUT_CUBIC,
      scale: 0.98,
      blur: 3,
    },
  };

  const config = variantDefaults[variant];
  const finalDuration = duration ?? config.duration;
  const finalDistance = distance ?? config.distance;

  const directions = {
    up: { y: finalDistance },
    down: { y: -finalDistance },
    left: { x: finalDistance },
    right: { x: -finalDistance },
    none: {},
  };

  const hidden: Variant = {
    opacity: 0,
    ...directions[direction],
    ...(scale && { scale: config.scale }),
    ...(blur && { filter: `blur(${config.blur}px)` }),
  };

  const visible: Variant = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(scale && { scale: 1 }),
    ...(blur && { filter: "blur(0px)" }),
  };

  // Use spring animation if specified, otherwise use tween
  const transition = springConfig
    ? {
        ...SPRING_CONFIGS[springConfig],
        delay,
      }
    : {
        duration: finalDuration,
        delay,
        ease: config.easing,
      };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden,
        visible,
      }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger children animation - Apple's sequential reveal pattern
interface FadeInStaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
  variant?: "tight" | "normal" | "relaxed" | "dramatic";
}

export function FadeInStagger({
  children,
  staggerDelay,
  initialDelay = 0.15,
  className = "",
  variant = "normal",
}: FadeInStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -5% 0px",
  });

  // Skip animations on mobile
  if (isMobile) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  // Apple uses incredibly tight stagger delays for fluidity
  const staggerVariants = {
    tight: 0.04,
    normal: 0.08,
    relaxed: 0.12,
    dramatic: 0.16,
  };

  const finalStagger = staggerDelay ?? staggerVariants[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: finalStagger,
            delayChildren: initialDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger item with enhanced options
interface FadeInStaggerItemProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  variant?: "heading" | "body" | "card";
  blur?: boolean;
}

export function FadeInStaggerItem({
  children,
  direction = "up",
  distance,
  className = "",
  variant = "body",
  blur = false,
}: FadeInStaggerItemProps) {
  // Variant-specific distances and blur amounts
  const variantConfig = {
    heading: { distance: 25, blur: 4, duration: 1.0 },
    body: { distance: 18, blur: 2, duration: 0.9 },
    card: { distance: 30, blur: 5, duration: 1.1 },
  };

  const config = variantConfig[variant];
  const finalDistance = distance ?? config.distance;

  const directions = {
    up: { y: finalDistance },
    down: { y: -finalDistance },
    left: { x: finalDistance },
    right: { x: -finalDistance },
    none: {},
  };

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          ...directions[direction],
          ...(blur && { filter: `blur(${config.blur}px)` }),
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          ...(blur && { filter: "blur(0px)" }),
        },
      }}
      transition={{
        duration: config.duration,
        ease: EASE_OUT_QUINT,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Enhanced scale fade with blur for premium feel
interface ScaleFadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  intensity?: "subtle" | "normal" | "strong" | "dramatic";
  blur?: boolean;
  springy?: boolean;
}

export function ScaleFade({ 
  children, 
  delay = 0, 
  className = "",
  intensity = "normal",
  blur = true,
  springy = false,
}: ScaleFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
    margin: "0px 0px -6% 0px",
  });

  // Skip animations on mobile
  if (isMobile) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  // Apple uses very subtle scale transforms with blur for depth
  const intensityConfig = {
    subtle: { scale: 0.99, blur: 1, y: 10, duration: 0.9 },
    normal: { scale: 0.96, blur: 4, y: 25, duration: 1.1 },
    strong: { scale: 0.93, blur: 8, y: 40, duration: 1.3 },
    dramatic: { scale: 0.88, blur: 12, y: 60, duration: 1.6 },
  };

  const config = intensityConfig[intensity];

  const transition = springy
    ? { ...SPRING_CONFIGS.smooth, delay }
    : {
        duration: config.duration,
        delay,
        ease: EASE_OUT_EXPO,
      };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        scale: config.scale, 
        y: config.y,
        ...(blur && { filter: `blur(${config.blur}px)` }),
      }}
      animate={
        isInView 
          ? { 
              opacity: 1, 
              scale: 1, 
              y: 0,
              ...(blur && { filter: "blur(0px)" }),
            } 
          : { 
              opacity: 0, 
              scale: config.scale, 
              y: config.y,
              ...(blur && { filter: `blur(${config.blur}px)` }),
            }
      }
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Hero animation - Apple's dramatic product reveal style
interface HeroFadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function HeroFade({ children, delay = 0, className = "" }: HeroFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  // Skip animations on mobile
  if (isMobile) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: 60, 
        scale: 0.94,
        filter: "blur(10px)",
      }}
      animate={
        isInView 
          ? { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              filter: "blur(0px)",
            } 
          : { 
              opacity: 0, 
              y: 60, 
              scale: 0.94,
              filter: "blur(10px)",
            }
      }
      transition={{
        duration: 1.8,
        delay,
        ease: EASE_OUT_EXPO,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide reveal - Apple product showcase style with parallax
interface SlideRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "left" | "right";
  blur?: boolean;
}

export function SlideReveal({ 
  children, 
  delay = 0, 
  className = "",
  direction = "left",
  blur = true,
}: SlideRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -12% 0px",
  });

  // Skip animations on mobile
  if (isMobile) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  const initialX = direction === "left" ? -80 : 80;

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        x: initialX,
        ...(blur && { filter: "blur(8px)" }),
      }}
      animate={
        isInView 
          ? { 
              opacity: 1, 
              x: 0,
              ...(blur && { filter: "blur(0px)" }),
            } 
          : { 
              opacity: 0, 
              x: initialX,
              ...(blur && { filter: "blur(8px)" }),
            }
      }
      transition={{
        duration: 1.3,
        delay,
        ease: EASE_OUT_EXPO,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Parallax scroll effect - Apple's signature depth effect
interface ParallaxScrollProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxScroll({ 
  children, 
  offset = 50,
  className = "",
}: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Skip animations on mobile
  if (isMobile) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  // Smooth spring animation for parallax
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [offset, -offset]),
    SPRING_CONFIGS.gentle
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Zoom in reveal - dramatic product focus
interface ZoomRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  intensity?: "subtle" | "normal" | "dramatic";
}

export function ZoomReveal({ 
  children, 
  delay = 0, 
  className = "",
  intensity = "normal",
}: ZoomRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  // Skip animations on mobile
  if (isMobile) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  const intensityConfig = {
    subtle: { scale: 1.05, blur: 3, duration: 1.0 },
    normal: { scale: 1.15, blur: 8, duration: 1.4 },
    dramatic: { scale: 1.3, blur: 15, duration: 1.8 },
  };

  const config = intensityConfig[intensity];

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        scale: config.scale,
        filter: `blur(${config.blur}px)`,
      }}
      animate={
        isInView 
          ? { 
              opacity: 1, 
              scale: 1,
              filter: "blur(0px)",
            } 
          : { 
              opacity: 0, 
              scale: config.scale,
              filter: `blur(${config.blur}px)`,
            }
      }
      transition={{
        duration: config.duration,
        delay,
        ease: EASE_OUT_EXPO,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Magnetic hover effect - Apple's interactive elements
interface MagneticHoverProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticHover({ 
  children, 
  className = "",
  strength = 0.3,
}: MagneticHoverProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      whileHover={{
        scale: 1.02,
        transition: SPRING_CONFIGS.snappy,
      }}
      whileTap={{
        scale: 0.98,
        transition: SPRING_CONFIGS.snappy,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Rotate in - for special elements
interface RotateInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "clockwise" | "counterclockwise";
}

export function RotateIn({ 
  children, 
  delay = 0, 
  className = "",
  direction = "clockwise",
}: RotateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  // Skip animations on mobile
  if (isMobile) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  const initialRotate = direction === "clockwise" ? 15 : -15;

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        rotate: initialRotate,
        scale: 0.9,
        filter: "blur(6px)",
      }}
      animate={
        isInView 
          ? { 
              opacity: 1, 
              rotate: 0,
              scale: 1,
              filter: "blur(0px)",
            } 
          : { 
              opacity: 0, 
              rotate: initialRotate,
              scale: 0.9,
              filter: "blur(6px)",
            }
      }
      transition={{
        duration: 1.4,
        delay,
        ease: EASE_OUT_EXPO,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}