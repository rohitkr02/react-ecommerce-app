import { Box, Typography, Button } from "@mui/material";

function App() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        React Ecommerce Application
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 2 }}>
        React + Vite + TypeScript + Material UI
      </Typography>

      <Button variant="contained">Get Started</Button>
    </Box>
  );
}

export default App;
