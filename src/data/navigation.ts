export const navigation = {
  main: [
    {
      label: 'Leistungen',
      href: '/leistungen/',
      children: [
        { label: 'Gardinen & Vorhänge', href: '/leistungen/gardinen/' },
        { label: 'Bodenbeläge', href: '/leistungen/bodenbelaege/' },
        { label: 'Sonnenschutz', href: '/leistungen/sonnenschutz/' },
        { label: 'Insektenschutz', href: '/leistungen/insektenschutz/' },
      ],
    },
    { label: 'Referenzen', href: '/referenzen/' },
    { label: 'Partner', href: '/partner/' },
    { label: 'Jobs', href: '/jobs/' },
  ],
  secondary: [
    { label: 'Impressum', href: '/impressum/' },
    { label: 'Datenschutz', href: '/datenschutz/' },
  ],
} as const;
