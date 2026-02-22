import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import ScrollReveal from '../animations/ScrollReveal';
import { importProducts } from '../data/products';

function Import() {
  return (
    <Box>
      {/* Banner */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0D3B13 0%, #1B5E20 50%, #2E7D32 100%)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: '5%',
            left: '5%',
            width: 250,
            height: 250,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
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
              sx={{ letterSpacing: 3, color: '#fff', fontWeight: 700 }}
            >
              Import Division
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2, fontSize: { xs: '2rem', md: '3rem' }, color: '#fff' }}>
              World-Class Imports
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 400, color: 'rgba(255,255,255,0.9)', fontFamily: '"Inter", sans-serif' }}
            >
              We bring the finest dates, chocolates, and nutrition nuts from across
              the globe — handpicked for quality and taste.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Products Grid */}
      <Box sx={{ py: { xs: 6, md: 10 }, overflow: 'visible' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {importProducts.map((product, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.name}>
                <ProductCard {...product} category="Import" index={i} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Import With Us */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#fff', overflow: 'visible' }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, color: 'text.primary' }}>
                Why Import With Us?
              </Typography>
            </Box>
          </ScrollReveal>

          <Grid container spacing={4}>
            {[
              {
                title: 'Verified Suppliers',
                desc: 'Every import source is personally vetted and audited for quality, food safety, and ethical practices.',
              },
              {
                title: 'Competitive Pricing',
                desc: 'Bulk sourcing and long-term partnerships allow us to offer the best market prices.',
              },
              {
                title: 'Custom Packaging',
                desc: 'Flexible packaging options from bulk industrial packs to retail-ready branded solutions.',
              },
            ].map((item, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                <ScrollReveal delay={i * 0.1}>
                  <motion.div whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}>
                    <Box
                      sx={{
                        p: 4,
                        borderRadius: 5,
                        height: '100%',
                        minHeight: 160,
                        background: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(191, 140, 44, 0.08)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          borderColor: 'secondary.main',
                          boxShadow: '0 12px 40px rgba(191, 140, 44, 0.1)',
                        },
                      }}
                    >
                      <Typography variant="h6" fontWeight={700} gutterBottom sx={{ color: 'text.primary' }}>
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

export default Import;
