import React, { useRef, useEffect } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // إعداد النجوم
    const stars = [];
    const numStars = 200; // عدد النجوم
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.4 + 0.2
      });
    }

    const animate = () => {
      // الخلفية
      ctx.fillStyle = '#001f24ff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // رسم النجوم
      ctx.fillStyle = '#bee6ebff'; // لون النجوم
   


             stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // تحريك النجوم أفقياً من اليمين لليسار
        star.x -= star.speed; 
        if (star.x < 0) star.x = canvas.width; 
      });

    

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

   return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        display: 'block'
      }}
    />
  );
};

export default StarryBackground;
