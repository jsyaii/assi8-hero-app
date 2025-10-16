import React, { useEffect, useState } from 'react';

import AllApps from '../AllApps/AllApps';
import LoadingSpiner from '../../components/LoadingSpiner/LoadingSpiner'; // Make sure this path is correct
import { Link } from 'react-router';

const TopAppSection = ({ data }) => {
  const [featuredApps, setFeaturedApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (data && data.length > 0) {
        const sortedApps = [...data]
          .sort((a, b) => b.downloads - a.downloads) // descending by downloads
          .slice(0, 8); 
        setFeaturedApps(sortedApps);
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [data]);

  if (loading) {
    return <LoadingSpiner />;
  }

  return (
    <div className="w-11/12 flex flex-col mx-auto my-20 items-center">
      <div className="text-center my-10">
        <h1 className="text-[#001931] text-5xl font-bold">Trending Apps</h1>
        <p className="text-[#627382] mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {featuredApps.map((singleApp) => (
          <AllApps key={singleApp.id || singleApp.appId} singleApp={singleApp} />
        ))}
      </div>

      {/* Optional: View All button */}

      <Link
        to={`/apps`}
        className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white border-none w-fit mt-10"
      >
        View All
      </Link>
    </div>
  );
};

export default TopAppSection;






