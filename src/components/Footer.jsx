import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ScrollReveal from '../animations/ScrollReveal';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Export Products', path: '/export' },
  { label: 'Import Products', path: '/import' },
  { label: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: <FacebookIcon />, url: '#', label: 'Facebook' },
  { icon: <TwitterIcon />, url: '#', label: 'Twitter' },
  { icon: <LinkedInIcon />, url: '#', label: 'LinkedIn' },
  { icon: <InstagramIcon />, url: '#', label: 'Instagram' },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #0D3B13 0%, #091F0C 100%)',
        color: '#fff',
        pt: 10,
        pb: 4,
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative gradient orb */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '10%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(191,140,44,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={5}>
          {/* Brand Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <ScrollReveal>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocalShippingIcon sx={{ mr: 1, fontSize: 28 }} />
                <Typography variant="h6" fontWeight={800} fontFamily='"Poppins", sans-serif'>
                  Mamma's Spices & Nuts
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', mb: 3 }}>
                A trusted name in global trade — exporting premium spices, nuts, and
                agricultural products worldwide while importing the finest dates,
                chocolates, and nutrition nuts.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.2, y: -3 }}
                    transition={{ duration: 0.25 }}
                  >
                    <IconButton
                      href={social.url}
                      aria-label={social.label}
                      sx={{
                        color: 'rgba(255,255,255,0.6)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: 'secondary.main',
                          backgroundColor: 'rgba(191,140,44,0.1)',
                          borderColor: 'secondary.main',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </ScrollReveal>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <ScrollReveal delay={0.1}>
              <Typography variant="h6" fontWeight={700} gutterBottom fontFamily='"Poppins", sans-serif'>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2, mt: 1 }}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    component={RouterLink}
                    to={link.path}
                    sx={{
                      color: 'rgba(255,255,255,0.65)',
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                      display: 'inline-block',
                      '&:hover': {
                        color: 'secondary.main',
                        paddingLeft: '10px',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </ScrollReveal>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <ScrollReveal delay={0.2}>
              <Typography variant="h6" fontWeight={700} gutterBottom fontFamily='"Poppins", sans-serif'>
                Contact Us
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mt: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <LocationOnIcon sx={{ color: 'secondary.main', mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)' }}>
                    W9/87/19, Rathinam Nagar Main Road
                    <br />
                    Allinagaram, Theni - 625531
                    Tamil Nadu, India.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <EmailIcon sx={{ color: 'secondary.main' }} />
                  <Link
                    href="mailto:info@mammasspices.com"
                    sx={{
                      color: 'rgba(255,255,255,0.65)',
                      textDecoration: 'none',
                      transition: 'color 0.25s',
                      '&:hover': { color: 'secondary.main' },
                    }}
                  >
                    info@mammasspices.com
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <PhoneIcon sx={{ color: 'secondary.main' }} />
                  <Link
                    href="tel:+919876543210"
                    sx={{
                      color: 'rgba(255,255,255,0.65)',
                      textDecoration: 'none',
                      transition: 'color 0.25s',
                      '&:hover': { color: 'secondary.main' },
                    }}
                  >
                    +91 88382 00688
                  </Link>
                </Box>
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', my: 5 }} />

        <Typography
          variant="body2"
          align="center"
          sx={{ color: 'rgba(255,255,255,0.4)', fontFamily: '"Inter", sans-serif' }}
        >
          &copy; {new Date().getFullYear()} Mamma's Spices & Nuts. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
