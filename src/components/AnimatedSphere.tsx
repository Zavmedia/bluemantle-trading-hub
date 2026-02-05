interface AnimatedSphereProps {
  size?: number;
  color?: "purple" | "cyan" | "blue" | "gold";
  delay?: number;
}

export const AnimatedSphere = ({ size = 200, color = "purple", delay = 0 }: AnimatedSphereProps) => {
  // Scale factor based on size prop
  const scale = size / 200;
  
  return (
    <div
      className="relative flex items-center justify-center gap-1"
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Green Candlestick 1 */}
      <div
        className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite]"
        style={{ animationDelay: `${delay + 0.1}s` }}
      >
        <div 
          className="bg-green-500" 
          style={{ width: 4 * scale, height: 24 * scale }}
        />
        <div 
          className="bg-green-500 rounded-sm" 
          style={{ width: 12 * scale, height: 48 * scale }}
        />
        <div 
          className="bg-green-500" 
          style={{ width: 4 * scale, height: 24 * scale }}
        />
      </div>
      
      {/* Red Candlestick */}
      <div
        className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite]"
        style={{ animationDelay: `${delay + 0.2}s` }}
      >
        <div 
          className="bg-red-500" 
          style={{ width: 4 * scale, height: 24 * scale }}
        />
        <div 
          className="bg-red-500 rounded-sm" 
          style={{ width: 12 * scale, height: 48 * scale }}
        />
        <div 
          className="bg-red-500" 
          style={{ width: 4 * scale, height: 24 * scale }}
        />
      </div>
      
      {/* Green Candlestick 2 */}
      <div
        className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite]"
        style={{ animationDelay: `${delay + 0.1}s` }}
      >
        <div 
          className="bg-green-500" 
          style={{ width: 4 * scale, height: 24 * scale }}
        />
        <div 
          className="bg-green-500 rounded-sm" 
          style={{ width: 12 * scale, height: 48 * scale }}
        />
        <div 
          className="bg-green-500" 
          style={{ width: 4 * scale, height: 24 * scale }}
        />
      </div>
    </div>
  );
};
