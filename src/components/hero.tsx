//import css from './hero.css';
import './hero.css';
import { useState } from "react";

interface University {
    name: string;
    web_pages: string[];
    country: string;
}

function Hero() {
    const [data, setData] = useState<University[] | null>(null)
    const [loading, setLoading] = useState(false)
    // function to collect data from the search bar and return univerisities and website links only
    const Search = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.currentTarget)
        const country = formData.get('country') as string
        const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
        const data = await response.json();
        setData(data);
        setLoading(false);

  }


    return (
        <>
            <div className="hero container">
                <form onSubmit={Search}>
                    <input type="text" name="country" placeholder='Search country for univerities' />
                    <button type="submit" disabled={loading}>
                    {loading ? "Loading..." : "Search"}
                    </button>
                </form>
            </div>
            <div className="container">
                <p>{data && data.length > 0 ? `Found ${data.length} universities in ${data[0].country}` : "No results found, search again"}</p>
            </div>
            <div className="container result">
                {data && data.map((item, index) =>
                <p key={index}><a target="_blank" href={item.web_pages[0]}>{item.name}</a></p>)}
            </div>
            
        </>
    )
}

export default Hero