import {
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Title,
  Text,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { NavLink } from "react-router-dom";
import * as yup from "yup";

const SignInForm = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(validationSchema),
  });

  const signIn = (values: any) => {};

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
        <NavLink to="sign-up">{"Sign up"}</NavLink>
      </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit((values) => signIn(values))}>
          <TextInput
            label="Email"
            placeholder="you@email.com"
            {...form.getInputProps("email")}
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
