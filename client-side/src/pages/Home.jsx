import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
} from '@mui/material'
import { Link } from 'react-router-dom'

// Dummy featured products
const featuredProducts = [
    {
        id: 1,
        name: 'Charizard GX',
        price: 999.99,
        image: 'https://images.pokemontcg.io/sm3-20_hires.png',
    },
    {
        id: 2,
        name: 'Dark Magician',
        price: 299.99,
        image: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
    },
    {
        id: 3,
        name: 'Blue-Eyes White Dragon',
        price: 499.99,
        image: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
    },
]

function Home() {
    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
            {/* Hero Section */}
            <Box
                sx={{
                    textAlign: 'center',
                    py: { xs: 4, md: 8 },
                    px: { xs: 2, md: 6 },
                    bgcolor: 'background.paper',
                    borderRadius: 4,
                    boxShadow: 2,
                }}
            >
                <Typography variant="h3" sx={{ fontSize: { xs: '2rem', md: '3rem' } }} gutterBottom>
                    Welcome to The TCG Store
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                    Discover rare trading cards, powerful decks, and collectibles from your favorite universes.
                </Typography>
                <Button variant="contained" size="large" component={Link} to="/shop">
                    Start Shopping
                </Button>
            </Box>

            {/* Featured Products */}
            <Box sx={{ mt: 8 }}>
                <Typography variant="h5" gutterBottom>
                    Featured Products
                </Typography>
                <Grid container spacing={4}>
                    {featuredProducts.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={product.image}
                                    alt={product.name}
                                    sx={{ objectFit: 'contain', p: 2 }}
                                />
                                <CardContent>
                                    <Typography variant="h6">{product.name}</Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        ₹{product.price.toFixed(2)}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        component={Link}
                                        to={`/product/${product.id}`}
                                        sx={{ mt: 2 }}
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}

export default Home
