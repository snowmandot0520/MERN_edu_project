import { useState } from 'react';

import {
  Button,
  Container,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { NavLink, useNavigate } from 'react-router-dom';
import { POST } from 'src/services/HttpService';
import Storage from 'src/services/Storage';
import * as yup from 'yup';

import { routes , routes as routesConfig } from 'src/config/routes_config';
import { getApiErrorMessage } from 'src/utils/commonFunction';
import toast from 'src/utils/Toast';

const SignInForm = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: yupResolver(validationSchema),
  });

  const signIn = async (values: any) => {
    setLoading(true);
    const { email, password } = values;
    try {
      const response = await POST({
        subUrl: '/users/signin',
        data: {
          email,
          password,
        },
      });
      console.log('response',response.data?.data?.token);
      Storage.setItem('token', response.data?.data?.token);
      toast.success('Login successful');
      navigate(routes.home.path_string());
    } catch (error) {
      const message = getApiErrorMessage(error);
      message && toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome back
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        You don't have an account yet?{' '}
        <NavLink to={routesConfig.signUp.path_string()}>Sign up</NavLink>
      </Text>
      <Paper withBorder={true} shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit((values) => signIn(values))}>
          <TextInput
            label="Email"
            placeholder="you@email.com"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            {...form.getInputProps('password')}
          />
          <Button fullWidth={true} mt="xl" type="submit" disabled={isLoading}>
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignInForm;
