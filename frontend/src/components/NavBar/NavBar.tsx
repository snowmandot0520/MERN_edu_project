import { ReactNode, useState } from "react";
import {
    Box,
    Burger,
    Container,
    createStyles,
    Group,
    Header,
    Paper,
    Stack,
    Text,
    Transition,
  } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import ActionAvatar from "./ActionAvatar";
import { routes as routes_config } from '../../config/routes_config';
import { useAuth } from "../../hooks/useAuth";

const HEADER_HEIGHT = 60;

type NavLink = {
  link?: string;
  label?: string;
  component?: ReactNode;
  action?: () => Promise<void>;
};

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
    },
  },
}));

const NavBar = () => {
  const [opened, toggleOpened] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const auth = useAuth();

  const authenticatedLinks = [
    {
      link: routes_config.home.path_string(),
      label: "Home",
    },
    {
      component: <ActionAvatar />,
    },
  ];


  const unauthenticatedLinks = [
    {
      link: routes_config.home.path_string(),
      label: "Home",
      component: null
    },
    {
      link: routes_config.signIn.path_string(),
      label: "Sign in",
      component: null
    },
    {
      link: routes_config.signUp.path_string(),
      label: "Sign up",
      component: null
    }];


  const items = (
    <>
      {(auth ? authenticatedLinks : unauthenticatedLinks)?.map((link, i) => {
        if (link?.component) {
          return (
            <Box pl={5} py={15} key={i}>
              {link.component}
            </Box>
          );
        }
        return (
          <NavLink
            key={link.label}
            to={link.link ?? ""}
            onClick={() => toggleOpened.toggle()}
            className={cx(classes.link, {
              [classes.linkActive]: window.location.pathname === link.link,
            })}
          >
            {link.label}
          </NavLink>
        );
      })}
    </>
  );
  
  return (
    <Header height={HEADER_HEIGHT} mb={40} className={classes.root}>
      <Container className={classes.header}>
        <NavLink to="/">
          <Group>
            <Text weight={600}>MERN App</Text>
          </Group>
        </NavLink>
        <Group spacing={5} className={classes.links}>
          <Group>{items}</Group>
        </Group>
        <Burger
          opened={opened}
          onClick={() => toggleOpened.toggle()}
          className={classes.burger}
          size="sm"
        />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              <Stack spacing={0}> {items}</Stack>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default NavBar;
