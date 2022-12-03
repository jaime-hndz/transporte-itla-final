import HomeIcon from '@mui/icons-material/Home';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaidIcon from '@mui/icons-material/Paid';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import MapIcon from '@mui/icons-material/Map';

export const StudentOptions = [
    {
        text: 'Inicio',
        path: '/',
        icon: <HomeIcon />,
        important: true
    },
    {
        text: 'Ver solicitudes',
        path: '/solicitudes',
        icon: <ConfirmationNumberIcon />,
        important: true

    },
    {
        text: 'Tickets Reservados',
        path: '/tickets',
        icon: <LocalActivityIcon />,
        important: true

    },
    {
        text: 'Formas de pago',
        path: '/formas',
        icon: <PointOfSaleIcon />,
        important: false

    },  
    {
        text: 'Rutas',
        path: '/rutas',
        icon: <MapIcon />,
        important: true

    },  
    {
        text: 'Horarios',
        path: '/horarios',
        icon: <AccessTimeFilledIcon />,
        important: false

    },
    {
        text: 'Saldo',
        path: '/saldo',
        icon: <PaidIcon />,
        important: false

    }  
  
]

export const AdminOptions = [
    {
        text: 'Inicio',
        path: '/',
        icon: <HomeIcon />,
        important: true

    },
    {
        text: 'Administrar viajes',
        path: '/administrar',
        icon: <AdminPanelSettingsIcon />,
        important: true

    },
  
]
