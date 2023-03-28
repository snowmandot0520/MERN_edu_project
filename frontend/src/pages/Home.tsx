import UploadForm from "../components/UploadForm";
import { FallbackPageWrapper } from "../components/FallbackPageWrapper";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <FallbackPageWrapper>
      <Layout>
        <UploadForm />
      </Layout>
    </FallbackPageWrapper>
  );
};
export default Home;
