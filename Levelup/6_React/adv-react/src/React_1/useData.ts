
// hooks -> pure js function


// custom hook -> is a way to share logic
// it just encapsulate the data fetching
import { useState } from "react";
function useFetchData(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    async function fetcher() {
        try {
            setLoading(true);
            const resp = await fetch(url);
            const data = await resp.json();
            setData(data);
        } catch (err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }
    }
    fetcher();

    return { loading, data, error };
}