import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Divider,
} from '@mui/material'
import { Link } from 'react-router-dom'

// Dummy cart data (replace with real state/context later)
const dummyCartItems = [
    {
        id: 1,
        name: 'Blue-Eyes White Dragon',
        price: 299.99,
        quantity: 1,
        image: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
    },
    {
        id: 2,
        name: 'Dark Magician',
        price: 199.99,
        quantity: 2,
        image: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
    },
]

function Cart() {
    const totalPrice = dummyCartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )

    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
            <Typography
                variant="h4"
                sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 4 }}
            >
                Shopping Cart
            </Typography>

            {dummyCartItems.length === 0 ? (
                <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
                <Grid container spacing={4}>
                    {/* Cart Items Section */}
                    <Grid item xs={12} md={8}>
                        {dummyCartItems.map((item) => (
                            <Card key={item.id} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mb: 3 }}>
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.name}
                                    sx={{
                                        width: { xs: '100%', sm: 150 },
                                        objectFit: 'contain',
                                        maxHeight: 200,
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        p: 2,
                                        flexGrow: 1,
                                    }}
                                >
                                    <CardContent sx={{ p: 0 }}>
                                        <Typography variant="h6">{item.name}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ₹{item.price.toFixed(2)} × {item.quantity}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ px: 0, pt: 1 }}>
                                        <Button size="small" color="error">
                                            Remove
                                        </Button>
                                    </CardActions>
                                </Box>
                            </Card>
                        ))}
                    </Grid>

                    {/* Summary Section */}
                    <Grid item xs={12} md={4}>
                        <Card sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Order Summary
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Box display="flex" justifyContent="space-between" mb={1}>
                                <Typography>Subtotal</Typography>
                                <Typography>₹{totalPrice.toFixed(2)}</Typography>
                            </Box>
                            <Box mt={3}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    component={Link}
                                    to="/checkout"
                                >
                                    Proceed to Checkout
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            )}
        </Container>
    )
}

export default Cart
