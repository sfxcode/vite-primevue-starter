export const navigationMenu = [
  {
    label: 'Home',
    items: [{
      label: 'Dashboard',
      icon: 'pi pi-fw pi-home',
      to: '/',
    }],
  },
  {
    label: 'PrimeVue',
    icon: 'pi pi-fw pi-clone',
    items: [
      { label: 'Table', icon: 'pi pi-fw pi-user-edit', to: '/elements/table' },
      { label: 'Validation', icon: 'pi pi-fw pi-user-edit', to: '/elements/validation' },
    ],
  },
  {
    label: 'UI / UX',
    icon: 'pi pi-fw pi-clone',
    items: [
      { label: 'UnoCSS', icon: 'pi pi-fw pi-box', to: '/ui/uno' },
      { label: 'Tailwind (UnoCSS)', icon: 'pi pi-fw pi-box', to: '/ui/tailwind' },
      { label: 'Icons', icon: 'pi pi-fw pi-calendar', to: '/ui/icons' },
    ],
  },
  {
    label: 'Pinia Store',
    items: [
      { label: 'Store Settings', icon: 'pi pi-fw pi-th-large', to: '/store/store' },
    ],
  },
  {
    label: 'Markdown',
    items: [{
      label: 'Sample Page',
      icon: 'pi pi-fw pi-star',
      to: '/markdown/hello',
    }],
  },
  {
    label: 'Admin',
    items: [{
      label: 'Admin Page',
      icon: 'pi pi-fw pi-sign-in',
      to: '/admin',
    }],
  },
]
