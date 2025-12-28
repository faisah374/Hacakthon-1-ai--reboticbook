import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here

const config: Config = {
  title: 'AI/Spec-Driven Book on Physical AI & Humanoid Robotics',
  tagline: 'Understanding the system architecture of modern humanoid robotics',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // ✅ Vercel production URL
  url: 'https://physicalhumanoidaitextbook.vercel.app',

  // ✅ MUST be root for Vercel
  baseUrl: '/',

  // ❌ Removed GitHub Pages config (causes 404 on Vercel)
  // organizationName
  // projectName

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // ❌ editUrl removed
        },
        blog: {
          showReadingTime: true,
          // ❌ editUrl removed
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'AI/Spec-Driven Book on Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Humanoid Robotics Book Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book Content',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/faisah374',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Book Content',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/faisah374',
            },
            {
              label: 'Docusaurus Community',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/faisah374',
            },
          ],
        },
      ],
      copyright:
        `Copyright © ${new Date().getFullYear()} AI/Spec-Driven Humanoid Robotics Book. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

