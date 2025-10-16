import React, { useEffect, useState } from "react";
import LoadingSpiner from "../../components/LoadingSpiner/LoadingSpiner";
import AllApps from "../AllApps/AllApps";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/app.json") 
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setFilteredApps(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let results = apps.filter((app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === "high-low") results.sort((a, b) => b.downloads - a.downloads);
    else if (sortOrder === "low-high") results.sort((a, b) => a.downloads - b.downloads);

    setFilteredApps(results);
  }, [searchTerm, sortOrder, apps]);

  if (loading) return <LoadingSpiner />;

  return (
    <div className="apps-page w-11/12 mx-auto my-10">
      <div className="container">
        <div className="page-header text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#001931]">All Apps</h1>
          <p className="text-[#627382] mt-2">Discover amazing productivity applications</p>
        </div>

        <div className="apps-controls flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="apps-count mb-4 md:mb-0">
            <span className="font-semibold text-gray-600">{filteredApps.length} Apps Found</span>
          </div>

          <div className="controls-right flex items-center gap-3">
            <select
              className="border p-2 rounded-md"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Sort by Downloads</option>
              <option value="high-low">High - Low</option>
              <option value="low-high">Low - High</option>
            </select>

            <input
              type="text"
              placeholder="Search apps..."
              className="border p-2 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {filteredApps.map((app) => (
              <AllApps key={app.id} singleApp={app} />
            ))}
          </div>
        ) : (
          <div className="no-apps-found text-center mt-10">
            <h3>No Apps Found</h3>
            <p>Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
