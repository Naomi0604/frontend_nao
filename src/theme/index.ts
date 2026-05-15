export const theme = {
  colors: {
    primary: '#10b981', // Emerald 500
    primaryDark: '#059669',
    secondary: '#334155', // Slate 700
    background: '#f8fafc', // Slate 50
    surface: '#ffffff',
    text: '#0f172a', // Slate 900
    textLight: '#64748b', // Slate 500
    error: '#ef4444',
    success: '#22c55e',
    border: '#e2e8f0',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    full: 999,
  },
  typography: {
    h1: { fontSize: 32, fontWeight: '700' as const },
    h2: { fontSize: 24, fontWeight: '600' as const },
    body: { fontSize: 16, fontWeight: '400' as const },
    caption: { fontSize: 12, fontWeight: '400' as const },
  }
};
