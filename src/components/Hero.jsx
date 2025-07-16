import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Typography, Button } from '@mui/material'
import deskImg from '../assets/call-center.png'
import './Hero.css'

const Hero= ()=>{
    return(
        <Card className='Hero'>
            <CardContent>
                <div className='hero-content'>
                    <div className='hero-text'>
                        <Typography variant='h2' className='hero-title'>
                            Smarter Support for Modern Teams
                        </Typography>
                        <Typography variant='h5' className='hero-subtitle'>
                            Created by Atharva Srivastava – The next generation helpdesk for fast-moving businesses
                        </Typography>
                        <Typography variant='body1' className='hero-description'>
                            Automate, analyze, and resolve with ease. TechSupport Pro brings together powerful tools and a beautiful interface to help your team deliver outstanding service every time.
                        </Typography>
                        <div className='hero-buttons'>
                            <Button variant="contained" className='primary-btn'>
                                Start Free Trial
                            </Button>
                            <Button variant="outlined" className='secondary-btn'>
                                Watch Demo
                            </Button>
                        </div>
                    </div>
                    <div className='deskImage'>
                        <img src={deskImg} alt='TechSupport Pro Platform' className='theImage' />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Hero
