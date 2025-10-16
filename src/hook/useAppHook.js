import { useEffect, useState } from "react";

const useAppHook = () => { 
    const [apps, setApps] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApps = async () => {
            try {
                setLoading(true);
                const response = await fetch("/app.json"); // Make sure app.json is inside "public" folder
                if (!response.ok) {
                    throw new Error("Failed to fetch app data");
                }
                const data = await response.json();
                console.log(data);
                setApps(data);
            } catch (error) {
                console.error("Error fetching apps:", error);
                setError(error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };
        fetchApps();
    }, []);

    const [topApps, setTopApps] = useState([]);
    useEffect(() => {
        if (apps.length > 0) {
            const sortedApps = [...apps].sort(
              (a, b) => b.downloads_millions - a.downloads_millions
            );
            setTopApps(sortedApps.slice(0, 8));
        }
    }, [apps]);

    return { apps, error, loading, topApps };
};

export default useAppHook;
