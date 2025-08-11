import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  LocalHospital as HospitalIcon,
} from "@mui/icons-material";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationItems = [
    { key: "home", href: "#home" },
    { key: "services", href: "#services" },
    { key: "doctors", href: "#doctors" },
    { key: "appointments", href: "#appointments" },
    { key: "contact", href: "#contact" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {t("navigation.home")}
      </Typography>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.key} component="a" href={item.href}>
            <ListItemText primary={t(`navigation.${item.key}`)} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "primary.main" }}>
        <Toolbar>
          <HospitalIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Doctors Clinic
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.key}
                  color="inherit"
                  href={item.href}
                  sx={{ textTransform: "none" }}
                >
                  {t(`navigation.${item.key}`)}
                </Button>
              ))}
              <LanguageSwitcher />
            </Box>
          )}

          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LanguageSwitcher />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
