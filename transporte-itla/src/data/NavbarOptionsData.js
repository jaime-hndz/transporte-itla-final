import HomeIcon from '@mui/icons-material/Home';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaidIcon from '@mui/icons-material/Paid';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export const StudentOptions = [
    {
        text: 'Inicio',
        path: '/',
        icon: <HomeIcon />
    },
    {
        text: 'Ver solicitudes',
        path: '/solicitudes',
        icon: <ConfirmationNumberIcon />
    },
    {
        text: 'Tickets Reservados',
        path: '/tickets',
        icon: <LocalActivityIcon />
    },
    {
        text: 'Formas de pago',
        path: '/formas',
        icon: <PointOfSaleIcon />
    },    
    {
        text: 'Horarios',
        path: '/horarios',
        icon: <AccessTimeFilledIcon />
    },
    {
        text: 'Saldo',
        path: '/saldo',
        icon: <PaidIcon />
    }  
  
]

export const AdminOptions = [
    {
        text: 'Inicio',
        path: '/',
        icon: <HomeIcon />
    },
    {
        text: 'Administrar viajes',
        path: '/administrar',
        icon: <AdminPanelSettingsIcon />
    },
  
]
