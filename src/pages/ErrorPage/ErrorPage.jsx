import React from 'react';

const ErrorPage = () => {
    return (
         <>
<div className='flex-grow flex flex-col items-center justify-center'>
 <img src="../src/assets/App-Error.png" alt="App Error" />
        <h1 className="text-5xl font-bold mt-4 text-center">
          OPPS!! APP NOT FOUND!
        </h1>
        <p className="text-center mt-4">
          The App you are requesting is not found on our system. please try
          another apps
        </p>

</div>
      </>
    );
}

export default ErrorPage;
