import { Global } from '@emotion/react';

const Fonts = () => {
  return (
    <Global
      styles={`
      @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;800&display=swap');
    `}
    />
  );
};

export default Fonts;
