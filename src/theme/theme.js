import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B5E20',
      light: '#388E3C',
      dark: '#0D3B13',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#ffa700',
      light: '#D4A84B',
      dark: '#8C6620',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8FAF5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 600,
    },
    overline: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: '0.8rem',
    },
    button: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      textTransform: 'none',
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.8,
    },
    body2: {
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 28px',
          fontSize: '0.95rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)',
          boxShadow: '0 4px 16px rgba(27, 94, 32, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #0D3B13 0%, #1B5E20 100%)',
            boxShadow: '0 8px 24px rgba(27, 94, 32, 0.45)',
            transform: 'translateY(-2px)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #ffa700 0%, #ffa700 100%)',
          boxShadow: '0 4px 16px rgba(191, 140, 44, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #8C6620 0%, #BF8C2C 100%)',
            boxShadow: '0 8px 24px rgba(191, 140, 44, 0.45)',
            transform: 'translateY(-2px)',
          },
        },
        outlinedPrimary: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 16px rgba(27, 94, 32, 0.15)',
          },
        },
        outlinedSecondary: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 16px rgba(191, 140, 44, 0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 2px 12px rgba(27, 94, 32, 0.08)',
            },
            '&.Mui-focused': {
              boxShadow: '0 4px 20px rgba(27, 94, 32, 0.12)',
            },
          },
        },
      },
    },
  },
});

export default theme;
