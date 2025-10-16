import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../hook/addToDB';

const InstalledApp = () => {
const data =useLoaderData();

console.log(data)








//  const [readList, setReadList] = useState([])
//     const [sort, setSort] = useState("");

//     const data = useLoaderData();
    

    useEffect(() => {
        const storedAppData = getStoredApp();
        const ConvertedStoredApps = storedAppData.map(id => parseInt(id))
        const myInstalation = data.filter(app => ConvertedStoredApps.includes(app.id));
        // setReadList(myInstalation)
        console.log(myInstalation)
    }, [])

// const handleSort = (type) => {
//         setSort(type)
//         if (type === "pages") {
//             const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
//             setReadList(sortedByPage)
//             console.log(sortedByPage)
//         }
//         if (type === "ratings") {
//             const sortedByrating = [...readList].sort((a, b) => a.rating - b.rating);
//             setReadList(sortedByrating)
//         }

// }








    return (
        <div>
            <h1>fdmfsfsfdsds.ses</h1>
        </div>
    );
}

export default InstalledApp;




// import React, { useEffect, useState } from 'react';
// import LoadingSpiner from '../../components/LoadingSpiner/LoadingSpiner';
// import { toast } from 'react-toastify';

// const InstalledApp = () => {
// const [installedApps, setInstalledApps] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [sortBy, setSortBy] = useState('');

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       loadInstalledApps();
//       setLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   const loadInstalledApps = () => {
//     const apps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    
//     if (sortBy === 'size-high') {
//       apps.sort((a, b) => b.size - a.size);
//     } else if (sortBy === 'size-low') {
//       apps.sort((a, b) => a.size - b.size);
//     }
    
//     setInstalledApps(apps);
//   };

//   useEffect(() => {
//     loadInstalledApps();
//   }, [sortBy]);

//   const handleUninstall = (appId) => {
//     const updatedApps = installedApps.filter(app => app.id !== appId);
//     setInstalledApps(updatedApps);
//     localStorage.setItem('installedApps', JSON.stringify(updatedApps));
//     toast.success('App uninstalled successfully!');
//   };

//   const handleSortChange = (e) => {
//     setSortBy(e.target.value);
//   };

//   if (loading) {
//     // return <LoadingSpinner />;
//     return <LoadingSpiner />;
//   }

//     return (
//         <div>
//              <div className="installation-page">
//       <div className="container">
//         <div className="page-header">
//           <h1>Your Installed Apps</h1>
//           <p>Explore All Trending Apps on the Market developed by us</p>
//         </div>

//         <div className="installation-controls">
//           <div className="apps-count">
//             <span>{installedApps.length} Apps Found</span>
//           </div>
          
//           <select 
//             className="sort-select" 
//             value={sortBy} 
//             onChange={handleSortChange}
//           >
//             <option value="">Sort By Size</option>
//             <option value="size-high">Large - Small</option>
//             <option value="size-low">Small - Large</option>
//           </select>
//         </div>

//         {installedApps.length > 0 ? (
//           <div className="installed-apps-list">
//             {installedApps.map(app => (
//               <div key={app.id} className="installed-app-card">
//                 <div className="app-info">
//                   <img src={app.image} alt={app.title} />
//                   <div className="app-details">
//                     <h3>{app.title}</h3>
//                     <div className="app-meta">
//                       <span>{(app.downloads / 1000000).toFixed(1)}M</span>
//                       <span>⭐ {app.ratingAvg}</span>
//                       <span>{app.size} MB</span>
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   className="uninstall-btn"
//                   onClick={() => handleUninstall(app.id)}
//                 >
//                   Uninstall
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="no-apps-installed">
//             <h3>No Apps Installed</h3>
//             <p>Install some apps to see them here</p>
//           </div>
//         )}
//       </div>
//     </div>
//         </div>
//     );
// }

// export default InstalledApp;
