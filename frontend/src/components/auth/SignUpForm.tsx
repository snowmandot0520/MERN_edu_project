import {
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
    firstName: yup.string().min(3).required(),
    lastName: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup
      .string()
      .min(8)
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(),
  });

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: yupResolver(validationSchema),
  });

  const signUp = (values: any) => {
    console.log("signUp", values);
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
        Sign up
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        You have an account already? <NavLink to="/">Sign in</NavLink>
      </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit((values) => signUp(values))}>
          <TextInput
            label="firstName"
            placeholder="john"
            mt="md"
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="lastName"
            placeholder="Doe"
            mt="md"
            {...form.getInputProps("lastName")}
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
          <PasswordInput
            label="Confirm Password"
            placeholder="Your confirm password"
            mt="md"
            {...form.getInputProps("confirmPassword")}
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
