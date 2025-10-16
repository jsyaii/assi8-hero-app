import { toast } from "react-toastify";

const getStoredApp = () => {
    
    const storedAppSTR = localStorage.getItem("apps");

    if (storedAppSTR) {
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    }
    else {
        return [];
    }

}

const addToStoredDB = (id) => {
    
    const storedAppData = getStoredApp();

    if (storedAppData.includes(id)) {
// toast("successfully Installed!")
        console.log("hello")
        alert("bhai ei id already exist ")
    }
    else {
        storedAppData.push(id);
        // console.log(storedAppData);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("apps",data)

    }

}


// fauu
export const removeInstalledApp = (id) => {
    console.log(id);
  const previousInstalledApps = getInstalledApps();
    const remainingApps = previousInstalledApps.filter(
      (previousApp) => parseInt(previousApp.id) !== parseInt(id)
    );
    localStorage.setItem("installedApps", JSON.stringify(remainingApps));
    toast.success("App removed from installed list");
}

export { addToStoredDB,getStoredApp };