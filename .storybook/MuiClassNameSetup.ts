import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/className";

// https://mui.com/material-ui/experimental-api/classname-generator/
ClassNameGenerator.configure((componentName) => `Prefix-Name-${componentName}`);
