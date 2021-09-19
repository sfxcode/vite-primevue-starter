export const navigationMenu = [
    {
        label: 'Home',
        items: [{
            label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'
        }]
    },
    {
        label: 'UI / UX', icon: 'pi pi-fw pi-clone',
        items: [
            {label: 'PrimeVue', icon: 'pi pi-fw pi-user-edit', to: '/elements/input'},
            {label: 'Tailwind', icon: 'pi pi-fw pi-user-edit', to: '/ui/tailwind'},
            {label: 'Icons', icon: 'pi pi-fw pi-calendar', to: '/ui/icons'},
        ]
    },
    {
        label: 'Pinia Store',
        items: [
            {label: 'Counter Demo', icon: 'pi pi-fw pi-home', to: '/store/store'},
            {label: 'Theme Settings', icon: 'pi pi-fw pi-home', to: '/store/theme'},
        ]
    },
    {
        label: 'Markdown',
        items: [{
            label: 'Sample Page', icon: 'pi pi-fw pi-home', to: '/markdown/hello'
        }]
    },
]
