import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PublicIcon from '@mui/icons-material/Public';

/* Stagger orchestration: badge -> heading -> subtext -> buttons */
const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const heroChild = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '90vh', md: '95vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: `
          linear-gradient(135deg, rgba(40, 49, 42, 0.93) 0%, rgba(7, 10, 8, 0.85) 50%, rgba(69, 64, 53, 0.65) 100%),
          url('herosection2.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: { md: 'fixed' },
      }}
    >
      {/* Decorative blurred orbs for depth */}
      <Box
        sx={{
          position: 'absolute',
          top: '8%',
          right: '3%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 170, 0, 0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 6, 6, 0.07) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: 720 }}
        >
          {/* Badge */}
          <motion.div variants={heroChild}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 50,
                px: 2.5,
                py: 0.8,
                mb: 3,
                backdropFilter: 'blur(16px)',
              }}
            >
              <PublicIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600, letterSpacing: 0.5 }}>
                Global Trade Excellence
              </Typography>
            </Box>
          </motion.div>

          {/* Heading */}
          <motion.div variants={heroChild}>
            <Typography
              variant="h1"
              sx={{
                color: '#fff',
                fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4rem' },
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
          </motion.div>

          {/* Subheading */}
          <motion.div variants={heroChild}>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 400,
                lineHeight: 1.8,
                mb: 4,
                maxWidth: 560,
                fontSize: { xs: '1rem', md: '1.15rem' },
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Mamma's Spices & Nuts is your trusted partner in global trade,
              exporting the finest cardamom, moringa, cashew, tea & garlic, and
              importing premium dates, chocolates & nutrition nuts.
            </Typography>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={heroChild}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                component={RouterLink}
                to="/products"
                sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
              >
                Explore Products
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={RouterLink}
                to="/contact"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.4)',
                  borderWidth: 2,
                  backdropFilter: 'blur(8px)',
                  '&:hover': {
                    borderColor: '#fff',
                    borderWidth: 2,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}

export default HeroSection;
