import { Container } from '@mantine/core';

import Header from 'src/components/NavBar/NavBar';

const Layout = ({ children }: any) => (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
export default Layout;
