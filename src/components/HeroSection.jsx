import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PublicIcon from '@mui/icons-material/Public';

const images = ['herosection1.png', 'herosection2.png'];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '90vh', md: '95vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Carousel */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(135deg, rgba(40,49,42,0.85), rgba(7,10,8,0.7)),
              url(${images[current]})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ maxWidth: 720 }}>
          
          {/* Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: 50,
              px: 2.5,
              py: 0.8,
              mb: 3,
              backdropFilter: 'blur(16px)',
            }}
          >
            <PublicIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
            <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600 }}>
              Global Trade Excellence
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            variant="h1"
            sx={{
              color: '#fff',
              fontSize: { xs: '2.4rem', sm: '3rem', md: '3.8rem' },
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Premium Spices & Nuts
            <br />
            <Box component="span" sx={{ color: 'secondary.main' }}>
              From India to the World
            </Box>
          </Typography>

          {/* Subtext */}
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.85)',
              mb: 4,
              maxWidth: 560,
            }}
          >
            Mamma's Spices & Nuts exports finest cardamom, moringa,
            cashew, tea & garlic worldwide and imports premium dates,
            chocolates & nutrition nuts.
          </Typography>

          {/* Buttons */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              component={RouterLink}
              to="/products"
            >
              Explore Products
            </Button>

            <Button
              variant="outlined"
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{
                color: '#fff',
                borderColor: '#fff',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Contact Us
            </Button>
          </Stack>

        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;