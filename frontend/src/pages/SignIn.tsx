import SignInForm from 'src/components/auth/SignInForm';
import { FallbackPageWrapper } from 'src/components/FallbackPageWrapper';
import Layout from 'src/components/Layout';

const SignIn = () => (
    <FallbackPageWrapper>
      <Layout>
        <SignInForm />
      </Layout>
    </FallbackPageWrapper>
  );
export default SignIn;
