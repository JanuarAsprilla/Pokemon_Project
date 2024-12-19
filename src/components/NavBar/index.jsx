import Box from '../Box';
import Image from '../ImageComponent';
import Links from '../Link';

const NavBar = () => {
  const linksNav = [
    { to: '/', label: 'Home' },
    { to: '/favorites', label: 'Favorite' },
  ];

  const renderLinksNav = linksNav.map((date, index) => (
    <Box
      key={index}
      display="grid"
      hoverTransition="2s"
      justifyContent="center"
      borderRadius="20px"
      hoverBackgroundColor="#FF5758"
    >
      <Links
        to={date.to}
        color="#500000"
        textDecoration="none"
        fontSize="30px"
        fontWeight="400"
        hoverColor="#fff0f0"
        padding=" 20px 65px"
      >
        {date.label}
      </Links>
    </Box>
  ));
  return (
    <>
      <Box backgroundColor="#FFF0F0" padding="5px">
        <Box
          margin="0 auto"
          display="grid"
          gridTemplateColumns="auto 1fr"
          alignItems="center"
          width="50%"
          gap="10px"
        >
          <Links to={'/'}>
            <Box
              border="1px solid #FFC0C0"
              borderRadius="50%"
              hoverBackgroundColor="#FF5758"
              hoverTransition="3s"
              hoverBorder="1px solid #b10304"
            >
              <Image
                src="src/assets/img/PokeballLogo.png"
                alt="Logo Pokeball"
                width="100px"
                height="100px"
              />
            </Box>
          </Links>
          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            backgroundColor="#FFDDDD"
            border="1px solid #FFC0C0"
            borderRadius="20px"
          >
            {renderLinksNav}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
