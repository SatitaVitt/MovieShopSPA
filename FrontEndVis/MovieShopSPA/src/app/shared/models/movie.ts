import { DecimalPipe } from '@angular/common';

export interface Movie {
    id: number;
    title: string;
    overview: string;
    tagline: string;
    budget: number;
    revenue: number;
    imdbUrl: string;
    tmdbUrl: string;
    posterUrl: string;
    backdropUrl: string;
    oridinalLanguage: string;
    releaseDate?: Date;
    runTime: number;
    price: number;
    createdDate: Date;
    updatedDate?: any;
    updatedBy?: any;
    createdBy?: any;
    movieGenres?: any;
    movieCrews?: any;
    movieCasts?: any;
    reviews?: any;
    purchases?: any;

    //movies: Movie;
}