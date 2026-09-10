import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Instant tracking for the center dot
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring-delayed tracking for the outer ring
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is touch-based to prevent showing cursor on mobile
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      // Identify interactive elements
      const interactive = target.closest('a, button, input, textarea, .group, [role="button"], .cursor-pointer');
      setIsHovering(!!interactive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] hidden sm:flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div 
          className="w-full h-full rounded-full border border-gray-400 dark:border-gray-500 bg-gray-400/10 dark:bg-gray-500/10 backdrop-blur-[1px]"
          animate={{
            scale: isHovering ? 1.6 : 1,
            backgroundColor: isHovering ? 'rgba(156, 163, 175, 0.2)' : 'rgba(156, 163, 175, 0.1)',
            borderColor: isHovering ? 'rgba(156, 163, 175, 0.8)' : 'rgba(156, 163, 175, 0.5)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      </motion.div>
      
      {/* Inner Fast Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full pointer-events-none z-[100] hidden sm:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? (isHovering ? 0 : 1) : 0,
        }}
      />
    </>
  );
}
