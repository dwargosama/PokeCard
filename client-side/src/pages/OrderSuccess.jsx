import { Box, Button, Container, Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { Link } from 'react-router-dom'

function OrderSuccess() {
    return (
        <Container maxWidth="sm" sx={{ mt: 10, mb: 10 }}>
            <Box
                textAlign="center"
                sx={{
                    p: 4,
                    borderRadius: 3,
                    boxShadow: 3,
                    backgroundColor: 'background.paper',
                }}
            >
                <CheckCircleOutlineIcon color="success" sx={{ fontSize: 80, mb: 2 }} />
                <Typography
                    variant="h4"
                    sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 2 }}
                >
                    Order Placed Successfully!
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Thank you for your purchase. We’ve emailed you the order confirmation, and will send an update when your items have shipped.
                </Typography>
                <Button
                    variant="contained"
                    component={Link}
                    to="/"
                    size="large"
                    sx={{ textTransform: 'none' }}
                >
                    Continue Shopping
                </Button>
            </Box>
        </Container>
    )
}

export default OrderSuccess
