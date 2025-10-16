import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp, removeInstalledApp } from "../../hook/addToDB";
import { FaStar } from "react-icons/fa6";
import AllApps from "../AllApps/AllApps";
import { ToastContainer } from "react-toastify";
import LoadingSpiner from "../../components/LoadingSpiner/LoadingSpiner";
import { HiOutlineDownload } from "react-icons/hi";
import Swal from "sweetalert2";

const InstalledApp = () => {
  const [instalation, setInstalation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState(null); // "low" or "high"
  const data = useLoaderData();

  // ✅ Load Installed Apps
  useEffect(() => {
    setIsLoading(true);
    const storedAppData = getStoredApp();
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






 const handleUninstall = (id) => {
    
      Swal.fire({
        title: "Uninstall App",
        text: "Do you want to uninstall this app?",
        icon: "question",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Yes",
        denyButtonText: "Not now",
      }).then((result) => {
        if (result.isConfirmed) {
          removeInstalledApp(id);
          setUninstalled(!uninstalled);
          Swal.fire(
            "Uninstalled!",
            `The app ${title} has been uninstalled.`,
            "success"
          );
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

      {/* Loading Spinner */}
      {isLoading ? (
        <LoadingSpiner />
      ) :
       (









    //    <div className="w-11/12 mx-auto my-4">
    //     <div className="flex justify-between items-center bg-base-100 p-2 md:p-4 rounded-lg shadow-md mb-4">
    //       <Link to={`/apps/${app.id}`}>
    //         <div className="flex items-center gap-4">
    //           <img
    //             src={image}
    //             alt={title}
    //             className="w-16 h-16 rounded-md"
    //           />
    //           <div>
    //             <p>{title}</p>
    //             <div className="flex items-center gap-1 md:gap-2 mt-1">
    //               <p className="text-sm text-[#00D390] flex items-center gap-1">
    //                 <HiOutlineDownload />
    //                 <span>
    //                   {downloads_millions / 1000 >= 1
    //                     ? `${downloads_millions / 1000} B`
    //                     : `${downloads_millions / 100} M`}
    //                 </span>
    //               </p>
    //               <p className="text-sm text-[#FF8811] flex items-center gap-1">
    //                 <FaStar /> <span>{ratingAvg}</span>
    //               </p>
    //               <p className="text-sm text-gray-500">{size} MB</p>
    //             </div>


    //           </div>
    //         </div>
    //       </Link>
    //       <button
    //         onClick={() => handleUninstall(app.id)}
    //         className="btn btn-success text-white border-none"
    //       >
    //         Uninstall
    //       </button>
    //     </div>
    //   </div>
 




















//  

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
                     <span>
                       {app.downloads_millions}

                        
                    </span>
                  </p>








                  <p className="text-sm text-[#FF8811] flex items-center gap-1">
                    <FaStar /> <span>{app.ratingAvg}</span>
                  </p>
                  <p className="text-sm text-gray-500">{app.size} MB</p>
                </div>





      <button
        className="mt-4 btn btn-success text-white border-none"
        onClick={() => handleUninstall(app.id)}
      >
        Uninstall
      </button>
    </li>
  ))}
</ul>

      )
      }
    </div>
  );
};

export default InstalledApp;
