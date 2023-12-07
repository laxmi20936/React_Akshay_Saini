import { useState, useEffect } from "react";

const useOnline = () => {
    console.log('Render onlie');
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    console.log("useEffect online");

    window.addEventListener("online", () => {
      console.log("true called");
      setOnlineStatus(true);
      console.log("true called");
    });

    window.addEventListener("offline", function () {
      setOnlineStatus(false);
      console.log("false called");
    });
  }, []);
  return onlineStatus;
};

export default useOnline;
