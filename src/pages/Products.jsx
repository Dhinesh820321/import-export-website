import { Box, Container, Typography, Grid, Tabs, Tab, Chip } from '@mui/material';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { exportProducts, importProducts } from '../data/products';

function Products() {
  const [tab, setTab] = useState(0);

  const allProducts = [
    ...exportProducts.map((p) => ({ ...p, category: 'Export' })),
    ...importProducts.map((p) => ({ ...p, category: 'Import' })),
  ];

  const filtered =
    tab === 0
      ? allProducts
      : tab === 1
        ? allProducts.filter((p) => p.category === 'Export')
        : allProducts.filter((p) => p.category === 'Import');

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
            bottom: '-10%',
            left: '10%',
            width: 250,
            height: 250,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(191,140,44,0.1) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Typography
              variant="overline"
              sx={{ letterSpacing: 3, color: 'secondary.main', fontWeight: 700 }}
            >
              Our Products
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
              Export & Import Catalog
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 400, color: 'rgba(255,255,255,0.85)', fontFamily: '"Inter", sans-serif' }}
            >
              Discover our complete range of premium spices, nuts, and global food products.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Products Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
              <Tabs
                value={tab}
                onChange={(_, v) => setTab(v)}
                textColor="primary"
                indicatorColor="primary"
                sx={{
                  '& .MuiTab-root': { fontWeight: 600, fontSize: '1rem', px: 3 },
                  background: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: 3,
                  p: 0.5,
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <Tab
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      All Products
                      <Chip label={allProducts.length} size="small" color="primary" />
                    </Box>
                  }
                />
                <Tab
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      Export
                      <Chip label={exportProducts.length} size="small" color="primary" variant="outlined" />
                    </Box>
                  }
                />
                <Tab
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      Import
                      <Chip label={importProducts.length} size="small" color="secondary" variant="outlined" />
                    </Box>
                  }
                />
              </Tabs>
            </Box>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Grid container spacing={3}>
                {filtered.map((product, i) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.name}>
                    <ProductCard {...product} index={i} />
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </AnimatePresence>
        </Container>
      </Box>
    </Box>
  );
}

export default Products;
