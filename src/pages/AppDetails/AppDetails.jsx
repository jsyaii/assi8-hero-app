import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import {  toast, ToastContainer } from 'react-toastify';
import AppStatisticChart from '../../components/AppChart/AppStatisticChart';
import { addToStoredDB } from '../../hook/addToDB';
// import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {


//  const {id} = useParams();
//   const [installed, setInstalled] = useState(false);

//   const { apps, error, loading } = useAppHook();
//   const app = apps.find((app) => app.id === Number(id));
//   const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
//   useEffect(() => {
//     const isInstalled = installedApps.some(
//       (installedApp) => parseInt(installedApp.id) === parseInt(id)
//     );
//     console.log(isInstalled);
//     setInstalled(isInstalled);
//   }, [installedApps, id]);






const { id } = useParams();
    const appId = parseInt(id);
    // const data = useLoaderData();
    // const singleApp = data.find(apps => apps.id === appId);

    const data = useLoaderData() || []; // fallback to empty array
const singleApp = data.find(app => app.id === appId);

    // console.log(singleApp);
    // console.log(typeof id, data);
    const { title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads_millions,
    image,
    largeDescription} = singleApp || {};



  //   
  
//    const handleInstall = id => {
//         //  Store with Id
//         // where to store
//         // array or collection
//         // if book already exist  the show a  alart
//         //  if book not exist then push in the collection or array

//         // MySwal.fire({
//         //     title: "Good job!",
//         //     text: "You clicked the button!",
//         //     icon: "success"
//         //   });

//         // toast("Successfully Installed!")
//         addToStoredDB(id)
// }

// const handleInstall = (app) => {
//   addToStoredDB(app);
// };
const handleInstall = (id) => {
  // toast("Successfully Installed!")
  addToStoredDB(id);
  
};



    return (
 <div className="w-11/12 mx-auto my-10">
      <ToastContainer />
      <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-start">
        <figure>
          <img src={image} alt={title} className="w-80 h-80 object-contain" />
        </figure>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
          <p className="text-[14px] md:text-lg">{description}</p>
          <div className="mt-4 text-xs md:text-xl">
            <span className="font-semibold text-[#627382]">Developed by </span>{" "}
            <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">
              {companyName}
            </span>
          </div>
          <hr className="my-4 border-t border-gray-300" />
          <div className="flex flex-row items-start text-xs md:text-lg items-center mt-4">
            <div className="mt-2 flex-[2%]">
              <img src="../src/assets/icon-downloads.png" alt="Downloads" />
              <p className="font-semibold text-[#001931]">Downloads</p>{" "}
              <p className="font-extrabold text-[1.8rem] md:text-[2.5rem]">
                {downloads_millions / 1000 >= 1
                  ? `${downloads_millions / 1000} B`
                  : `${downloads_millions / 100} M`}
              </p>
            </div>
            <div className="mt-2 flex-[2%]">
              <img src="../src/assets/icon-ratings.png" alt="Rating" />
              <p className="font-semibold text-[#001931]">Rating</p>{" "}
              <p className="font-extrabold text-[1.8rem] md:text-[2.5rem]">
                {ratingAvg}
              </p>
            </div>
            <div className="mt-2 flex-1">
              <img src="../src/assets/icon-review.png" alt="Reviews" />
              <p className="font-semibold text-[#001931]">Reviews</p>{" "}
              <p className="font-extrabold text-[1.8rem] md:text-[2.5rem]">
                {reviews / 1000000} M
              </p>
            </div>
          </div>
          {/* <button
            className={`mt-6 btn w-full md:w-1/2 btn-success text-white border-none`}
            onClick={handleInstall}
            // disabled={installed}
          >
            {/* {installed ? "Installed" : `Install Now ( ${size} MB )`}
          Installed
          </button> */} 
          <button
  className="mt-6 btn w-full md:w-1/2 btn-success text-white border-none"
  onClick={() => handleInstall(id)}  
  // onClick={() => handleInstall(singleApp.id)}  
>
  Installed
</button>

        </div>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div>
        <p className="font-semibold text-[#001931] text-2xl mt-10">Ratings</p>
        {/* <AppStatisticChart /> */}
        <AppStatisticChart/>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div>
        <p className="font-semibold text-[#001931] text-2xl mt-10">
          Description
        </p>
        <p className="text-justify mt-4 text-[#627382]">{largeDescription}</p>
      </div>
    </div>

    );
}

export default AppDetails;
