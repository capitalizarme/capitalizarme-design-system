import React from 'react';
import { Logo } from '../core/Logo.jsx';
import { NavLink } from './NavLink.jsx';
import { Button } from '../core/Button.jsx';

/** Fixed 64px translucent header: logo, flat nav links, one pill CTA. */
export function SiteHeader({ links = [], cta, ctaHref = '#contact', assetBase = 'assets', fixed = true, style, ...rest }) {
  return (
    <header style={{
      position: fixed ? 'fixed' : 'relative', top: 0, left: 0, right: 0, zIndex: 50,
      height: 'var(--header-h)',
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(4px)',
      borderBottom: 'var(--hairline-subtle)',
      ...style,
    }} {...rest}>
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-8)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-10)' }}>
          <a href="#" style={{ display: 'block' }}><Logo height={26} basePath={assetBase + '/logo'} /></a>
          <nav>
            <ul style={{ display: 'flex', gap: 'var(--space-6)', listStyle: 'none', margin: 0, padding: 0 }}>
              {links.map((l) => <li key={l.label}><NavLink href={l.href}>{l.label}</NavLink></li>)}
            </ul>
          </nav>
        </div>
        {cta ? <Button href={ctaHref} size="sm">{cta}</Button> : null}
      </div>
    </header>
  );
}
