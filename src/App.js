<div className="preview-box mb-4" 
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
  Preview Glass (move sliders!)
</div>

<div className="preview-box mb-4" 
  style={{
    background: '#e0e0e0', // light base for neo
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
  Preview Neo (toggle inset!)
</div>
