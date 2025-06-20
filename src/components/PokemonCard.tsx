type PokemonCardProps = {
  name: string;
  imageUrl: string;
  types: string[];
};

export default function PokemonCard({ name, imageUrl, types }: PokemonCardProps) {
  return (

    
<div className="w-full max-w-xs mx-auto transition-all transform bg-cyan-600  hover:rotate-3 hover:-translate-y-1 p-4 m-1 mt-4 
rounded-3xl shadow-amber-200 hover:shadow-xl animate-fade-in-up hover:scale-105 hover: shadow-lg 
 duration-200">
     
      <img src={imageUrl} alt={name} className="  mx-auto w-24 h-24 object-contain" />
      <h2 className=" text-xl font-semibold text-center capitalize text-gray-600">{name}</h2>
      <div className="flex justify-center gap-2">
        {types.map((type) => (
          <span
            key={type}
            className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-700"
          >
            {type}
          </span>
        ))}
      </div>
    </div>


  );
}
