import SignUpForm from "../components/auth/SignUpForm";
import { FallbackPageWrapper } from "../components/FallbackPageWrapper";

const SignUp = () => {
    return (
        <FallbackPageWrapper>
          <SignUpForm />
        </FallbackPageWrapper>
      );
};
export default SignUp;