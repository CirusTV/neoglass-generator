import React, { useState } from 'react';

function App() {
  const [glassBlur, setGlassBlur] = useState(10);
  const [glassOpacity, setGlassOpacity] = useState(0.3);
  const [glassBorderOpacity, setGlassBorderOpacity] = useState(0.2);
  const [neoShadow, setNeoShadow] = useState(5);
  const [neoInset, setNeoInset] = useState(false);
  const [generatedCss, setGeneratedCss] = useState('');

  const generateCss = () => {
    const glassCss = `
.glass-card {
  background: rgba(20, 20, 50, ${glassOpacity});
  backdrop-filter: blur(${glassBlur}px);
  -webkit-backdrop-filter: blur(${glassBlur}px);
  border: 1px solid rgba(0, 240, 255, ${glassBorderOpacity});
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,240,255,0.08);
  transition: all 0.5s ease;
}
.glass-card:hover {
  box-shadow: 0 16px 48px rgba(0,240,255,0.25), inset 0 0 30px rgba(0,240,255,0.12);
}
    `;

    const neoCss = `
.neo-card {
  background: #e0e0e0;
  border-radius: 12px;
  box-shadow: ${neoInset ? 'inset ' : ''}${neoShadow}px ${neoShadow}px ${neoShadow*2}px #bebebe,
              ${neoInset ? 'inset ' : ''}-${neoShadow}px -${neoShadow}px ${neoShadow*2}px #ffffff;
  transition: all 0.3s;
}
    `;

    setGeneratedCss(`${glassCss}\n\n${neoCss}`);
  };

  return (
    <div className="generator-container p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center text-white drop-shadow-lg">
        Glassmorphism & Neomorphism Generator
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Glassmorphism Controls */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-neonCyan">Glassmorphism</h2>
          
          <div>
            <label className="block mb-2 text-white">Blur (px): {glassBlur}</label>
            <input 
              type="range" 
              min="0" max="50" 
              value={glassBlur} 
              onChange={(e) => setGlassBlur(Number(e.target.value))}
              className="w-full accent-neonCyan"
            />
          </div>

          <div>
            <label className="block mb-2 text-white">Opacity: {glassOpacity.toFixed(2)}</label>
            <input 
              type="range" 
              min="0" max="1" step="0.01" 
              value={glassOpacity} 
              onChange={(e) => setGlassOpacity(Number(e.target.value))}
              className="w-full accent-neonCyan"
            />
          </div>

          <div>
            <label className="block mb-2 text-white">Border Opacity: {glassBorderOpacity.toFixed(2)}</label>
            <input 
              type="range" 
              min="0" max="1" step="0.01" 
              value={glassBorderOpacity} 
              onChange={(e) => setGlassBorderOpacity(Number(e.target.value))}
              className="w-full accent-neonCyan"
            />
          </div>

          <div 
            className="preview-box mx-auto"
            style={{
              background: `rgba(20, 20, 50, ${glassOpacity})`,
              backdropFilter: `blur(${glassBlur}px)`,
              WebkitBackdropFilter: `blur(${glassBlur}px)`,
              border: `1px solid rgba(0, 240, 255, ${glassBorderOpacity})`,
              boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,240,255,0.08)',
            }}
          >
            Glass Preview
          </div>
        </div>

        {/* Neomorphism Controls */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-neonPink">Neomorphism</h2>
          
          <div>
            <label className="block mb-2 text-white">Shadow Size (px): {neoShadow}</label>
            <input 
              type="range" 
              min="0" max="20" 
              value={neoShadow} 
              onChange={(e) => setNeoShadow(Number(e.target.value))}
              className="w-full accent-neonPink"
            />
          </div>

          <div className="flex items-center gap-3">
            <input 
              type="checkbox" 
              checked={neoInset} 
              onChange={(e) => setNeoInset(e.target.checked)}
              className="accent-neonPink w-5 h-5"
            />
            <label className="text-white">Inset (embossed)</label>
          </div>

          <div 
            className="preview-box mx-auto"
            style={{
              background: '#e0e0e0',
              boxShadow: `${neoInset ? 'inset ' : ''}${neoShadow}px ${neoShadow}px ${neoShadow*2}px #bebebe,
                          ${neoInset ? 'inset ' : ''}-${neoShadow}px -${neoShadow}px ${neoShadow*2}px #ffffff`,
            }}
          >
            Neo Preview
          </div>
        </div>
      </div>

      <button 
        onClick={generateCss}
        className="watch-btn mt-10 px-8 py-4 text-xl font-bold mx-auto block"
      >
        Generate CSS Snippet
      </button>

      {generatedCss && (
        <div className="mt-8">
          <h3 className="text-xl mb-4 text-neonCyan">Generated CSS (copy me!)</h3>
          <pre className="p-6 bg-black/40 rounded-2xl overflow-x-auto text-sm font-mono border border-neonCyan/30">
            {generatedCss}
          </pre>
        </div>
      )}
    </>
  );
}

export default App;
