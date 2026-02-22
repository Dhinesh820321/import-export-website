import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProductCard from './ProductCard';
import ScrollReveal from '../animations/ScrollReveal';
import { exportProducts } from '../data/products';

function ExportSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <ScrollReveal>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}
            >
              Our Exports
            </Typography>
            <Typography variant="h3" sx={{ mt: 1, mb: 2, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
              Premium Export Products
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto' }}
            >
              We source and export the finest spices, nuts, and agricultural products
              from India to markets around the globe.
            </Typography>
          </Box>
        </ScrollReveal>

        <Grid container spacing={3}>
          {exportProducts.slice(0, 3).map((product, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.name}>
              <ProductCard {...product} category="Export" index={i} />
            </Grid>
          ))}
        </Grid>

        <ScrollReveal delay={0.3}>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              component={RouterLink}
              to="/export"
            >
              View All Export Products
            </Button>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
}

export default ExportSection;
