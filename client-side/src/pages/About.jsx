import { Container, Typography, Grid, Box, Divider } from '@mui/material'

function About() {
    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
            <Grid container spacing={4}>
                {/* Title Section */}
                <Grid item xs={12}>
                    <Typography variant="h3" sx={{ fontSize: { xs: '2rem', md: '3rem' } }} gutterBottom>
                        About The TCG Store
                    </Typography>
                    <Divider sx={{ mb: 3 }} />
                </Grid>

                {/* Intro Section */}
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" paragraph>
                        Welcome to <strong>The TCG Store</strong>, your premier online destination for trading card game enthusiasts.
                        Whether you're a competitive player, a casual collector, or just starting out — we have something for everyone!
                    </Typography>
                    <Typography variant="body1" paragraph>
                        We specialize in a wide variety of collectible cards, including <em>Yu-Gi-Oh!</em>, <em>Pokémon</em>, <em>Magic: The Gathering</em>, and more.
                        We’re dedicated to quality, authenticity, and great customer service.
                    </Typography>
                </Grid>

                {/* Mission Section */}
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" paragraph>
                        At The TCG Store, we’re not just sellers — we’re passionate fans. Our mission is to build a vibrant community
                        where card collectors and players can connect, buy, trade, and share their love for the game.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        We work hard to curate a trusted, enjoyable platform where your collection can grow with confidence.
                    </Typography>
                </Grid>

                {/* Why Choose Us Section */}
                <Grid item xs={12}>
                    <Box mt={4}>
                        <Typography variant="h5" gutterBottom>
                            Why Shop With Us?
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body1">🃏 Huge selection of rare and valuable cards</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body1">📦 Fast and secure shipping</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body1">💬 Friendly customer support</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body1">🛡️ 100% authenticity guarantee</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                {/* Closing Note */}
                <Grid item xs={12}>
                    <Box mt={4}>
                        <Typography variant="body2" color="text.secondary">
                            Thank you for choosing The TCG Store. Happy collecting and dueling!
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About
