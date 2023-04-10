import { FallbackPageWrapper } from 'src/components/FallbackPageWrapper';
import Layout from 'src/components/Layout';
import UploadForm from 'src/components/UploadForm';

const Upload = () => (
    <FallbackPageWrapper>
      <Layout>
        <UploadForm />
      </Layout>
    </FallbackPageWrapper>
  );
export default Upload;
