import { useState } from "react";
import Results from "./Results";

export default function SearchBar({items, onItemSelected}) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    function handleChange(e) {
        const value = e.target.value;
        setQuery(value);
    }

    function handleResults(items) {
        setResults(items);
    }

    return(
        <div>
            {results && <div>{results.length} results</div>}
            <input type="text" onChange={handleChange} value={query}/>
            <Results items={items} onItemSelected={onItemSelected} query={query} onResultsCalculate={handleResults}/>
        </div>
    );

}