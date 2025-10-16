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

        console.log("Installed")
        alert("already exist ")
    }
    else {
        storedAppData.push(id);
        
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("apps",data)

    }

}


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