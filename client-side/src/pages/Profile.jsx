import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    Typography,
} from '@mui/material'

function Profile() {
    // Dummy user data
    const user = {
        name: 'Aditya Rai',
        email: 'aditya@example.com',
        joined: 'March 2024',
    }

    return (
        <Container maxWidth="md" sx={{ mt: 8, mb: 6 }}>
            <Typography variant="h4" gutterBottom textAlign="center">
                My Profile
            </Typography>

            <Card elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1" color="text.secondary">
                                Name
                            </Typography>
                            <Typography variant="h6">{user.name}</Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1" color="text.secondary">
                                Email
                            </Typography>
                            <Typography variant="h6">{user.email}</Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1" color="text.secondary">
                                Member Since
                            </Typography>
                            <Typography variant="h6">{user.joined}</Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 4 }} />

                    <Box textAlign="center">
                        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                            Edit Profile
                        </Button>
                        <Button variant="outlined" color="error">
                            Log Out
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Profile
