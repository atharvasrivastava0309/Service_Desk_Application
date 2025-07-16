import { useEffect, useState } from 'react'
import { db } from '../../firebase/firebaseConfig'
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { useLocation } from 'react-router-dom'
import { Box, Typography, Card, CardContent, Button, Chip, Stack } from '@mui/material'
import './ViewTicket.css'

const statusColor = (status) => {
    switch (status) {
        case 'Pending': return 'warning';
        case 'Resolved': return 'success';
        case 'In Progress': return 'info';
        default: return 'default';
    }
}

const ViewTicket = () => {
    const [tickets, setTickets] = useState([])
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const userEmail = searchParams.get('email')

    useEffect(() => {
        const fetchTickets = async () => {
            const q = query(collection(db, 'tickets'), where('email', '==', userEmail))
            const querySnapshot = await getDocs(q)
            const ticketsArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setTickets(ticketsArray)
        }

        fetchTickets()
    }, [userEmail])

    const handleDelete = async (ticketId) => {
        try {
            await deleteDoc(doc(db, 'tickets', ticketId))
            setTickets(tickets.filter(ticket => ticket.id !== ticketId))
            console.log('Ticket deleted successfully:', ticketId)
        } catch (error) {
            console.error('Error deleting ticket:', error)
        }
    }

    return (
        <Box component="section" className="ticket-list-section">
            <Typography variant='h4' className='ticket-list-title'>
                My Tickets
            </Typography>
            {tickets.length === 0 ? (
                <Typography className='no-tickets'>No tickets found.</Typography>
            ) : (
                <Stack spacing={3} className='ticket-list-stack'>
                    {tickets.map((ticket) => (
                        <Card key={ticket.id} className='ticket-list-card' elevation={4}>
                            <CardContent>
                                <Typography variant='h6' className='ticket-list-desc'>
                                    {ticket.description}
                                </Typography>
                                <Stack direction="row" spacing={2} sx={{ mt: 1, mb: 1 }}>
                                    <Chip label={`Category: ${ticket.category}`} color="primary" variant="outlined" />
                                    <Chip label={`Priority: ${ticket.priority}`} color="secondary" variant="outlined" />
                                    <Chip label={ticket.status} color={statusColor(ticket.status)} variant="filled" />
                                </Stack>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleDelete(ticket.id)}
                                    sx={{ mt: 1, borderRadius: '20px', fontWeight: 600 }}
                                >
                                    Delete Ticket
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            )}
        </Box>
    )
}

export default ViewTicket
