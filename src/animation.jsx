import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router';

const AnimateAppear = () => {
  const location = useLocation();

useEffect(() => {
  const elements = document.querySelectorAll('h1, h2, p');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, [location.pathname]);

}

export default AnimateAppear;