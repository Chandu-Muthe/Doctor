import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import {
  Favorite as CardiologyIcon,
  Psychology as NeurologyIcon,
  AccessibilityNew as OrthopedicsIcon,
  ChildCare as PediatricsIcon,
  Spa as DermatologyIcon,
  LocalHospital as EmergencyIcon,
} from "@mui/icons-material";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "cardiology",
      icon: <CardiologyIcon sx={{ fontSize: 48, color: "primary.main" }} />,
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400",
    },
    {
      key: "neurology",
      icon: <NeurologyIcon sx={{ fontSize: 48, color: "primary.main" }} />,
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400",
    },
    {
      key: "orthopedics",
      icon: <OrthopedicsIcon sx={{ fontSize: 48, color: "primary.main" }} />,
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400",
    },
    {
      key: "pediatrics",
      icon: <PediatricsIcon sx={{ fontSize: 48, color: "primary.main" }} />,
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400",
    },
    {
      key: "dermatology",
      icon: <DermatologyIcon sx={{ fontSize: 48, color: "primary.main" }} />,
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400",
    },
    {
      key: "emergency",
      icon: <EmergencyIcon sx={{ fontSize: 48, color: "primary.main" }} />,
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400",
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        py: 8,
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold", color: "text.primary" }}
          >
            {t("services.title")}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            {t("services.subtitle")}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.key}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={t(`services.cards.${service.key}.title`)}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Box sx={{ mb: 2 }}>{service.icon}</Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {t(`services.cards.${service.key}.title`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t(`services.cards.${service.key}.description`)}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      textTransform: "none",
                      borderRadius: 2,
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
