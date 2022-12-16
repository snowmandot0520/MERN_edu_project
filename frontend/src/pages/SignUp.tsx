import SignUpForm from "../components/auth/SignUpForm";
import { FallbackPageWrapper } from "react-current-page-fallback";

const SignUp = () => {
    return (
        <FallbackPageWrapper>
          <SignUpForm />
        </FallbackPageWrapper>
      );
};
export default SignUp;