import UploadForm from "../components/UploadForm";
import { FallbackPageWrapper } from "../components/FallbackPageWrapper";
import Layout from "../components/Layout";

const Upload = () => {
  return (
    <FallbackPageWrapper>
      <Layout>
        <UploadForm />
      </Layout>
    </FallbackPageWrapper>
  );
};
export default Upload;
