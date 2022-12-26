import { FC } from "react";
import {
  createStyles,
  Title,
  Text,
  Container,
  Group,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import { FallbackPageWrapper } from "react-current-page-fallback";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors.gray[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: 120,
    },
  },

  description: {
    maxWidth: 500,
    margin: "auto",
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

const ErrorNotFound : FC = () => {
  const { classes } = useStyles();

  return (
    <FallbackPageWrapper>
      <Container className={classes.root}>
        <div className={classes.label}>404</div>
        <Title align="center" order={3}>
          Oops this page doesn't exist.
        </Title>
        <Text
          color="dimmed"
          align="center"
          className={classes.description}
        ></Text>
        <Group position="center">
          <NavLink to="/">
            Bring me back
          </NavLink>
        </Group>
      </Container>
    </FallbackPageWrapper>
  );
};

export default ErrorNotFound;
