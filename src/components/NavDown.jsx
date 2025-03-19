import React, { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let bubbles = [];
    let animationFrameId;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Create initial bubbles
    const createBubbles = () => {
      bubbles = [];
      const numberOfBubbles = 30;
      
      for (let i = 0; i < numberOfBubbles; i++) {
        const size = Math.random() * 50 + 10;
        bubbles.push({
          x: Math.random() * canvas.width,
          y: canvas.height + Math.random() * 100,
          size: size,
          speed: Math.random() * 0.8 + 0.2,
          opacity: Math.random() * 0.5 + 0.1,
          color: `rgba(147, 51, 234, ${Math.random() * 0.3 + 0.1})` // Purple with random opacity
        });
      }
    };
    
    // Draw bubbles
    const drawBubbles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      bubbles.forEach(bubble => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color;
        ctx.fill();
        
        // Add a subtle border
        ctx.strokeStyle = `rgba(168, 85, 247, ${bubble.opacity * 0.8})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Move bubble
        bubble.y -= bubble.speed;
        
        // Slight horizontal movement
        bubble.x += Math.sin(bubble.y * 0.01) * 0.5;
        
        // Reset bubble when it goes out of screen
        if (bubble.y < -bubble.size) {
          bubble.y = canvas.height + bubble.size;
          bubble.x = Math.random() * canvas.width;
        }
      });
      
      animationFrameId = requestAnimationFrame(drawBubbles);
    };
    
    // Initialize
    setCanvasSize();
    createBubbles();
    drawBubbles();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      setCanvasSize();
      createBubbles();
    });
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  
  return (
    <section className="bg-black min-h-screen text-white relative">
      {/* Canvas for dynamic bubbles */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />
      
      {/* Background Circular Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Large half circle - outermost */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[140%] h-[70%] rounded-t-full border-t-2 border-l-2 border-r-2 border-purple-900/20 bg-purple-900/5"></div>
        
        {/* Medium half circle - middle */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[100%] h-[60%] rounded-t-full border-t-2 border-l-2 border-r-2 border-purple-800/30 bg-purple-800/5"></div>
        
        {/* Small half circle - innermost */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[70%] h-[50%] rounded-t-full border-t-2 border-l-2 border-r-2 border-purple-700/40 bg-purple-700/5"></div>
        
        {/* Central purple glow */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
        
        {/* Additional purple light sources */}
        <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-purple-500/15 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-52 h-52 bg-purple-700/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-purple-600/15 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-32 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Transform Your Business</span>
            <br />
            <span className="text-gray-300">Operations with AI-</span>
            <br />
            <span className="text-purple-400">Powered Management</span>
          </h1>
          <p className="text-md text-gray-400 mb-8 max-w-2xl mx-auto">
            Automate workflows, boost productivity, and scale your business with
            intelligent solutions
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="px-8 py-3 bg-transparent text-white rounded-full font-medium border border-gray-600 hover:border-purple-400 transition-colors flex items-center">
              View Demo <Play className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;