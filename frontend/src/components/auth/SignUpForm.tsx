import {
  Anchor,
  Button,
  Container,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { NavLink } from "react-router-dom";
import * as yup from "yup";

const SignUpForm = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    username: yup.string().min(3).required(),
    password: yup.string().min(8).required(),
  });

  const form = useForm({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: yupResolver(validationSchema),
  });

  const signUp = (email: string, username: string, password: string) => {};

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Sign up
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
          You have an account already?{" "}
          <NavLink to='/'>
            Sign in
          </NavLink>
        </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={form.onSubmit((values) =>
            signUp(values.email, values.username, values.password)
          )}
        >
          <TextInput
            label="Username"
            placeholder="john.doe"
            {...form.getInputProps("username")}
          />
          <TextInput
            label="Email"
            placeholder="you@email.com"
            mt="md"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            {...form.getInputProps("password")}
          />
          <Button fullWidth mt="xl" type="submit">
            Let's get started
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUpForm;
