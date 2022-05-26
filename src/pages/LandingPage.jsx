import { MovieGrid } from "../components/MovieGrid";
import { Search } from "../components/Search";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPage(){

    const query = useQuery();
    const search = query.get("search");
    const searchDebounce = useDebounce(search , 300)

    return (
        <>
            <Search></Search>
            <MovieGrid key={searchDebounce} search={searchDebounce}></MovieGrid>
        </>
    )
}