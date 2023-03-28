import SignInForm from "../components/auth/SignInForm";
import { FallbackPageWrapper } from "../components/FallbackPageWrapper";

const SignIn = () => {
    return (
        <FallbackPageWrapper>
            <SignInForm />
        </FallbackPageWrapper>
      );
};
export default SignIn;