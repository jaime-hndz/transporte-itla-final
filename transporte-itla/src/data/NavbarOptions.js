import HomeIcon from '@mui/icons-material/Home';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
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
        icon: <AccessTimeIcon />
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
