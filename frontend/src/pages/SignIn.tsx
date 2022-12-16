import SignInForm from "../components/auth/SignInForm";
import { FallbackPageWrapper } from "react-current-page-fallback";

const SignIn = () => {
    return (
        <FallbackPageWrapper>
            <SignInForm />
        </FallbackPageWrapper>
      );
};
export default SignIn;