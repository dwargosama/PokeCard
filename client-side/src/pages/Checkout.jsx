import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
    Card,
    Divider,
} from '@mui/material'

function Checkout() {
    // Placeholder total price – replace with cart logic
    const totalPrice = 699.97

    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
            <Typography
                variant="h4"
                sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 4 }}
            >
                Checkout
            </Typography>

            <Grid container spacing={4}>
                {/* Billing Form */}
                <Grid item xs={12} md={7}>
                    <Typography variant="h6" gutterBottom>
                        Billing Details
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="First Name" required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Last Name" required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Email Address" required type="email" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Phone Number" required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Address Line 1" required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Address Line 2" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="City" required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="State/Province" required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Postal Code" required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Country" required />
                        </Grid>
                    </Grid>
                </Grid>

                {/* Order Summary */}
                <Grid item xs={12} md={5}>
                    <Card sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Order Summary
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Box display="flex" justifyContent="space-between" mb={1}>
                            <Typography>Subtotal</Typography>
                            <Typography>₹{totalPrice.toFixed(2)}</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between" mb={1}>
                            <Typography>Shipping</Typography>
                            <Typography>Free</Typography>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Box display="flex" justifyContent="space-between" fontWeight="bold">
                            <Typography>Total</Typography>
                            <Typography>₹{totalPrice.toFixed(2)}</Typography>
                        </Box>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            sx={{ mt: 3 }}
                        >
                            Place Order
                        </Button>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Checkout
