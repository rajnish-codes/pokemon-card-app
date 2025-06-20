"use client";
import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";

type pokemon = {

name: string;
url: string;
type: string[];
};

export default function Home() {

const [pokemonList, getPokemonList] = useState<pokemon[]>([]);

useEffect(() => {

  async function fetchPokemon(){

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
    const data = await res.json();

    getPokemonList(data.results);
  }

  fetchPokemon();

}, []);

return (

  <main className=" dark:bg-gray-900 dark:text-white  text-black min-h-screen bg-green-900 flex items-center justify-center p-6">
   <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-6">
    {
      pokemonList.map(pokemon => (

      <PokemonCard

      key={pokemon.name}
      name={pokemon.name}
      imageUrl={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
      types={["unknown"]}
      
      />
      ))
    }
    </div>
  </main>
);

}