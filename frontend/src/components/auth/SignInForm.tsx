import {
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Title,
  Text,
  Anchor
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { NavLink } from "react-router-dom";
import * as yup from "yup";

const SignInForm = () => {
  const validationSchema = yup.object().shape({
    emailOrUsername: yup.string().required(),
    password: yup.string().min(8).required(),
  });

  const form = useForm({
    initialValues: {
      emailOrUsername: "",
      password: "",
    },
    validate: yupResolver(validationSchema),
  });

  const signIn = (email: string, password: string) => {};

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
          You don't have an account yet?{" "}
          <NavLink to='sign-up'>
            {"Sign up"}
          </NavLink>
        </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={form.onSubmit((values) =>
            signIn(values.emailOrUsername, values.password)
          )}
        >
          <TextInput
            label="Email or username"
            placeholder="you@email.com"
            {...form.getInputProps("emailOrUsername")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            {...form.getInputProps("password")}
          />
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignInForm;
