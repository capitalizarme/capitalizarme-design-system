import React from 'react';
import { Logo } from '../core/Logo.jsx';
import { NavLink } from './NavLink.jsx';

const czDefaultColumns = [
  { title: 'Invierte', links: ['Explorar inversiones'] },
  { title: 'Aprende', links: ['Primeros pasos de inversión'] },
  { title: 'Ayuda y soporte', links: ['Centro de ayuda'] },
  { title: 'Comunidad', links: ['Comunidad'] },
  { title: 'Síguenos', links: ['Facebook', 'Instagram', 'Youtube', 'Twitter', 'Linkedin'] },
];

const czLegal = 'Todas las rentabilidades y retornos mostrados en la página son referenciales, los rendimientos pasados no garantizan retornos futuros.';

/** 5-column footer with the compliance disclaimer. Carry it onto every page, not just the homepage. */
export function SiteFooter({ columns = czDefaultColumns, legal = czLegal, copyright = '©Capitalizarme 2026 • Condiciones de uso • Políticas de privacidad', address = 'Hendaya 60, OF. 901 Las Condes.', assetBase = 'assets', style, ...rest }) {
  return (
    <footer style={{ borderTop: 'var(--hairline-subtle)', paddingBlock: 'var(--space-12)', background: 'var(--surface)', ...style }} {...rest}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--space-8)' }}>
          {columns.map((col) => (
            <div key={col.title}>
              <p style={{ margin: '0 0 var(--space-3)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--fg)' }}>{col.title}</p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 'var(--space-2)' }}>
                {col.links.map((link) => <li key={link}><NavLink href="#">{link}</NavLink></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-6)', borderTop: 'var(--hairline)', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-6)' }}>
          <Logo height={24} basePath={assetBase + '/logo'} />
          <div style={{ display: 'grid', gap: 'var(--space-1)', maxWidth: 640, fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
            <p style={{ margin: 0 }}>{legal}</p>
            <p style={{ margin: 0 }}>{copyright}</p>
            <p style={{ margin: 0 }}>{address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
