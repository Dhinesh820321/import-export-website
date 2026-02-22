import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProductCard from './ProductCard';
import ScrollReveal from '../animations/ScrollReveal';
import { importProducts } from '../data/products';

function ImportSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <ScrollReveal>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}
            >
              Our Imports
            </Typography>
            <Typography variant="h3" sx={{ mt: 1, mb: 2, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
              Premium Import Products
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto' }}
            >
              We bring the world's finest dates, chocolates, and nutrition nuts
              to local markets — handpicked for quality and taste.
            </Typography>
          </Box>
        </ScrollReveal>

        <Grid container spacing={3} justifyContent="center">
          {importProducts.map((product, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.name}>
              <ProductCard {...product} category="Import" index={i} />
            </Grid>
          ))}
        </Grid>

        <ScrollReveal delay={0.3}>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              component={RouterLink}
              to="/import"
            >
              View All Import Products
            </Button>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
}

export default ImportSection;
