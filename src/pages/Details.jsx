import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Box from '../components/Box';
import Image from '../components/ImageComponent';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import UpButton from '../components/UpButton';

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [abilitys, setAbilitys] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error(`Error ${response.status}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error(`Error fetching Pokémon: ${error.message}`);
        setPokemon(null);
      }
    };

    const fetchAbilityPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${id}`);
        if (!response.ok) throw new Error(`Error ${response.status}`);
        const data = await response.json();
        setAbilitys(data);
      } catch (error) {
        console.error(`Error fetching ability: ${error.message}`);
        setAbilitys(null);
      }
    };

    fetchPokemonDetail();
    fetchAbilityPokemon();
  }, [id]);

  const addFavorite = () => {
    if (!favorites.some((fav) => fav.id === pokemon.id)) {
      setFavorites([...favorites, { id: pokemon.id, name: pokemon.name }]);
    }
  };

  const removeFavorite = () => {
    setFavorites(favorites.filter((fav) => fav.id !== pokemon.id));
  };

  const handleClick = () => {
    if (favorites.some((fav) => fav.id === pokemon.id)) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  if (!pokemon || !abilitys) {
    return (
      <Box
        margin="0 auto"
        display="flex"
        padding="50px"
        justifyContent="center"
      >
        <Heading level={1}>Loading...</Heading>
      </Box>
    );
  }

  const isFavorite = favorites.some((fav) => fav.id === pokemon.id);

  return (
    <>
      <Helmet>
        <title>Detalles {pokemon.name}</title>
      </Helmet>

      <Box
        backgroundColor="#fff0f0"
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        padding="30px"
        alignItems="center"
        color="#500000"
      >
        <Box margin="0 auto">
          <Box margin="20px 0">
            <Heading level={1} textAlign="center">
              {pokemon.name}
            </Heading>
          </Box>
          <Box
            border="1px solid #FFC0C0"
            borderRadius="50%"
            hoverBackgroundColor="#FF5758"
            hoverTransition="3s"
            hoverBorder="1px solid #b10304"
          >
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt={pokemon.name}
              width="400px"
              height="400px"
            />
          </Box>
        </Box>

        <Box>
          <Heading level={1} textAlign="center">
            Details of {pokemon.name}
          </Heading>
          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gridTemplateRows="repeat(2, 1fr)"
            gap="10px"
          >
            <Box
              display="flex"
              gap="5px"
              alignItems="center"
              justifyContent="center"
            >
              <Heading level={2}>Height:</Heading>
              <Paragraph fontSize="25px">{pokemon.height / 10} m</Paragraph>
            </Box>
            <Box
              display="flex"
              gap="5px"
              alignItems="center"
              justifyContent="center"
            >
              <Heading level={2}>Weight:</Heading>
              <Paragraph fontSize="25px">{pokemon.weight / 10} kg</Paragraph>
            </Box>
            <Box display="flex" gap="5px">
              <Heading level={3}>Effect:</Heading>
              <Paragraph>
                {
                  abilitys.effect_entries.find(
                    (entry) => entry.language.name === 'en',
                  )?.effect
                }
              </Paragraph>
            </Box>
            <Box display="flex" gap="5px">
              <Heading level={3}>Short Effect:</Heading>
              <Paragraph>
                {
                  abilitys.effect_entries.find(
                    (entry) => entry.language.name === 'en',
                  )?.short_effect
                }
              </Paragraph>
            </Box>
          </Box>
          <Box margin="20px auto" display="flex" justifyContent="center">
            <Button
              backgroundColor={isFavorite ? 'red' : 'green'}
              color="#fff0f0"
              onClick={handleClick}
            >
              {isFavorite
                ? `${pokemon.name} removed from favorites`
                : `${pokemon.name} add to favorites`}
            </Button>
          </Box>
        </Box>
      </Box>
      <UpButton />
    </>
  );
};

export default Details;
