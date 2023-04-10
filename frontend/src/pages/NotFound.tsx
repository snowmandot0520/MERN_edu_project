import { FC } from 'react';

import {
  Container,
  createStyles,
  Group,
  Text,
  Title,
} from '@mantine/core';
import { NavLink } from 'react-router-dom';

import { FallbackPageWrapper } from 'src/components/FallbackPageWrapper';
import Layout from 'src/components/Layout';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

const ErrorNotFound : FC = () => {
  const { classes } = useStyles();

  return (
    <FallbackPageWrapper>
      <Layout>
        <Container className={classes.root}>
          <div className={classes.label}>404</div>
          <Title align="center" order={3}>
            Oops this page doesn't exist.
          </Title>
          <Text
            color="dimmed"
            align="center"
            className={classes.description}
           />
          <Group position="center">
            <NavLink to="/">
              Bring me back
            </NavLink>
          </Group>
        </Container>
      </Layout>
    </FallbackPageWrapper>
  );
};

export default ErrorNotFound;
