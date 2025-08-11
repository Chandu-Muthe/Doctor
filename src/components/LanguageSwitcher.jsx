import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import { supportedLanguages } from "../config/languages";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("preferredLanguage", newLanguage);
  };

  const currentLanguage =
    supportedLanguages.find((lang) => lang.code === i18n.language) ||
    supportedLanguages[0];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant="outlined" size="small">
        <InputLabel id="language-select-label">Language</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={i18n.language}
          onChange={handleLanguageChange}
          label="Language"
          sx={{
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              gap: 1,
            },
          }}
        >
          {supportedLanguages.map((language) => (
            <MenuItem key={language.code} value={language.code}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="body2">{language.flag}</Typography>
                <Typography variant="body2">{language.name}</Typography>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSwitcher;
