import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#0074be",
      contrastText: "#fff",
    },
    secondary: {
      main: "#153a63",
      contrastText: "#fff",
    },
    background: {
      default: "#fbf6f3",
      paper: "#fff",
    },
    text: {
      primary: "#153a63",
      secondary: "#153a63",
    },
    divider: "#dfebf4",
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--color-white)",
          color: "var(--text-primary)",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--surface-info)",
          color: "var(--text-primary)",
          "&:hover, &.Mui-expanded": {
            backgroundColor: "var(--surface-info)",
          },
          "&.Mui-focusVisible": {
            backgroundColor: "var(--surface-info)",
            outline: "3px solid var(--brand-navy)",
            outlineOffset: "-3px",
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            color: "var(--text-primary)",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--color-white)",
          color: "var(--text-primary)",
        },
      },
    },
  },
});

export default muiTheme;
