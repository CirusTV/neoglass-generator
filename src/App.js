return (
  <>
    <div className="generator-container">
      <h1 className="text-3xl font-bold mb-8 text-white text-shadow-neon">
        Glassmorphism & Neomorphism Generator
      </h1>
      
      {/* your grid/sliders/previews here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Glass controls */}
        <div>
          <h2 className="text-2xl mb-4">Glassmorphism</h2>
          {/* sliders */}
          <div 
            className="preview-box mb-4" 
            style={{
              background: `rgba(20, 20, 50, ${glassOpacity})`,
              backdropFilter: `blur(${glassBlur}px)`,
              WebkitBackdropFilter: `blur(${glassBlur}px)`,
              border: `1px solid rgba(0, 240, 255, ${glassBorderOpacity})`,
              borderRadius: '24px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,240,255,0.08)',
              width: '300px',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2em',
              textShadow: '0 0 10px #00f0ff',
            }}
          >
            Preview Glass
          </div>
        </div>

        {/* Neo controls */}
        <div>
          <h2 className="text-2xl mb-4">Neomorphism</h2>
          {/* sliders */}
          <div 
            className="preview-box mb-4" 
            style={{
              background: '#e0e0e0',
              borderRadius: '12px',
              boxShadow: `${neoInset ? 'inset ' : ''}${neoShadow}px ${neoShadow}px ${neoShadow*2}px #bebebe,
                          ${neoInset ? 'inset ' : ''}-${neoShadow}px -${neoShadow}px ${neoShadow*2}px #ffffff`,
              width: '300px',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2em',
            }}
          >
            Preview Neo
          </div>
        </div>
      </div>

      <button 
        onClick={generateCss} 
        className="watch-btn mt-8 px-6 py-3 text-lg"
      >
        Generate CSS
      </button>

      {generatedCss && (
        <pre className="mt-4 p-6 bg-rgba(20,20,50,0.6) rounded-2xl overflow-auto text-sm font-mono">
          {generatedCss}
        </pre>
      )}
    </div>
  </>
);
