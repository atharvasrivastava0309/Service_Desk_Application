import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { Typography, Button } from '@mui/material'
import RaiseTicket from './RaiseTicket'
import ViewTicket from './ViewTicket'
import './CustomerLanding.css'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig'

const CustomerLanding = () => {
    const navigate = useNavigate()

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId)
        const offset = 60
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            })
        }
    }

    const handleHome = () => {
        navigate('/')
    }

    const handleLogout = async () => {
        await signOut(auth)
        navigate('/')
    }

    return (
        <>
            <AppBar position='fixed' className='AppbarCust'>
                <Container className='containerCust'>
                    <Toolbar>
                        <Box className='boxesCust'>
                            <Typography 
                                variant='h5' 
                                onClick={handleHome} 
                                className='brand-logo-cust nav-link'
                                style={{ cursor: 'pointer' }}
                            >
                                TechSupport Pro
                            </Typography>
                            <MenuItem onClick={() => scrollToSection('viewTicket')} className='nav-link'>
                                <Typography>
                                    My Tickets
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => scrollToSection('newTicket')} className='nav-link'>
                                <Typography>
                                    Raise Ticket
                                </Typography>
                            </MenuItem>
                            <Button onClick={handleHome} className='nav-link home-btn' variant="text">
                                Home
                            </Button>
                            <Button onClick={handleLogout} className='nav-link logout-btn' variant="outlined">
                                Logout
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <div className='cust-content'>
                <section id='viewTicket'>
                    <ViewTicket />
                </section>
                <section id='newTicket' className='newTicket'>
                    <RaiseTicket />
                </section>
            </div>
        </>
    )
}

export default CustomerLanding
