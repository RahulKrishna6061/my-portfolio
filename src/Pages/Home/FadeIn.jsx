import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children, className = "", delay = 0, threshold = 0.2 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => observer.unobserve(current);
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
