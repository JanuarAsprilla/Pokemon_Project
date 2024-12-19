import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Box from '../components/Box';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Image from '../components/ImageComponent';
import NavBar from '../components/NavBar';
import UpButton from '../components/UpButton';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, [setFavorites]);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((pokemon) => pokemon.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return (
      <Box
        backgroundImage="url('src/assets/img/cargardo.gif')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        textAlign="center"
      >
        <Heading level={1} color="#500000">
          You don`t have any favorite Pokémon
        </Heading>

        <Image
          src="src/assets/img/cargardo.gif"
          width="500px"
          borderRadius="50%"
        />

        <UpButton />
      </Box>
    );
  }

  return (
    <>
      <Helmet>
        <title>Favoritos</title>
      </Helmet>
      <Box backgroundColor="#FFF0F0">
        <NavBar />
        <Box display="flex" justifyContent="center" width="50%" margin="0 auto">
          <Image
            src="src/assets/img/Favorites2.png"
            width="300px"
            height="300px"
          />
        </Box>
        <Box
          width="90%"
          margin="50px auto"
          border="1px solid #500000"
          borderRadius="10px"
          padding="20px 30px"
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gap="20px"
        >
          {favorites.map((pokemon) => (
            <Box
              key={pokemon.id}
              backgroundColor="#ffc0c0"
              width="250px"
              padding="5px"
              border="1px solid #920a0b"
              borderRadius="10px"
              margin="5px auto"
            >
              <Box margin="20px" textAlign="center">
                <Heading
                  level={2}
                  color="#500000"
                  onClick={() => navigate(`/details/${pokemon.id}`)}
                >
                  {pokemon.name}
                </Heading>
              </Box>
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
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name}
                  width="250px"
                  onClick={() => navigate(`/details/${pokemon.id}`)}
                />
              </Box>
              <Box margin="20px auto" textAlign="center">
                <Button
                  onClick={() => removeFavorite(pokemon.id)}
                  backgroundColor="red"
                  color="white"
                  border="none"
                  padding="8px"
                  cursor="pointer"
                  borderRadius="5px"
                  marginTop="10px"
                >
                  Eliminar de Favoritos
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
        <UpButton />
      </Box>
      ;
    </>
  );
};

export default FavoritesPage;
