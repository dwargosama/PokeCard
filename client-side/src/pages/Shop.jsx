import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
  } from '@mui/material'
  import { Link } from 'react-router-dom'
  
  // Dummy products
  const products = [
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
    {
      id: 4,
      name: 'Pikachu V',
      price: 199.99,
      image: 'https://images.pokemontcg.io/swsh4/43_hires.png',
    },
  ]
  
  function Shop() {
    return (
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Shop Cards
        </Typography>
  
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{ height: 240, objectFit: 'contain', p: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₹{product.price.toFixed(2)}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      component={Link}
                      to={`/product/${product.id}`}
                      variant="outlined"
                      fullWidth
                    >
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  }
  
  export default Shop
  