import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
    Link as MuiLink,
} from '@mui/material'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <Container maxWidth="sm" sx={{ mt: 8, mb: 6 }}>
            <Box
                sx={{
                    boxShadow: 3,
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: 'background.paper',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 3, textAlign: 'center' }}
                >
                    Create Account
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Full Name" required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email Address" type="email" required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Password" type="password" required />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth size="large">
                            Sign Up
                        </Button>
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                        <Typography variant="body2">
                            Already have an account?{' '}
                            <MuiLink component={Link} to="/login" underline="hover">
                                Log in here
                            </MuiLink>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Signup
