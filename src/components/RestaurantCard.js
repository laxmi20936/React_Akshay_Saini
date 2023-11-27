import {IMG_URL} from '../utils/constants'


const RestaurantCard = (props) => {
    const {resObj} = props
    console.log(resObj)
    const {name,cuisines,cloudinaryImageId,avgRating,sla,costForTwo} = resObj
      return(
        <div className="res-card">
            <img className='res-image' 
            src={IMG_URL + cloudinaryImageId} 
            alt="res-item"/>
            <h4>{name}</h4>
            <h4>{cuisines.join(', ')}</h4>
            {/* <h4>{cuisines.toString()}</h4> */}
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
      )
}

export default RestaurantCard