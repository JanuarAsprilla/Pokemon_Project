import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';

import Box from '../components/Box';
import NavBar from '../components/NavBar';
import Paragraph from '../components/Paragraph';
import Image from '../components/ImageComponent';
import Heading from '../components/Heading';
import Links from '../components/Link';
import UpButton from '../components/UpButton';
import Button from '../components/Button';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 12;

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=90',
      );
      const data = await response.json();
      setPokemons(data.results);
    };
    fetchPokemon();
  }, []);

  // Calcular el rango de Pokémon a mostrar
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon,
  );

  const renderPokemons = currentPokemons.map((pokemon, index) => {
    const pokemonIndex = indexOfFirstPokemon + index + 1;
    return (
      <Box
        key={pokemon.name}
        backgroundColor="#ffc0c0"
        width="250px"
        padding="5px"
        border="1px solid #920a0b"
        borderRadius="10px"
        boxShadow="0px 4px 8px rgba(90, 90, 90, 0.5)"
      >
        <Box
          border="1px solid #920a0b"
          borderRadius="50%"
          height="250px"
          backgroundImage="url('src/assets/img/Pokeboll_Open.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
            alt={`Pokemon ${pokemon.name}`}
            width="200px"
            height="200px"
          />
        </Box>
        <Box margin="20px" textAlign="center">
          <Heading level={1} color="#500000">
            {pokemon.name}
          </Heading>
        </Box>
        <Box
          margin="0 auto"
          width="120px"
          backgroundColor="#FF5758"
          borderRadius="20px"
          textAlign="center"
          padding="10px"
          hoverBackgroundColor="#FF2324"
          transition="2s"
          border="1px solid #920a0b"
        >
          <Links
            padding="10px"
            color="#500000"
            fontSize="20px"
            fontWeight="500"
            hoverColor="#FFFFFF"
            to={`/pokemon/${pokemonIndex}`}
            textDecoration="none"
          >
            know more
          </Links>
        </Box>
      </Box>
    );
  });

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);

  return (
    <>
      <Helmet>
        <title>Pokemon App</title>
      </Helmet>
      <NavBar />
      <Box zIndex="0" backgroundColor="#FFF0F0" padding="20px 0">
        <Box display="flex" justifyContent="center" width="50%" margin="0 auto">
          <Image
            src="src/assets/img/Logo_International.png"
            width="500px"
            height="200px"
          />
        </Box>
        <Box width="80%" margin="20px auto">
          <Paragraph
            color="#500000"
            textAlign="center"
            fontSize="20px"
            fontWeight="300"
          >
            Página {currentPage} de {totalPages}
          </Paragraph>

          <Box
            margin="50px 0"
            border="1px solid #500000"
            borderRadius="10px"
            padding="20px 30px"
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gap="20px"
          >
            {renderPokemons}
          </Box>

          <Box display="flex" justifyContent="center" gap="10px">
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                backgroundColor={
                  currentPage === index + 1 ? '#FF5758' : '#FFF0F0'
                }
                color={currentPage === index + 1 ? 'white' : '#500000'}
                border="1px solid #920a0b"
                padding="10px 15px"
                borderRadius="5px"
              >
                {index + 1}
              </Button>
            ))}
          </Box>
        </Box>

        <UpButton />
      </Box>
    </>
  );
};

export default HomePage;
