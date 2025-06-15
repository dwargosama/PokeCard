import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Cart', path: '/cart' },
]

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open)
    }

    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            color: 'inherit',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                        }}
                    >
                        TCG Store
                    </Typography>

                    {/* Desktop Nav */}
                    {!isMobile && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {navLinks.map(({ label, path }) => (
                                <Button
                                    key={label}
                                    component={Link}
                                    to={path}
                                    color="inherit"
                                >
                                    {label}
                                </Button>
                            ))}
                            <Button component={Link} to="/login" color="inherit">
                                Login
                            </Button>
                            <Button component={Link} to="/signup" color="secondary" variant="outlined">
                                Signup
                            </Button>
                        </Box>
                    )}

                    {/* Mobile Menu */}
                    {isMobile && (
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                    <List>
                        {navLinks.map(({ label, path }) => (
                            <ListItem button key={label} component={Link} to={path}>
                                <ListItemText primary={label} />
                            </ListItem>
                        ))}
                        <ListItem button component={Link} to="/login">
                            <ListItemText primary="Login" />
                        </ListItem>
                        <ListItem button component={Link} to="/signup">
                            <ListItemText primary="Signup" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default Navbar
