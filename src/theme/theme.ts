import {
  ActionIcon,
  Badge,
  Button,
  Container,
  DEFAULT_THEME,
  Grid,
  MantineTheme,
  createTheme,
} from "@mantine/core"
import cx from "clsx"
import classes from "./theme.module.css"

export const theme = createTheme({
  ...DEFAULT_THEME,
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === "responsive" }),
      }),
    }),
    Grid: Grid.extend({
      styles: { root: { overflow: "inherit" } },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: "subtle" },
    }),
    Button: Button.extend({
      styles: { root: { overflow: "inherit" } },
    }),
    Badge: Badge.extend({
      defaultProps: { variant: "light" },
    }),
  },
}) as MantineTheme
