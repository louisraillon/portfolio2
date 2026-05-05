'use client'

import { useEffect, useState } from 'react'

type Token = { text: string; color: string }
type Line = { tokens: Token[] }

const LINES: Line[] = [
  { tokens: [{ text: '// initialize api server', color: '#3A3C52' }] },
  { tokens: [{ text: 'const ', color: '#00D084' }, { text: 'app', color: '#E2E4EE' }, { text: ' = ', color: '#3A3C52' }, { text: 'express()', color: '#7DD3FC' }] },
  { tokens: [] },
  { tokens: [{ text: 'app', color: '#E2E4EE' }, { text: '.use(', color: '#3A3C52' }, { text: 'cors()', color: '#7DD3FC' }, { text: ', ', color: '#3A3C52' }, { text: 'json()', color: '#7DD3FC' }, { text: ')', color: '#3A3C52' }] },
  { tokens: [] },
  { tokens: [{ text: 'app', color: '#E2E4EE' }, { text: '.get(', color: '#3A3C52' }, { text: "'/api/projects'", color: '#F59E0B' }, { text: ', async (', color: '#3A3C52' }, { text: 'req, res', color: '#E2E4EE' }, { text: ') => {', color: '#3A3C52' }] },
  { tokens: [{ text: '  const ', color: '#00D084' }, { text: 'rows', color: '#E2E4EE' }, { text: ' = await ', color: '#3A3C52' }, { text: 'db', color: '#E2E4EE' }, { text: '.query(', color: '#3A3C52' }] },
  { tokens: [{ text: "    'SELECT * FROM projects'", color: '#F59E0B' }] },
  { tokens: [{ text: '  )', color: '#3A3C52' }] },
  { tokens: [{ text: '  res', color: '#E2E4EE' }, { text: '.json({ ', color: '#3A3C52' }, { text: 'data', color: '#E2E4EE' }, { text: ': ', color: '#3A3C52' }, { text: 'rows', color: '#E2E4EE' }, { text: ' })', color: '#3A3C52' }] },
  { tokens: [{ text: '})', color: '#3A3C52' }] },
  { tokens: [] },
  { tokens: [{ text: 'app', color: '#E2E4EE' }, { text: '.listen(', color: '#3A3C52' }, { text: '3000', color: '#F59E0B' }, { text: ', () =>', color: '#3A3C52' }] },
  { tokens: [{ text: "  console", color: '#E2E4EE' }, { text: '.log(', color: '#3A3C52' }, { text: "'> server ready on :3000'", color: '#00D084' }, { text: ')', color: '#3A3C52' }] },
  { tokens: [{ text: ')', color: '#3A3C52' }] },
]

export default function CodeConsole() {
  const [visible, setVisible] = useState(0)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    if (visible < LINES.length) {
      const delay = LINES[visible].tokens.length === 0 ? 80 : 160
      const t = setTimeout(() => setVisible((v) => v + 1), delay)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setVisible(0), 2800)
    return () => clearTimeout(t)
  }, [visible])

  useEffect(() => {
    const t = setInterval(() => setBlink((v) => !v), 500)
    return () => clearInterval(t)
  }, [])

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '38rem',
        margin: '0 auto',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        background: '#0A0A14',
        fontFamily: 'var(--font-mono), monospace',
        fontSize: '12.5px',
        lineHeight: '1.75',
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: '#13131F',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '0.55rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
        <span style={{ marginLeft: 'auto', color: '#2A2C3E', fontSize: '10px' }}>server.js</span>
      </div>

      {/* Code area */}
      <div style={{ padding: '1.1rem 1.25rem', minHeight: '18rem' }}>
        {LINES.slice(0, visible).map((line, i) => (
          <div key={i} style={{ display: 'flex', whiteSpace: 'pre' }}>
            <span
              style={{
                color: '#2A2C3E',
                userSelect: 'none',
                minWidth: '1.8rem',
                marginRight: '1.2rem',
                textAlign: 'right',
                fontSize: '11px',
                flexShrink: 0,
              }}
            >
              {i + 1}
            </span>
            <span>
              {line.tokens.map((tok, j) => (
                <span key={j} style={{ color: tok.color }}>{tok.text}</span>
              ))}
              {i === visible - 1 && (
                <span style={{ color: '#00D084', opacity: blink ? 1 : 0 }}>▋</span>
              )}
            </span>
          </div>
        ))}
        {visible === 0 && (
          <div style={{ display: 'flex' }}>
            <span style={{ minWidth: '1.8rem', marginRight: '1.2rem' }} />
            <span style={{ color: '#00D084', opacity: blink ? 1 : 0 }}>▋</span>
          </div>
        )}
      </div>
    </div>
  )
}
