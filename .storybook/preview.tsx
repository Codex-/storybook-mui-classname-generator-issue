import "./MuiClassNameSetup"; // Comment this line out to 'fix' storybook static builds

import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import type { StoryFn } from "@storybook/react";
import React from "react";

import { theme } from "../src/theme/theme";

export const decorators = [
  (Story: StoryFn) => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ScopedCssBaseline>
          <Story />
        </ScopedCssBaseline>
      </ThemeProvider>
    </StyledEngineProvider>
  ),
];
