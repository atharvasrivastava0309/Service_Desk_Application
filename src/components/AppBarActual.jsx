import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'
import './AppBarActual.css'
import {Link} from 'react-router-dom'

const AppBarActual= ()=>{

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId)
        const offset = 67
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            })
        }
    }

    return(
        <>
        <AppBar position='fixed' className='Appbar'>
            <Container className='container'>
                <Toolbar>
                    <Box className='boxes'>
                        <Box className='leftItems'>
                            <Typography variant='h5' onClick={() => scrollToSection('hero')} className='brand-logo'>
                                TechSupport Pro
                            </Typography>
                            <MenuItem onClick={() => scrollToSection('features')}>
                                <Typography>
                                    Solutions
                                </Typography>                            
                            </MenuItem>
                            <MenuItem onClick={() => scrollToSection('testimonials')}>
                                <Typography>
                                    Success Stories
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => scrollToSection('pricing')}>
                                <Typography>
                                    Plans
                                </Typography>
                            </MenuItem>
                        </Box>
                        <Box className='rightItems'>
                            <MenuItem button='true' component={Link} to='/signIn'>
                                <Typography>
                                    Login
                                </Typography>
                            </MenuItem>
                            <MenuItem button='true' component={Link} to='/signUp' className='signup-btn'>
                                <Typography>
                                    Get Started
                                </Typography>
                            </MenuItem>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        </>
    )
}

export default AppBarActual
