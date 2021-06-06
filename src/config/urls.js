export const API_BASE_URL="https://api.themoviedb.org/3/movie";

export const getApiUrl=(endpoint)=>`${API_BASE_URL}${endpoint}`

export const MOVIES_API=getApiUrl("/{movie_id}");