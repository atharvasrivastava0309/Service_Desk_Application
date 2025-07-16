import Card from '@mui/material/Card'
import { Typography, Button, Chip } from '@mui/material'
import { CheckCircle, Star } from '@mui/icons-material'
import './Pricing.css'

const Pricing = () => {
    return (
        <div className='pricing-container'>
            <Typography variant='h2' className='pricing-title'>
                Choose Your Plan
            </Typography>
            <Typography variant='h5' className='pricing-subtitle'>
                Scalable solutions for businesses of all sizes
            </Typography>

            <div className='pricing-cards'>
                <Card className='pricing-card starter'>
                    <div className='card-header'>
                        <Typography variant='h4' className='plan-name'>
                            Starter
                        </Typography>
                        <Typography variant='h3' className='plan-price'>
                            $29
                        </Typography>
                        <Typography variant='body2' className='plan-period'>
                            per month
                        </Typography>
                    </div>
                    <div className='card-features'>
                        <div className='feature-item'>
                            <CheckCircle className='check-icon' />
                            <Typography>Up to 500 tickets/month</Typography>
                        </div>
                        <div className='feature-item'>
                            <CheckCircle className='check-icon' />
                            <Typography>5 support agents</Typography>
                        </div>
                        <div className='feature-item'>
                            <CheckCircle className='check-icon' />
                            <Typography>Basic analytics</Typography>
                        </div>
                        <div className='feature-item'>
                            <CheckCircle className='check-icon' />
                            <Typography>Email support</Typography>
                        </div>
                    </div>
                    <Button variant="outlined" className='plan-button'>
                        Start Free Trial
                    </Button>
                </Card>

                <Card className='pricing-card professional'>
                    <div className='popular-badge'>
                        <Star className='star-icon' />
                        <Typography>Most Popular</Typography>
                    </div>
                    <div className='card-header'>
                        <Typography variant='h4' className='plan-name'>
                            Professional
                        </Typography>
                        <Typography variant='h3' className='plan-price'>
                            $79
                        </Typography>
                        <Typography variant='body2' className='plan-period'>
                            per month
                        </Typography>
                    </div>
                    <div className='card-features'>
                        <div className='feature-item'>
                            <CheckCircle className='check-icon' />
                            <Typography>Up to 2,000 tickets/month</Typography>
                        </div>
                        <div className='feature-item'>
                            <CheckCircle className='check-icon' />
                            <Typography>15 support agents</Typography>
                        </div>
                        <div className='feature-item'>
                            <CheckCircle className='check-icon' />
                            <Typography>Advanced analytics</Typography>
                        </div>
                        <div className='feature-item'>
                            <CheckCircle className='check-icon' />
                            <Typography>Priority support</Typography>
                        </div>
                        <div className='feature-item'>
                            <CheckCircle className='check-icon' />
                            <Typography>Custom integrations</Typography>
                        </div>
                    </div>
                    <Button variant="contained" className='plan-button popular'>
                        Get Started
                    </Button>
                </Card>

                <Card className='pricing-card enterprise'>
                    <div className='card-header'>
                        <Typography variant='h4' className='plan-name'>
                            Enterprise
                        </Typography>
                        <Typography variant='h3' className='plan-price'>
                            $199
                        </Typography>
                        <Typography variant='body2' className='plan-period'>
                            per month
                        </Typography>
                    </div>
                    <div className='card-features'>
                        <div className='feature-item'>
                            <CheckCircle className='check-icon' />
                            <Typography>Unlimited tickets</Typography>
                        </div>
                        <div className='feature-item'>
                            <CheckCircle className='check-icon' />
                            <Typography>Unlimited agents</Typography>
                        </div>
                        <div className='feature-item'>
                            <CheckCircle className='check-icon' />
                            <Typography>AI-powered insights</Typography>
                        </div>
                        <div className='feature-item'>
                            <CheckCircle className='check-icon' />
                            <Typography>24/7 phone support</Typography>
                        </div>
                        <div className='feature-item'>
                            <CheckCircle className='check-icon' />
                            <Typography>Custom development</Typography>
                        </div>
                        <div className='feature-item'>
                            <CheckCircle className='check-icon' />
                            <Typography>Dedicated account manager</Typography>
                        </div>
                    </div>
                    <Button variant="outlined" className='plan-button'>
                        Contact Sales
                    </Button>
                </Card>
            </div>
        </div>
    )
}

export default Pricing
