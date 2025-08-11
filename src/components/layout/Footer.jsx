import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Doctors Clinic
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Your trusted healthcare partner providing comprehensive medical
              services with compassion and expertise.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton color="inherit" size="small">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" size="small">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" size="small">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" size="small">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              {t("footer.quickLinks")}
            </Typography>
            <List dense>
              <ListItem>
                <Link href="#home" color="inherit" underline="hover">
                  {t("navigation.home")}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#services" color="inherit" underline="hover">
                  {t("navigation.services")}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#doctors" color="inherit" underline="hover">
                  {t("navigation.doctors")}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#contact" color="inherit" underline="hover">
                  {t("navigation.contact")}
                </Link>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              {t("footer.services")}
            </Typography>
            <List dense>
              <ListItem>
                <Link href="#services" color="inherit" underline="hover">
                  {t("services.cards.cardiology.title")}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#services" color="inherit" underline="hover">
                  {t("services.cards.neurology.title")}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#services" color="inherit" underline="hover">
                  {t("services.cards.orthopedics.title")}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#services" color="inherit" underline="hover">
                  {t("services.cards.pediatrics.title")}
                </Link>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              123 Medical Center Drive
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Healthcare City, HC 12345
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +1 (555) 123-4567
            </Typography>
            <Typography variant="body2">
              Email: info@doctorsclinic.com
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: "rgba(255,255,255,0.2)" }} />

        <Box sx={{ textAlign: "center", pt: 4 }}>
          <Typography variant="body2">{t("footer.copyright")}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
