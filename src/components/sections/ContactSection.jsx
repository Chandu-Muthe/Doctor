import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Send as SendIcon,
} from "@mui/icons-material";

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);

    setSnackbarMessage(
      "Thank you for your message! We will get back to you soon."
    );
    setOpenSnackbar(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <LocationIcon color="primary" />,
      label: t("contact.info.address"),
    },
    {
      icon: <PhoneIcon color="primary" />,
      label: t("contact.info.phone"),
    },
    {
      icon: <EmailIcon color="primary" />,
      label: t("contact.info.email"),
    },
  ];

  return (
    <Box
      id="contact"
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
            {t("contact.title")}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            {t("contact.subtitle")}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Send us a message
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={t("contact.form.name")}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={t("contact.form.email")}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={t("contact.form.phone")}
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label={t("contact.form.message")}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        endIcon={<SendIcon />}
                        sx={{
                          py: 1.5,
                          textTransform: "none",
                          fontSize: "1.1rem",
                        }}
                      >
                        {t("contact.form.submit")}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Contact Information
                </Typography>

                <List sx={{ mt: 2 }}>
                  {contactInfo.map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          variant: "body1",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Box sx={{ mt: 4 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215676728973!2d-73.98784368459377!3d40.758895279328506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635784986206!5m2!1sen!2sus"
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: 8 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Clinic Location"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
