import SignUpForm from 'src/components/auth/SignUpForm';
import { FallbackPageWrapper } from 'src/components/FallbackPageWrapper';
import Layout from 'src/components/Layout';

const SignUp = () => (
        <FallbackPageWrapper>
          <Layout>
            <SignUpForm />
          </Layout>
        </FallbackPageWrapper>
      );
export default SignUp;