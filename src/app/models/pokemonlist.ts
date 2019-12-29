export interface Pokemonlist {
    id?: number;
    name?: any;
    image?: string;
    types?: any;
    height?: number;
    weight?: number;
    abilities?: any;
    evolucion?: any;
    genero?: any;
    descripcion?: string;
    favorito?: boolean;
}

export interface PokemonFavorite {
    id?: number;
    name?: string;
    favorito?: boolean;
}

export interface PokemonCG {
    descripcion?: any[];
    genero?: string;
}

export interface PokemonE {
    name?: any;
}