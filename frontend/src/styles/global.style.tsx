import { Global } from '@mantine/core';

const GlobalStyle = () => (
    <Global
      styles={() => ({
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
      })}
    />
  );
export default GlobalStyle;