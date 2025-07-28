const LodingComponent = () => {
  const shimmerStyle = {
    background: "linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
  };

  return (
    <>
      <div className="w-65 h-72 bg-gray-300 rounded-md flex flex-col p-2">
        <div className="w-full h-1/2 rounded-xl" style={shimmerStyle}></div>
        <div className="w-full h-1/2 rounded-xl flex flex-col justify-between py-1">
          <div className="w-full h-1/3 rounded-xl flex items-center gap-2">
            <div className="h-6 w-6 rounded-full" style={shimmerStyle}></div>
            <div className="h-4 w-24 rounded-md" style={shimmerStyle}></div>
          </div>
          <div className="w-full h-1/3 rounded-xl flex gap-2">
            <div className="h-5 w-14 rounded-full" style={shimmerStyle}></div>
            <div className="h-5 w-14 rounded-full" style={shimmerStyle}></div>
            <div className="h-5 w-14 rounded-full" style={shimmerStyle}></div>
          </div>
          <div className="flex gap-2 w-full h-1/3 pt-3">
            <div className="h-6 w-6 rounded-full" style={shimmerStyle}></div>
            <div className="h-6 w-6 rounded-full" style={shimmerStyle}></div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -100% 0;
            }
            100% {
              background-position: 100% 0;
            }
          }
        `}
      </style>
    </>
  );
};

interface count { counts:number}

export const Loding = (props:count) =>{
    return(<>
        <div className="flex justify-center p-2 mt-20">
          <div className="flex flex-wrap gap-2 w-auto ">
            {Array.from({ length: props.counts }).map((_, index) => (
                <LodingComponent key={index} />
            ))}
          </div>
        </div>
    </>)
}