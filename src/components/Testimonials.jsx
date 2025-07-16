import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Rating } from '@mui/material'
import './Testimonials.css'
import img1 from '../assets/testimonial1.webp'
import img2 from '../assets/testimonial2.avif'
import img3 from '../assets/testimonial3.jfif'

const Testimonials = () => {
    return (
        <div className='testimonials-container'>
            <Typography variant='h2' className='testimonials-title'>
                What Our Users Say
            </Typography>
            <Typography variant='h5' className='testimonials-subtitle'>
                Real feedback from real teams
            </Typography>
            
            <div className='topOrder'>
                <Card sx={{ maxWidth: 345 }} className='testimonialSection'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={img1}
                        title="Aarav Patel - Head of IT"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='testimonial-name'>
                            Aarav Patel
                        </Typography>
                        <Typography variant="body2" className='testimonial-role'>
                            Head of IT, NextGen Solutions
                        </Typography>
                        <Rating value={5} readOnly className='testimonial-rating' />
                        <Typography variant="body1" className='testimonial-text'>
                            "We switched to TechSupport Pro and our ticket resolution time dropped by half. The interface is intuitive and our team loves it!"
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 345 }} className='testimonialSection'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={img2}
                        title="Priya Sharma - Operations Lead"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='testimonial-name'>
                            Priya Sharma
                        </Typography>
                        <Typography variant="body2" className='testimonial-role'>
                            Operations Lead, UrbanDesk
                        </Typography>
                        <Rating value={5} readOnly className='testimonial-rating' />
                        <Typography variant="body1" className='testimonial-text'>
                            "The automation features are a game changer. We’ve never had such clear visibility into our support workflow."
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 345 }} className='testimonialSection'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={img3}
                        title="Rohan Mehta - Customer Success Manager"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='testimonial-name'>
                            Rohan Mehta
                        </Typography>
                        <Typography variant="body2" className='testimonial-role'>
                            Customer Success Manager, Cloudify
                        </Typography>
                        <Rating value={5} readOnly className='testimonial-rating' />
                        <Typography variant="body1" className='testimonial-text'>
                            "Our clients noticed the difference immediately. TechSupport Pro makes it easy to keep everyone in the loop."
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Testimonials
