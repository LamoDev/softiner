const CurvedBackground = () => {
    return (
      <svg
        viewBox="0 30 1440 320"
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '300px',
          display: 'block'
        }}
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#84b4b4" />
            <stop offset="100%" stopColor="#e9dfb9" />
          </linearGradient>
        </defs>
        <path
          fill="url(#grad)"
          d="
            M0,160 
            C360,0 1080,0 1440,160 
            L1440,320 
            C1080,160 360,160 0,320 
            Z
          "
        />
      </svg>
    );
  };
  
  export default CurvedBackground;
  