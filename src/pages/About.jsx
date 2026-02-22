import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlagIcon from '@mui/icons-material/Flag';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HandshakeIcon from '@mui/icons-material/Handshake';
import GppGoodIcon from '@mui/icons-material/GppGood';
import PublicIcon from '@mui/icons-material/Public';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ScrollReveal from '../animations/ScrollReveal';

const qualityPoints = [
  'FSSAI, ISO 22000, and HACCP certified supply chain',
  'Rigorous multi-stage quality testing at every level',
  'Farm-to-port traceability for every shipment',
  'Compliance with international food safety standards',
  'Dedicated quality assurance team of 20+ professionals',
];

const values = [
  { icon: <GppGoodIcon />, title: 'Integrity', desc: 'Honesty and transparency in every transaction and relationship.' },
  { icon: <EmojiObjectsIcon />, title: 'Innovation', desc: 'Continuously improving processes, products, and packaging.' },
  { icon: <PublicIcon />, title: 'Global Outlook', desc: 'Thinking globally while acting locally with our farming communities.' },
  { icon: <HandshakeIcon />, title: 'Partnership', desc: 'Building long-term relationships that create mutual value.' },
];

function About() {
  return (
    <Box>
      {/* Page Banner */}
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
            top: '-20%',
            right: '-5%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(191,140,44,0.12) 0%, transparent 70%)',
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
              sx={{ letterSpacing: 3, color: 'secondary.main', fontWeight: 700 }}
            >
              About Us
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2, fontSize: { xs: '2rem', md: '3rem' }, color: '#fff' }}>
              Our Story & Values
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 400, color: 'rgba(255,255,255,0.85)', fontFamily: '"Inter", sans-serif' }}>
              For over 15 years, Mamma's Spices & Nuts has been a bridge between
              India's rich agricultural heritage and the world's most discerning markets.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Company Overview */}
      <Box sx={{ py: { xs: 8, md: 12 }, overflow: 'visible' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollReveal>
                <Box
                  component="img"
                  src="legacy.png"
                  alt="Global trade"
                  sx={{
                    width: '100%',
                    borderRadius: 5,
                    boxShadow: '0 24px 64px rgba(0,0,0,0.12)',
                  }}
                />
              </ScrollReveal>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollReveal delay={0.15}>
                <Typography
                  variant="overline"
                  sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}
                >
                  Who We Are
                </Typography>
                <Typography variant="h3" sx={{ mt: 1, mb: 3, fontSize: { xs: '1.8rem', md: '2.2rem' }, color: 'text.primary' }}>
                  A Legacy of Quality & Trust
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  Founded with a passion for bringing the finest Indian spices and
                  agricultural products to the global stage, Mamma's Spices & Nuts has
                  grown from a small family enterprise into a respected name in
                  international trade.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Our deep relationships with farmers across India, combined with
                  state-of-the-art processing facilities and an unwavering commitment
                  to quality, set us apart in the competitive world of import-export
                  trade.
                </Typography>
              </ScrollReveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Vision & Mission */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#fff', overflow: 'visible' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              {
                icon: <VisibilityIcon sx={{ color: 'primary.main', fontSize: 32 }} />,
                title: 'Our Vision',
                colorKey: 'primary',
                text: 'To be the most trusted and preferred global trading partner for premium spices, nuts, and agricultural products — known for unmatched quality, transparency, and sustainable practices.',
              },
              {
                icon: <FlagIcon sx={{ color: 'secondary.main', fontSize: 32 }} />,
                title: 'Our Mission',
                colorKey: 'secondary',
                text: 'To connect India\'s diverse agricultural riches with global markets while delivering exceptional value through ethical sourcing, innovation, and long-term partnerships with farmers and buyers alike.',
              },
            ].map((item, i) => (
              <Grid size={{ xs: 12, md: 6 }} key={item.title}>
                <ScrollReveal delay={i * 0.15}>
                  <motion.div whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 5,
                        height: '100%',
                        borderRadius: 5,
                        border: '2px solid',
                        borderColor: `${item.colorKey}.main`,
                        background:
                          item.colorKey === 'primary'
                            ? 'linear-gradient(135deg, rgba(27,94,32,0.03) 0%, rgba(27,94,32,0.08) 100%)'
                            : 'linear-gradient(135deg, rgba(191,140,44,0.03) 0%, rgba(191,140,44,0.08) 100%)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                        {item.icon}
                        <Typography variant="h4" sx={{ color: 'text.primary' }}>{item.title}</Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary">
                        {item.text}
                      </Typography>
                    </Paper>
                  </motion.div>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'background.default', overflow: 'visible' }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, color: 'text.primary' }}>
                What Drives Us
              </Typography>
            </Box>
          </ScrollReveal>

          <Grid container spacing={3}>
            {values.map((val, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={val.title}>
                <ScrollReveal delay={i * 0.1}>
                  <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        borderRadius: 5,
                        height: '100%',
                        minHeight: 180,
                        background: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(27, 94, 32, 0.06)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.light',
                          boxShadow: '0 12px 36px rgba(27, 94, 32, 0.1)',
                        },
                      }}
                    >
                      <Box sx={{ color: 'primary.main', mb: 1.5, '& svg': { fontSize: 40 } }}>
                        {val.icon}
                      </Box>
                      <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
                        {val.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {val.desc}
                      </Typography>
                    </Paper>
                  </motion.div>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Quality Assurance */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#fff', overflow: 'visible' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollReveal>
                <Typography
                  variant="overline"
                  sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}
                >
                  Quality Assurance
                </Typography>
                <Typography variant="h3" sx={{ mt: 1, mb: 3, fontSize: { xs: '1.8rem', md: '2.2rem' }, color: 'text.primary' }}>
                  Uncompromising Quality Standards
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Quality is at the heart of everything we do. From sourcing raw
                  materials to final packaging, every step is monitored by our expert
                  quality assurance team.
                </Typography>
                <List>
                  {qualityPoints.map((point, i) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
                    >
                      <ListItem disablePadding sx={{ mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={point}
                          primaryTypographyProps={{ color: 'text.secondary' }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </ScrollReveal>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollReveal delay={0.2}>
                <Box
                  component="img"
                  src="quality.png"
                  alt="Quality assurance"
                  sx={{
                    width: '100%',
                    borderRadius: 5,
                    boxShadow: '0 24px 64px rgba(0,0,0,0.12)',
                  }}
                />
              </ScrollReveal>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
