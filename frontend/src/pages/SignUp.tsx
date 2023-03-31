import SignUpForm from "../components/auth/SignUpForm";
import { FallbackPageWrapper } from "../components/FallbackPageWrapper";
import Layout from "../components/Layout";

const SignUp = () => {
    return (
        <FallbackPageWrapper>
          <Layout>
            <SignUpForm />
          </Layout>
        </FallbackPageWrapper>
      );
};
export default SignUp;