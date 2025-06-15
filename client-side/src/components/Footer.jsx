import { Box, Container, Grid, Link, Typography } from '@mui/material'

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                py: 4,
                mt: 8,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Branding */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            The TCG Store
                        </Typography>
                        <Typography variant="body2">
                            Your go-to destination for collectible trading cards. Pokemon, Yu-Gi-Oh!, and more.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="/" color="inherit" underline="hover" display="block">
                            Home
                        </Link>
                        <Link href="/shop" color="inherit" underline="hover" display="block">
                            Shop
                        </Link>
                        <Link href="/about" color="inherit" underline="hover" display="block">
                            About
                        </Link>
                        <Link href="/profile" color="inherit" underline="hover" display="block">
                            Profile
                        </Link>
                    </Grid>

                    {/* Support */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Support
                        </Typography>
                        <Link href="/login" color="inherit" underline="hover" display="block">
                            Login
                        </Link>
                        <Link href="/signup" color="inherit" underline="hover" display="block">
                            Signup
                        </Link>
                        <Link href="/cart" color="inherit" underline="hover" display="block">
                            Cart
                        </Link>
                        <Link href="/checkout" color="inherit" underline="hover" display="block">
                            Checkout
                        </Link>
                    </Grid>

                    {/* Contact */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2">Email: support@tcgstore.com</Typography>
                        <Typography variant="body2">Phone: +91-98765-43210</Typography>
                    </Grid>
                </Grid>

                <Box mt={4} textAlign="center">
                    <Typography variant="body2" color="inherit">
                        © {new Date().getFullYear()} The TCG Store. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer
