import React from 'react';
import { Link } from 'react-router';



const AllApps = ({singleApp}) => {


   const {
    id,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads_millions,
    image,
    largeDescription,
  } = singleApp || {};




  //  <Link to={`/apps/:id}`}></Link>
  
  return (
    <div className="w-11/12 mx-auto my-10">
      {/* <Link to={`/apps/:id}`}> */}
      <Link to={`/apps/${id}`}>
      
      <div className="app-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="app-card-content">
        <h3>{title}</h3>
        <div className="card-actions justify-between">
          <span>⬇️ {(downloads_millions / 1000000).toFixed(1)}M</span>
          <span>⭐ {ratingAvg}</span>
        </div>
      </div>
    </Link>
      
    </div>
      
   
      
  );
}

export default AllApps;



