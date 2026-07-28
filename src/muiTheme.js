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
});

export default muiTheme;
