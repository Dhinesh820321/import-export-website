import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import ScrollReveal from '../animations/ScrollReveal';
import { exportProducts } from '../data/products';

function Export() {
  return (
    <Box>
      {/* Banner */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0D3B13 0%, #1B5E20 60%, #388E3C 100%)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '8%',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
            filter: 'blur(30px)',
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Typography
              variant="overline"
              sx={{ letterSpacing: 3, color: 'secondary.main', fontWeight: 700 }}
            >
              Export Division
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2, fontSize: { xs: '2rem', md: '3rem' }, color: '#fff' }}>
              Premium Indian Products
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 400, color: 'rgba(255,255,255,0.85)', fontFamily: '"Inter", sans-serif' }}
            >
              We export the finest spices, nuts, and agricultural products from India,
              meeting stringent international quality standards.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Products Grid */}
      <Box sx={{ py: { xs: 6, md: 10 }, overflow: 'visible' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {exportProducts.map((product, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.name}>
                <ProductCard {...product} category="Export" index={i} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Export Process */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#fff', overflow: 'visible' }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, color: 'text.primary' }}>
                Our Export Process
              </Typography>
            </Box>
          </ScrollReveal>

          <Grid container spacing={3}>
            {[
              { step: '01', title: 'Sourcing', desc: 'Direct procurement from certified farms across India.' },
              { step: '02', title: 'Quality Testing', desc: 'Multi-level lab testing for purity, freshness, and compliance.' },
              { step: '03', title: 'Processing', desc: 'State-of-the-art cleaning, grading, and packaging facilities.' },
              { step: '04', title: 'Shipping', desc: 'Reliable logistics partners ensuring on-time global delivery.' },
            ].map((item, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.step}>
                <ScrollReveal delay={i * 0.1}>
                  <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 5,
                        minHeight: 180,
                        background: 'rgba(255,255,255,0.7)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(27,94,32,0.06)',
                        transition: 'box-shadow 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 12px 36px rgba(27, 94, 32, 0.08)',
                        },
                      }}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          fontWeight: 800,
                          background: 'linear-gradient(135deg, #1B5E20, #BF8C2C)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          opacity: 0.25,
                          fontSize: '4rem',
                          lineHeight: 1,
                        }}
                      >
                        {item.step}
                      </Typography>
                      <Typography variant="h6" sx={{ mt: -1, mb: 1, color: 'text.primary' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.desc}
                      </Typography>
                    </Box>
                  </motion.div>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Export;
