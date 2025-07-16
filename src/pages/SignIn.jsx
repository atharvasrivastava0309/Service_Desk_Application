import Container from '@mui/material/Container'
import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'

const SignIN = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { user } = await signInWithEmailAndPassword(auth, formData.email, formData.password)
      const userDoc = await getDoc(doc(db, 'users', user.uid))
      const userProfile = userDoc.data().profile
      console.log('User logged in successfully:', user)
      if (userProfile === 'customer') {
        navigate(`/custLand?email=${formData.email}`)
      } else if (userProfile === 'administrator') {
        navigate('/adminLand')
      } else if (userProfile === 'worker') {
        navigate('/workerLand')
      }
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  const redirectHome = () => {
    navigate('/')
  }

  return (
    <>
     <Button 
       variant="outlined" 
       onClick={redirectHome}
       sx={{
         position: 'absolute',
         top: '20px',
         left: '20px',
         background: 'linear-gradient(45deg, #667eea, #764ba2)',
         color: 'white',
         border: 'none',
         '&:hover': {
           background: 'linear-gradient(45deg, #764ba2, #667eea)',
           border: 'none'
         }
       }}
     >
       ← Back to Home
     </Button>
     <Container component="main" maxWidth="xs">
       <CssBaseline />
       <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main', background: 'linear-gradient(45deg, #667eea, #764ba2)' }}>
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            T
          </Typography>
        </Avatar>
        <Typography component="h1" variant="h4" sx={{ 
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: 2
        }}>
          Welcome to TechSupport Pro
        </Typography>
        <Typography component="h2" variant="h6" sx={{ color: '#666', marginBottom: 3 }}>
          Sign in to your account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleInputChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#667eea',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#667eea',
                },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInputChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#667eea',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#667eea',
                },
              },
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              mt: 3, 
              mb: 2,
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              borderRadius: '25px',
              padding: '12px',
              fontSize: '1.1rem',
              fontWeight: '600',
              '&:hover': {
                background: 'linear-gradient(45deg, #764ba2, #667eea)',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)'
              }
            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" sx={{ color: '#667eea' }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signUp" variant="body2" sx={{ color: '#667eea' }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    </>
  )
}

export default SignIN
