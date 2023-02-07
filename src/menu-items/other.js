// assets
import { IconBrandChrome, IconHelp, IconCash, IconSettings } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp, IconCash, IconSettings };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'billing-page',
            title: 'Billing',
            type: 'item',
            url: '/billing',
            icon: icons.IconCash,
            breadcrumbs: false
        },
        {
            id: 'settings',
            title: 'Settings',
            type: 'item',
            url: '/settings',
            icon: icons.IconSettings,
            external: true,
            target: true
        }
    ]
};

export default other;
