import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContactForm from '../components/ContactForm';
import ScrollReveal from '../animations/ScrollReveal';

const contactInfo = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
    title: 'Visit Us',
    lines: ['W9/87/19', 'Allinagaram, Theni - 625531', 'Tamil Nadu, India'],
  },
  {
    icon: <EmailIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
    title: 'Email Us',
    lines: ['info@mammasspices.com', 'exports@mammasspices.com'],
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
    title: 'Call Us',
    lines: ['+91 88382 00688', '+91 73394 46008'],
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
    title: 'Business Hours',
    lines: ['Mon – Fri: 9:00 AM – 9:00 PM', 'Sat: 9:00 AM – 1:00 PM'],
  },
];

function Contact() {
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
            top: '-15%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(191,140,44,0.1) 0%, transparent 70%)',
            filter: 'blur(50px)',
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
              Get In Touch
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
              Contact Us
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 400, color: 'rgba(255,255,255,0.85)', fontFamily: '"Inter", sans-serif' }}
            >
              Have a trade enquiry or want to discuss a partnership? We'd love to hear from you.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Content */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            {/* Contact Info Cards */}
            <Grid size={{ xs: 12, md: 5 }}>
              <ScrollReveal>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                  Reach out to our team for export/import enquiries,
                  partnership opportunities, or general information.
                </Typography>
              </ScrollReveal>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        display: 'flex',
                        gap: 2,
                        borderRadius: 4,
                        background: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(27, 94, 32, 0.06)',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.light',
                          boxShadow: '0 8px 32px rgba(27, 94, 32, 0.1)',
                        },
                      }}
                    >
                      <Box>{item.icon}</Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={700}>
                          {item.title}
                        </Typography>
                        {item.lines.map((line) => (
                          <Typography key={line} variant="body2" color="text.secondary">
                            {line}
                          </Typography>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                ))}
              </Box>
            </Grid>

            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Contact;
