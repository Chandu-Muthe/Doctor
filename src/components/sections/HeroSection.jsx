import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import {
  MedicalServices as MedicalIcon,
  Schedule as ScheduleIcon,
  HealthAndSafety as HealthIcon,
} from "@mui/icons-material";

const HeroSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const features = [
    {
      icon: <MedicalIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Expert Doctors",
      description: "Board-certified specialists with years of experience",
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Easy Booking",
      description: "Schedule appointments online in minutes",
    },
    {
      icon: <HealthIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Quality Care",
      description: "State-of-the-art facilities and treatments",
    },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default",
        pt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: "text.primary",
                  mb: 2,
                }}
              >
                {t("hero.title")}
              </Typography>

              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  color: "text.secondary",
                  mb: 3,
                }}
              >
                {t("hero.subtitle")}
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "text.secondary",
                  mb: 4,
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                }}
              >
                {t("hero.description")}
              </Typography>

              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  borderRadius: 3,
                  textTransform: "none",
                }}
              >
                {t("hero.cta")}
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "grid",
                gap: 3,
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
              }}
            >
              {features.map((feature, index) => (
                <Card
                  key={index}
                  sx={{
                    textAlign: "center",
                    p: 3,
                    boxShadow: 3,
                    borderRadius: 3,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
