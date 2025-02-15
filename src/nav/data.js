import { ChartLine, FileChartColumn, FolderDot, HardDrive, Home, Layers2, LayoutDashboard, Settings, Settings2, SquareCheck, User2 } from "lucide-react"

const sidebarItems = [
    { id: "home", icon: Home },
    { id: "performance", icon: ChartLine },
    { id: "settings", icon: Settings },
    { id: "stack", icon: Layers2 },
    { id: "people", icon: User2 },
    { id: "downloads", icon: HardDrive },
    { id: "stats", icon: FileChartColumn },
];

const collapsibleItems = [
    {
        title: 'Home',
        icon: Home,
        links: [
            {
                title: 'Dummy Link',
                href: '#'
            },
        ]
    },
    {
        title: 'Dashboard',
        icon: LayoutDashboard,
        links: [
            {
                title: 'Dummy Link',
                href: '#'
            },
        ]
    },
    {
        title: 'Project',
        icon: FolderDot,
        links: [
            {
                title: 'Dummy Link',
                href: '#'
            },
        ]
    },
    {
        title: 'Tasks',
        icon: SquareCheck,
        links: [
            {
                title: 'Dummy Link',
                href: '#'
            },
        ]
    },
    {
        title: 'Settings',
        icon: Settings2,
        links: [
            {
                title: 'Profile',
                href: '/profile'
            },
            {
                title: 'Details',
                href: '/details'
            },
            {
                title: 'Integration',
                href: '/integration'
            },
            {
                title: 'Security',
                href: '/security'
            },
            {
                title: 'Billing',
                href: '/billing'
            },
        ]
    },
]

// export default collapsibleItems
export {sidebarItems, collapsibleItems}