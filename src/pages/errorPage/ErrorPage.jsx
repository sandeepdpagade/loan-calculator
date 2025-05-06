import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      bgcolor="background.default"
      color="text.primary"
      px={2}
    >
      <Typography variant="h6" mb={2}>
        Something went wrong in the application.
      </Typography>
      <Button
        variant="outlined"
        onClick={() => navigate("/")}
        sx={{ textTransform: "none" }}
      >
        GO HOME
      </Button>
    </Box>
  );
};

export default ErrorPage;
