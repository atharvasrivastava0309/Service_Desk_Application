import { useState } from 'react'
import { db } from '../../firebase/firebaseConfig.js'
import { doc, setDoc } from 'firebase/firestore'
import { useLocation } from 'react-router-dom'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Card, CardContent, Snackbar, Alert } from '@mui/material'
import './RaiseTicket.css'

const RaiseTicket = () => {
    const [ticket, setTicket] = useState({
        category: '',
        priority: '',
        description: ''
    })
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const userEmail = searchParams.get('email')

    const [priorityDisp, setPriorityDisp] = useState('')
    const [categoryDisp, setCategoryDisp] = useState('')
    const [open, setOpen] = useState(false)

    const handleChange = (event) => {
        setCategoryDisp(event.target.value)
        setTicket({ ...ticket, category: event.target.value })
    }

    const handlePriorityChange = (event) => {
        setPriorityDisp(event.target.value)
        setTicket({ ...ticket, priority: event.target.value })
    }

    const handleDescriptionChange = (event) => {
        setTicket({ ...ticket, description: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await setDoc(doc(db, 'tickets', Date.now().toString()), {
                category: ticket.category,
                priority: ticket.priority,
                description: ticket.description,
                email: userEmail,
                status: 'Pending'
            })
            setTicket({ category: '', priority: '', description: '' })
            setPriorityDisp('')
            setCategoryDisp('')
            setOpen(true)
            console.log('Ticket submitted successfully:', ticket)
        } catch (error) {
            console.error('Error adding ticket to Firestore:', error)
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return
        setOpen(false)
    }

    return (
        <>
        <Card className='ticket-card' elevation={6}>
            <CardContent>
                <Typography variant='h5' className='ticket-title' gutterBottom>
                    Raise a New Ticket
                </Typography>
                <form onSubmit={handleSubmit} className='ticket-form'>
                    <TextField
                        id="filled-basic"
                        label="Describe the issue you are facing..."
                        multiline
                        maxRows={4}
                        variant="filled"
                        className='description'
                        sx={{ m: 1, width: '100%' }}
                        value={ticket.description}
                        onChange={handleDescriptionChange}
                        required
                    />
                    <Box className='selectors' sx={{ mt: 2, mb: 2 }}>
                        <FormControl fullWidth sx={{ mr: 2 }}>
                            <InputLabel id="category-label">Category</InputLabel>
                            <Select
                                labelId="category-label"
                                id="category-select"
                                value={categoryDisp}
                                label="Category"
                                onChange={handleChange}
                                required
                            >
                                <MenuItem value="Electrical">Electrical</MenuItem>
                                <MenuItem value="Plumbing">Plumbing</MenuItem>
                                <MenuItem value="Carpentry">Carpentry</MenuItem>
                                <MenuItem value="Mason">Mason</MenuItem>
                                <MenuItem value="Gas">Gas</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="priority-label">Priority</InputLabel>
                            <Select
                                labelId="priority-label"
                                id="priority-select"
                                value={priorityDisp}
                                label="Priority"
                                onChange={handlePriorityChange}
                                required
                            >
                                <MenuItem value="Urgent">Urgent (immediate dispatch)</MenuItem>
                                <MenuItem value="High">High (resolves in 1 hr)</MenuItem>
                                <MenuItem value="Medium">Medium (resolves in 24 hr)</MenuItem>
                                <MenuItem value="Low">Low (resolves in 48 hr)</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Button 
                        type="submit" 
                        className='ticket-submit-btn'
                        variant="contained"
                        sx={{
                            background: 'linear-gradient(45deg, #667eea, #764ba2)',
                            color: 'white',
                            borderRadius: '25px',
                            fontWeight: 600,
                            fontSize: '1rem',
                            padding: '10px 30px',
                            mt: 2,
                            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.2)',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #764ba2, #667eea)',
                                boxShadow: '0 6px 20px rgba(102, 126, 234, 0.3)'
                            }
                        }}
                    >
                        Submit Ticket
                    </Button>
                </form>
            </CardContent>
        </Card>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Ticket submitted successfully!
            </Alert>
        </Snackbar>
        </>
    )
}

export default RaiseTicket
