import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({ 
  children, 
  className = "",
  duration = 0.8,
  delay = 0,
  yOffset = 50,
  stagger = 0.03
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const chars = textRef.current.querySelectorAll('.char');
    
    gsap.fromTo(chars, 
      {
        y: yOffset,
        opacity: 0,
        scaleY: 1.5,
        scaleX: 0.8,
        transformOrigin: "50% 0%"
      },
      {
        y: 0,
        opacity: 1,
        scaleY: 1,
        scaleX: 1,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [duration, delay, yOffset, stagger]);

  const renderChars = () => {
    if (typeof children !== 'string') return children;
    
    return children.split("").map((char, index) => (
      <span className="char inline-block" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <span ref={textRef}>
        {renderChars()}
      </span>
    </div>
  );
};

export default ScrollFloat;