// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconClipboardCheck, IconChartLine, IconBook } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconClipboardCheck,
    IconChartLine,
    IconBook
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-logs',
            title: 'Logs',
            type: 'item',
            url: '/utils/util-logs',
            icon: icons.IconClipboardCheck,
            breadcrumbs: false
        },
        {
            id: 'util-statistics',
            title: 'Statistics',
            type: 'item',
            url: '/utils/util-statistics',
            icon: icons.IconChartLine,
            breadcrumbs: false
        },
        {
            id: 'util-documentation',
            title: 'Documentation',
            type: 'item',
            url: '/utils/util-documentation',
            icon: icons.IconBook,
            breadcrumbs: false
        }
    ]
};

export default utilities;
