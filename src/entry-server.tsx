import { renderToString } from 'react-dom/server';

import { ThemeProvider } from './context/ThemeContext';
import App from './App';

/**
 * Server-only render used by scripts/prerender.mjs to bake real HTML into
 * dist/index.html at build time. Not part of the client bundle — main.tsx
 * still does a normal client-side `createRoot().render()` on top of this,
 * so there's no hydration to keep in sync, just a first-paint upgrade.
 */
export function render() {
  return renderToString(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
}
