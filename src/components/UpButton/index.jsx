import Box from '../Box';
import Links from '../Link';
import Image from '../ImageComponent';

const UpButton = () => {
  return (
    <Box
      width="60px"
      height="60px"
      position="fixed"
      backgroundColor="#FF5758  "
      zIndex={1000}
      bottom="20px"
      right="20px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.5)"
      border="2px solid #FFC0C0"
      borderRadius="50%"
      hoverBackgroundColor="#FF2324"
      hoverTransition="3s"
      hoverBorder="2px solid #B10304"
    >
      <Links to="/">
        <Image
          src="src/assets/img/IconPokeball.png"
          width="80px"
          alt="Ir al inicio"
        />
      </Links>
    </Box>
  );
};

export default UpButton;
