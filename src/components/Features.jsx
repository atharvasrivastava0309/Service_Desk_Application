import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Typography, Grid } from '@mui/material'
import './Features.css'
import ticketImg from '../assets/flat-design-person-making-complain.png'
import trackImg from '../assets/landing-page-template.png'
import priorityImg from '../assets/freepik-export-20240703124357i6VW.png'
import taskAssign from '../assets/giant-check-list.png'
import kanban from '../assets/kanban-method-concept-illustration.png'
import resolve from '../assets/Wavy_Bus-06_Single-09.jpg'
import number1 from '../assets/10317227_27872.jpg'
import assign from '../assets/6596995_3333237.jpg'

const Features = () => {
    return (
        <Card className='featureSection'>
            <CardContent>
                <Typography variant='h2' className='heading'>
                    Powered by Innovation
                </Typography>

                <Typography variant='h4' className='subheading'>
                    Comprehensive Support Ecosystem for Modern Businesses
                </Typography>
                <br></br>
                <br></br>
                
                <div className='customer-section'>
                    <Typography variant='h3' className='section-title'>For Customers</Typography>
                    <Typography variant='h6' className='section-subtitle'>
                        Experience seamless support with our intelligent ticketing system
                    </Typography>

                    <Grid container direction='column' spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Grid container spacing={3} alignItems="center" className='feature-card'>
                                <Grid item>
                                    <img src={ticketImg} alt='Smart Ticketing' className='feature-img'
                                        style={{ width: '250px', height: '200px' }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6' className='feature-title'>Smart Ticket Creation</Typography>
                                    <Typography className='feature-desc'>AI-powered ticket categorization and priority assignment for faster resolution</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid container spacing={3} alignItems="center" className='feature-card'>
                                <Grid item>
                                    <img src={trackImg} alt='Real-time Tracking' className='feature-img'
                                        style={{ width: '250px', height: '200px' }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6' className='feature-title'>Real-time Progress Tracking</Typography>
                                    <Typography className='feature-desc'>Live updates and notifications keep you informed every step of the way</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid container spacing={3} alignItems="center" className='feature-card'>
                                <Grid item>
                                    <img src={priorityImg} alt='Priority Management' className='feature-img'
                                        style={{ width: '250px', height: '200px' }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6' className='feature-title'>Intelligent Priority System</Typography>
                                    <Typography className='feature-desc'>Advanced algorithms ensure critical issues are resolved within 4 hours</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>

                <div className='admin-section'>
                    <Typography variant='h3' className='section-title'>For Administrators</Typography>
                    <Typography variant='h6' className='section-subtitle'>
                        Powerful management tools designed by Atharva Srivastava
                    </Typography>

                    <Grid container direction='column' spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Grid container spacing={3} justifyContent="flex-end" alignItems="center" className='feature-card'>
                                <Grid item>
                                    <Typography align="right" variant='h6' className='feature-title'>One-Click Task Assignment</Typography>
                                    <Typography align="right" className='feature-desc'>Intelligent routing system matches tickets to the best available agents</Typography>
                                </Grid>
                                <Grid item>
                                    <img src={taskAssign} alt='Task Assignment' className='feature-img'
                                        style={{ width: '250px', height: '200px' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid container spacing={3} justifyContent="flex-end" alignItems="center" className='feature-card'>
                                <Grid item>
                                    <Typography align="right" variant='h6' className='feature-title'>Advanced Kanban Dashboard</Typography>
                                    <Typography align="right" className='feature-desc'>Visual workflow management with drag-and-drop functionality</Typography>
                                </Grid>
                                <Grid item>
                                    <img src={kanban} alt='Kanban Board' className='feature-img'
                                        style={{ width: '250px', height: '200px' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid container spacing={3} justifyContent="flex-end" alignItems="center" className='feature-card'>
                                <Grid item>
                                    <Typography align="right" variant='h6' className='feature-title'>Automated Resolution</Typography>
                                    <Typography align="right" className='feature-desc'>Smart completion tracking with performance analytics</Typography>
                                </Grid>
                                <Grid item>
                                    <img src={resolve} alt='Resolution' className='feature-img'
                                        style={{ width: '250px', height: '200px' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>

                <div className='worker-section'>
                    <Typography variant='h3' className='section-title'>For Support Agents</Typography>
                    <Typography variant='h6' className='section-subtitle'>
                        Enhanced productivity tools for exceptional service delivery
                    </Typography>

                    <Grid container direction='column' spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Grid container spacing={3} alignItems="center" className='feature-card'>
                                <Grid item>
                                    <img src={number1} alt='Expert Team' className='feature-img'
                                        style={{ width: '250px', height: '200px' }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6' className='feature-title'>Expert Team Management</Typography>
                                    <Typography className='feature-desc'>Access to certified professionals with specialized domain expertise</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid container spacing={3} alignItems="center" className='feature-card'>
                                <Grid item>
                                    <img src={assign} alt='Task Management' className='feature-img'
                                        style={{ width: '250px', height: '200px' }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6' className='feature-title'>Streamlined Task Management</Typography>
                                    <Typography className='feature-desc'>Intuitive interface for efficient ticket handling and resolution</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>

            </CardContent>
        </Card>
    )
}

export default Features
