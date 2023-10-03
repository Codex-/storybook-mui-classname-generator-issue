import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { selectClasses } from "@mui/material/Select";
import { createTheme, type ThemeOptions } from "@mui/material/styles";

const themeConfig: ThemeOptions = {
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          width: "200px",

          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#C8C9C9",
          },

          [`&.${selectClasses.disabled}`]: {
            backgroundColor: "#EEEFEF",
            color: "#F9F9F9",

            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "#E4E5E5",
            },

            "& > svg": {
              color: "#B5B6B6",
            },

            "&:hover": {
              [`& .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: "#E4E5E5",
              },
            },
          },

          [`&.${selectClasses.error}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "#BB1A20",
            },

            "& > svg": {
              color: "#BB1A20",
            },

            "&:hover": {
              [`& .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: "#BB1A20",
              },
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#C8C9C9",
        },
        root: {
          maxHeight: "32px",
          fontSize: "12px",

          "& > svg": {
            color: "#2064D0",
          },

          "&:hover": {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "#2064D0",
            },
          },
        },
        input: {
          display: "inline-flex",
          alignItems: "center",
        },
      },
    },
  },
};

export const theme = createTheme(themeConfig);
