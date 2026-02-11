import React, { useState } from 'react';

function App() {
  const [glassBlur, setGlassBlur] = useState(12);
  const [glassOpacity, setGlassOpacity] = useState(0.25);
  const [glassBorderOpacity, setGlassBorderOpacity] = useState(0.18);
  const [glassColor, setGlassColor] = useState('#141432'); // default dark blueish

  const [neoShadow, setNeoShadow] = useState(6);
  const [neoInset, setNeoInset] = useState(false);
  const [neoColor, setNeoColor] = useState('#e0e0e0'); // default light gray

  const [generatedCss, setGeneratedCss] = useState('');

  const generateCss = () => {
    const glassCss = `
.glass-card {
  background: ${glassColor}${Math.round(glassOpacity * 255).toString(16).padStart(2, '0')};
  backdrop-filter: blur(${glassBlur}px);
  -webkit-backdrop-filter: blur(${glassBlur}px);
  border: 1px solid rgba(0, 240, 255, ${glassBorderOpacity});
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.45), inset 0 0 24px rgba(0,240,255,0.08);
  transition: all 0.4s ease;
}
.glass-card:hover {
  box-shadow: 0 16px 48px rgba(0,240,255,0.25), inset 0 0 32px rgba(0,240,255,0.12);
}
    `;

    const neoCss = `
.neo-card {
  background: ${neoColor};
  border-radius: 16px;
  box-shadow: ${neoInset ? 'inset ' : ''}${neoShadow}px ${neoShadow}px ${neoShadow*2}px #bebebe,
              ${neoInset ? 'inset ' : ''}-${neoShadow}px -${neoShadow}px ${neoShadow*2}px #ffffff;
  transition: all 0.3s ease;
}
    `;

    setGeneratedCss(`${glassCss}\n\n${neoCss}`);
  };

  return (
    <div className="generator-container p-6 max-w-4xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-8 text-center drop-shadow-lg">
        Glass & Neo Generator
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Glassmorphism */}
        <div className="space-y-5">
          <h2 className="text-xl font-semibold text-cyan-400">Glassmorphism</h2>

          <div className="space-y-3">
            <label className="block text-sm">Blur: {glassBlur}px</label>
            <input type="range" min="0" max="40" value={glassBlur} onChange={e => setGlassBlur(+e.target.value)} className="w-full accent-cyan-500" />

            <label className="block text-sm">Opacity: {glassOpacity.toFixed(2)}</label>
            <input type="range" min="0" max="0.6" step="0.01" value={glassOpacity} onChange={e => setGlassOpacity(+e.target.value)} className="w-full accent-cyan-500" />

            <label className="block text-sm">Border opacity: {glassBorderOpacity.toFixed(2)}</label>
            <input type="range" min="0" max="0.5" step="0.01" value={glassBorderOpacity} onChange={e => setGlassBorderOpacity(+e.target.value)} className="w-full accent-cyan-500" />

            <label className="block text-sm">Background color</label>
            <input type="color" value={glassColor} onChange={e => setGlassColor(e.target.value)} className="w-12 h-10 rounded border border-cyan-500/50" />
          </div>

          <div 
            className="preview-box rounded-2xl border border-cyan-500/30 shadow-xl"
            style={{
              background: `${glassColor}${Math.round(glassOpacity * 255).toString(16).padStart(2, '0')}`,
              backdropFilter: `blur(${glassBlur}px)`,
              WebkitBackdropFilter: `blur(${glassBlur}px)`,
            }}
          >
            Glass Preview
          </div>
        </div>

        {/* Neomorphism */}
        <div className="space-y-5">
          <h2 className="text-xl font-semibold text-pink-400">Neomorphism</h2>

          <div className="space-y-3">
            <label className="block text-sm">Shadow size: {neoShadow}px</label>
            <input type="range" min="1" max="20" value={neoShadow} onChange={e => setNeoShadow(+e.target.value)} className="w-full accent-pink-500" />

            <div className="flex items-center gap-3">
              <input type="checkbox" checked={neoInset} onChange={e => setNeoInset(e.target.checked)} className="accent-pink-500 w-5 h-5" />
              <label className="text-sm">Inset / embossed</label>
            </div>

            <label className="block text-sm">Base color</label>
            <input type="color" value={neoColor} onChange={e => setNeoColor(e.target.value)} className="w-12 h-10 rounded border border-pink-500/50" />
          </div>

          <div 
            className="preview-box rounded-xl shadow-2xl"
            style={{ background: neoColor, boxShadow: `${neoInset ? 'inset ' : ''}${neoShadow}px ${neoShadow}px ${neoShadow*2}px #bebebe, ${neoInset ? 'inset ' : ''}-${neoShadow}px -${neoShadow}px ${neoShadow*2}px #ffffff` }}
          >
            Neo Preview
          </div>
        </div>
      </div>

      <button 
        onClick={generateCss}
        className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-500 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 block mx-auto"
      >
        Generate CSS Snippet
      </button>

      {generatedCss && (
        <div className="mt-8">
          <h3 className="text-xl mb-3 text-cyan-300">Generated CSS – copy & paste</h3>
          <pre className="p-5 bg-black/40 rounded-2xl overflow-x-auto text-sm font-mono border border-cyan-500/30 whitespace-pre-wrap">
            {generatedCss}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
