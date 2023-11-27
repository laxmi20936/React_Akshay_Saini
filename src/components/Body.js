import RestaurantCard from "./RestaurantCard"
import restaurantsList from "../utils/mockData"

const Body = () =>{
    return(
        <div className='body'>
            <div className="search">
                <input type="text"/>
            </div>
            <div className="res-container">
              {restaurantsList.map(resItem => <RestaurantCard 
              key={resItem.info.id} resObj={resItem.info}/>)}
            </div>
        </div>
    )
}

export default Body;