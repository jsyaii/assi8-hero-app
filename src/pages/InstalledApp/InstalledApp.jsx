import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../hook/addToDB";
import { FaStar } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import AllApps from "../AllApps/AllApps";
import { ToastContainer } from "react-toastify";
import LoadingSpiner from "../../components/LoadingSpiner/LoadingSpiner";
import Swal from "sweetalert2";
import { removeInstalledApp } from "../../hook/addToDB"; 

const InstalledApp = () => {
  const [instalation, setInstalation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState(null); 
  const data = useLoaderData();

  
  useEffect(() => {
    setIsLoading(true);
    const storedAppData = getStoredApp(); // returns IDs
    const convertedIds = storedAppData.map((id) => parseInt(id));
    const myInstalledApps = data.filter((app) =>
      convertedIds.includes(app.id)
    );
    setInstalation(myInstalledApps);
    setIsLoading(false);
  }, [data]);

  // ✅ Handle Sorting by Downloads
  const handleSort = (isLowToHigh) => {
    setSortOrder(isLowToHigh ? "low" : "high");

    const sortedApps = [...instalation].sort((a, b) => {
      if (isLowToHigh) return a.downloads - b.downloads;
      else return b.downloads - a.downloads;
    });

    setInstalation(sortedApps);
  };

  // ✅ Handle Uninstall (integrated with your removeInstalledApp)
  const handleUninstall = (id, title) => {
    Swal.fire({
      title: "Uninstall App",
      text: "Do you want to uninstall this app?",
      icon: "question",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "Not now",
    }).then((result) => {
      if (result.isConfirmed) {
        removeInstalledApp(id); // calls your util
        setInstalation((prev) => prev.filter((app) => app.id !== id)); // updates UI
        Swal.fire("Uninstalled!", `The app "${title}" has been uninstalled.`, "success");
      } else if (result.isDenied) {
        Swal.fire("The app's uninstallation was canceled.", "", "info");
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="text-center my-10">
        <h1 className="text-[#001931] text-3xl md:text-5xl font-bold">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Header and Sort */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-[#001931]">
          Total Installed Apps: {instalation.length}
        </h2>

        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Downloads
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={() => handleSort(true)}>Low to High</button>
            </li>
            <li>
              <button onClick={() => handleSort(false)}>High to Low</button>
            </li>
          </ul>
        </div>
      </div>

      <ToastContainer />

      {/* Loading Spinner or App List */}
      {isLoading ? (
        <LoadingSpiner />
      ) : instalation.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">No apps installed yet.</p>
      ) : (
        <ul className="w-11/12 mx-auto my-4">
          {instalation.map((app) => (
            <li
              key={app.id}
              className="flex justify-between items-center bg-base-100 p-2 md:p-4 rounded-lg shadow-md mb-4"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-16 h-16 rounded-md"
              />
              <p>{app.title}</p>

              <div className="flex items-center gap-1 md:gap-2 mt-1">
                <p className="text-sm text-[#00D390] flex items-center gap-1">
                  <HiOutlineDownload />
                  <span>{app.downloads_millions}</span>
                </p>

                <p className="text-sm text-[#FF8811] flex items-center gap-1">
                  <FaStar /> <span>{app.ratingAvg}</span>
                </p>
                <p className="text-sm text-gray-500">{app.size} MB</p>
              </div>

              <button
                className="mt-4 btn btn-success text-white border-none"
                onClick={() => handleUninstall(app.id, app.title)}
              >
                Uninstall
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InstalledApp;
