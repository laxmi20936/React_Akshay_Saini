import { useState , useEffect } from "react";

const useRestaurantMenu = (resID) => {
    console.log("jjj")
   const [resMenu, setResMenu] = useState([]);
   console.log("use A", resMenu);

   useEffect(() => {
    console.log("useEffect called");
    const data = fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resID + "&catalog_qa=undefined&submitAction=ENTER"
    );
    data
      .then((data) => {
        return data.json();
      }).catch((err) => console.log(err))
      .then((value) => {
        console.log("ResMenu", value,);
        setResMenu(value?.data?.cards);
      })
      .catch((err) => console.log(err));
  }, []);


    return resMenu
}

export default useRestaurantMenu;