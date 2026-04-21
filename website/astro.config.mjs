import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ansi-tui.com',
  integrations: [tailwind({ applyBaseStyles: false }), react(), sitemap()],
});
