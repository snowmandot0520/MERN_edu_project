import {
  Button,
  Container,
  createStyles,
  Group,
  List,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { TbCheck } from "react-icons/tb";
import { FallbackPageWrapper } from "../components/FallbackPageWrapper";
import Layout from "../components/Layout";
import { useNavigate } from "react-router";
import { routes as routes_config } from "../config/routes_config";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.md} * 4)`,
    paddingBottom: `calc(${theme.spacing.md} * 4)`,
  },

  content: {
    maxWidth: 480,
    marginRight: `calc(${theme.spacing.md} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

const Home = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <FallbackPageWrapper>
      <Layout>
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                A <span className={classes.highlight}>self-hosted</span> <br />{" "}
                URL shortner platform.
              </Title>
              <Text color="dimmed" mt="md">
                Shorten, personalize, and share fully branded short URLs.
              </Text>
              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <TbCheck size={12} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <div>
                    <b>Self-Hosted</b> - Host Share Link on your own machine.
                  </div>
                </List.Item>
                <List.Item>
                  <div>
                    <b>Privacy</b> - Password protected link
                  </div>
                </List.Item>
              </List>
              <Group mt={30}>
                <Button
                  onClick={() => navigate(routes_config.signUp.path_string())}
                  radius="xl"
                  size="md"
                  className={classes.control}
                >
                  Get started
                </Button>
                <Button
                  onClick={() =>
                    window.open(
                      "https://github.com/asif-simform/MERN-Stack",
                      "_blank"
                    )
                  }
                  variant="default"
                  radius="xl"
                  size="md"
                  className={classes.control}
                >
                  Source code
                </Button>
              </Group>
            </div>
            <Group className={classes.image} align="center">
              // FORM
            </Group>
          </div>
        </Container>
      </Layout>
    </FallbackPageWrapper>
  );
};
export default Home;
