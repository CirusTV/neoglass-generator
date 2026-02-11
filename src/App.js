import React, { useState } from 'react';
import './App.css';

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
}
    `;

    const neoCss = `
.neo-card {
  background: #e0e0e0; /* or your dark bg for inverted */
  border-radius: 12px;
  box-shadow: ${neoInset ? 'inset ' : ''}${neoShadow}px ${neoShadow}px ${neoShadow*2}px #bebebe,
              ${neoInset ? 'inset ' : ''}-${neoShadow}px -${neoShadow}px ${neoShadow*2}px #ffffff;
}
    `;

    setGeneratedCss(`${glassCss}\n\n${neoCss}`);
  };

  return (
    <div class="generator-container">
      <h1 class="text-3xl font-bold mb-8 text-white text-shadow-neon">Glassmorphism & Neomorphism Generator</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl mb-4">Glassmorphism</h2>
          <label>Blur (px): {glassBlur}</label>
          <input type="range" min="0" max="50" value={glassBlur} onChange={(e) => setGlassBlur(e.target.value)} class="w-full mb-4" />

          <label>Background Opacity: {glassOpacity}</label>
          <input type="range" min="0" max="1" step="0.01" value={glassOpacity} onChange={(e) => setGlassOpacity(e.target.value)} class="w-full mb-4" />

          <label>Border Opacity: {glassBorderOpacity}</label>
          <input type="range" min="0" max="1" step="0.01" value={glassBorderOpacity} onChange={(e) => setGlassBorderOpacity(e.target.value)} class="w-full mb-4" />

          <div class="preview-box glass-card mb-4">Preview Glass</div>
        </div>

        <div>
          <h2 class="text-2xl mb-4">Neomorphism</h2>
          <label>Shadow Size (px): {neoShadow}</label>
          <input type="range" min="0" max="20" value={neoShadow} onChange={(e) => setNeoShadow(e.target.value)} class="w-full mb-4" />

          <label>Inset (embossed):</label>
          <input type="checkbox" checked={neoInset} onChange={(e) => setNeoInset(e.target.checked)} class="mb-4" />

          <div class="preview-box neo-card mb-4">Preview Neo</div>
        </div>
      </div>

      <button onClick={generateCss} class="watch-btn mt-8">Generate CSS</button>

      {generatedCss && (
        <pre class="mt-4 p-4 bg-rgba(20,20,50,0.6) rounded-2xl overflow-auto">
          {generatedCss}
        </pre>
      )}
    </div>
  );
}

export default App;
