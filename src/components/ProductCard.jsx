import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Reusable product card with glassmorphism styling and hover scale animation.
 *
 * @param {Object} props
 * @param {string} props.name        - Product name
 * @param {string} props.image       - Image URL
 * @param {string} props.description - Short product description
 * @param {string} props.category    - "Export" or "Import"
 * @param {string} [props.badge]     - Optional badge label
 * @param {number} [props.index]     - Card index for stagger delay
 */
function ProductCard({ name, image, description, category, badge, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'visible',
          background: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          /* Override the theme hover since framer-motion handles scale */
          '&:hover': {
            transform: 'none',
            boxShadow: '0 24px 64px rgba(0, 0, 0, 0.14), 0 8px 24px rgba(0, 0, 0, 0.08)',
          },
        }}
      >
        {badge && (
          <Chip
            label={badge}
            color="secondary"
            size="small"
            sx={{
              position: 'absolute',
              top: -10,
              right: 16,
              zIndex: 2,
              fontWeight: 700,
              fontFamily: '"Poppins", sans-serif',
              boxShadow: '0 4px 12px rgba(191, 140, 44, 0.3)',
            }}
          />
        )}

        <CardMedia
          component="img"
          height="220"
          image={image}
          alt={name}
          sx={{
            objectFit: 'cover',
            borderRadius: '20px 20px 0 0',
          }}
        />

        <CardContent sx={{ flexGrow: 1, pb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6" fontWeight={700}>
              {name}
            </Typography>
            <Chip
              label={category}
              size="small"
              variant="outlined"
              color={category === 'Export' ? 'primary' : 'secondary'}
              sx={{ fontWeight: 600 }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            {description}
          </Typography>
        </CardContent>

        <CardActions sx={{ px: 2, pb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component={RouterLink}
            to="/contact"
            sx={{ py: 1.2 }}
          >
            Enquire Now
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}

export default ProductCard;
