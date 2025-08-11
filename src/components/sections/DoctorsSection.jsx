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
  Avatar,
  Rating,
  Chip,
} from "@mui/material";
import {
  Star as StarIcon,
  MedicalServices as DoctorIcon,
} from "@mui/icons-material";

const DoctorsSection = () => {
  const { t } = useTranslation();

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "cardiologist",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300",
      experience: "15+ years",
      education: "Harvard Medical School",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "neurologist",
      rating: 4.8,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300",
      experience: "12+ years",
      education: "Stanford Medical School",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "orthopedic",
      rating: 4.9,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300",
      experience: "10+ years",
      education: "Johns Hopkins Medical School",
    },
    {
      id: 4,
      name: "Dr. David Kim",
      specialty: "pediatrician",
      rating: 4.7,
      reviews: 94,
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300",
      experience: "8+ years",
      education: "UCLA Medical School",
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      specialty: "dermatologist",
      rating: 4.8,
      reviews: 112,
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300",
      experience: "11+ years",
      education: "Yale Medical School",
    },
    {
      id: 6,
      name: "Dr. Robert Wilson",
      specialty: "cardiologist",
      rating: 4.9,
      reviews: 78,
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300",
      experience: "20+ years",
      education: "Mayo Clinic Medical School",
    },
  ];

  return (
    <Box
      id="doctors"
      sx={{
        py: 8,
        bgcolor: "background.default",
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
            {t("doctors.title")}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            {t("doctors.subtitle")}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {doctors.map((doctor) => (
            <Grid item xs={12} sm={6} md={4} key={doctor.id}>
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
                  height="250"
                  image={doctor.image}
                  alt={doctor.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {doctor.name}
                  </Typography>

                  <Chip
                    label={t(`doctors.specializations.${doctor.specialty}`)}
                    color="primary"
                    size="small"
                    sx={{ mb: 1 }}
                  />

                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Rating
                      value={doctor.rating}
                      readOnly
                      precision={0.1}
                      size="small"
                    />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {doctor.rating} ({doctor.reviews} reviews)
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Experience: {doctor.experience}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Education: {doctor.education}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DoctorsSection;
