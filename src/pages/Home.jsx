import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeroSection from '../components/HeroSection';
import ExportSection from '../components/ExportSection';
import ImportSection from '../components/ImportSection';
import ScrollReveal from '../animations/ScrollReveal';

const highlights = [
  {
    icon: <PublicIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Global Reach',
    description: 'Trading with partners across 30+ countries on every continent.',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Quality Assured',
    description: 'ISO-certified processes ensuring the highest quality at every step.',
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Reliable Logistics',
    description: 'End-to-end supply chain management for timely deliveries worldwide.',
  },
];

function Home() {
  return (
    <Box>
      <HeroSection />

      {/* Highlights Strip */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#fff', overflow: 'visible' }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}
              >
                Why Choose Us
              </Typography>
              <Typography variant="h3" sx={{ mt: 1, fontSize: { xs: '1.8rem', md: '2.4rem' }, color: 'text.primary' }}>
                Trusted by Partners Worldwide
              </Typography>
            </Box>
          </ScrollReveal>

          <Grid container spacing={4}>
            {highlights.map((item, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                <ScrollReveal delay={i * 0.12}>
                  <motion.div whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        textAlign: 'center',
                        borderRadius: 5,
                        height: '100%',
                        minHeight: 200,
                        background: 'rgba(255, 255, 255, 0.7)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(27, 94, 32, 0.08)',
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.light',
                          boxShadow: '0 12px 40px rgba(27, 94, 32, 0.1)',
                        },
                      }}
                    >
                      <Box sx={{ mb: 2 }}>{item.icon}</Box>
                      <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: 'text.primary' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Export & Import Sections */}
      <ExportSection />
      <ImportSection />

      {/* Stats bar */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #0D3B13 0%, #1B5E20 50%, #2E7D32 100%)',
          color: '#fff',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(191,140,44,0.08) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={3} textAlign="center">
            {[
              { value: '30+', label: 'Countries Served' },
              { value: '500+', label: 'Clients Worldwide' },
              { value: '8+', label: 'Product Categories' },
              { value: '15+', label: 'Years Experience' },
            ].map((stat, i) => (
              <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
                <ScrollReveal delay={i * 0.1}>
                  <Typography
                    variant="h3"
                    fontWeight={800}
                    sx={{ mb: 0.5, fontSize: { xs: '2rem', md: '2.8rem' }, color: '#fff' }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
