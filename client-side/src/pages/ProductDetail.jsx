import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    Paper,
} from '@mui/material'

import { useParams } from 'react-router-dom'

// Dummy product database (you can replace this with real API call)
const products = {
    '1': {
        name: 'Charizard GX',
        price: 999.99,
        description:
            'A powerful fire-type Pokémon card with rare holographic artwork and battle-ready stats.',
        image: 'https://images.pokemontcg.io/sm3-20_hires.png',
    },
    '2': {
        name: 'Dark Magician',
        price: 299.99,
        description: 'Legendary Yu-Gi-Oh! card known for its iconic status and dark spell power.',
        image: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
    },
    '3': {
        name: 'Blue-Eyes White Dragon',
        price: 499.99,
        description: 'Classic high-attack dragon card from the Yu-Gi-Oh! series.',
        image: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
    },
}

function ProductDetail() {
    const { id } = useParams()
    const product = products[id]

    if (!product) {
        return (
            <Container sx={{ mt: 10, textAlign: 'center' }}>
                <Typography variant="h5">Product not found.</Typography>
            </Container>
        )
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
            <Grid container spacing={4}>
                {/* Product Image */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Box
                            component="img"
                            src={product.image}
                            alt={product.name}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                                maxHeight: 400,
                            }}
                        />
                    </Paper>
                </Grid>

                {/* Product Info */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        ₹{product.price.toFixed(2)}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        {product.description}
                    </Typography>

                    <Button variant="contained" color="primary" size="large">
                        Add to Cart
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductDetail
