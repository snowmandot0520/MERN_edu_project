import { Container } from "@mantine/core";
import Header from "../components/NavBar/NavBar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
export default Layout;
