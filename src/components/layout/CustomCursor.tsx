import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const outlineRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const outlinePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseEnter = () => document.body.classList.add('cursor-hover');
    const handleMouseLeave = () => document.body.classList.remove('cursor-hover');

    window.addEventListener('mousemove', handleMouseMove);

    const interactives = document.querySelectorAll('a, button, .user-avatar, .course-card, .filter-btn, input, .group');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    let requestRef: number;

    const animate = () => {
      const speed = 0.3;
      outlinePosRef.current.x += (mouseRef.current.x - outlinePosRef.current.x) * speed;
      outlinePosRef.current.y += (mouseRef.current.y - outlinePosRef.current.y) * speed;

      if (outlineRef.current) {
        outlineRef.current.style.left = `${outlinePosRef.current.x}px`;
        outlineRef.current.style.top = `${outlinePosRef.current.y}px`;
      }

      requestRef = requestAnimationFrame(animate);
    };

    requestRef = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(requestRef);
    };
  }, []);

  return <div ref={outlineRef} className="cursor-outline" />;
};

export default CustomCursor;
