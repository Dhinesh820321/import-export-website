import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Snackbar,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 5,
          background: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
        }}
      >
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Send Us a Message
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Fill out the form below and our team will get back to you within 24 hours.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <TextField
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            fullWidth
            multiline
            rows={5}
            variant="outlined"
          />
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ alignSelf: 'flex-start' }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<SendIcon />}
              sx={{ px: 5, py: 1.5 }}
            >
              Submit Enquiry
            </Button>
          </motion.div>
        </Box>

        <Snackbar
          open={submitted}
          autoHideDuration={5000}
          onClose={() => setSubmitted(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="success" variant="filled" onClose={() => setSubmitted(false)}>
            Thank you! Your enquiry has been submitted successfully.
          </Alert>
        </Snackbar>
      </Paper>
    </motion.div>
  );
}

export default ContactForm;
