import { usePokemon, PokemonProvider } from "./store";

const SearchBox = () => {
  const { search, setSearch } = usePokemon();

  return (
		<>
			<input
				type="text"
				placeholder="Search"
        className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</>
  );
}

const PokemonList = () => {
	const { pokemon } = usePokemon();

	return (
		<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
			{pokemon.map((p) => (
				<li
					className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
					key={p.id}
				>
					<div className="flex-1 flex flex-col p-8">
						<img
							className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
							alt=""
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
						/>
						<h3 className="mt-6 text-gray-900 text-sm font-medium">
							{p.name}
						</h3>
					</div>
				</li>
			))}
		</ul>
	);
};

function App() {
	return (
		<PokemonProvider>
			{/* auto adjust the margin on x axis, and set max width to 3xl, centering the div */}
      <div className="mx-auto max-w-3xl">
        <SearchBox />
				<PokemonList />
			</div>
		</PokemonProvider>
	);
}

export default App;
