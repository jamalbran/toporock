import Route from './Route';
import MyMap from './MyMap';
import Loader from './Loader';

const RouteList = (props) => {

  return(

    <div className="search-container">
      <div className= "map-container">
        <div className ="MyMap">
          {props.markers.length!==0? 
            <MyMap
              latitude = {props.latitude}
              longitude = {props.longitude}
              data = {props.data}
              markers = {props.markers}
            >
            </MyMap> : <Loader></Loader>
          }
        </div>
      </div>
        
      <div className="list-container">
        <p>The following routes are within a maximum of 160km from you.</p>
        <ul>
          {props.data&&props.data.map((routeObj) => 
            <Route
              key = {routeObj.id}
              title = {routeObj.name}
              photo = {routeObj.imgSmall}
              url = {routeObj.url}
              name = {routeObj.name}
              routeLat = {routeObj.latitude}
              routeLong = {routeObj.longitude}
              location = {routeObj.location}
              rating = {routeObj.rating}
              stars = {routeObj.stars}
              type = {routeObj.type}
            /> 
          )} 
        </ul>
      </div>

    </div>
  );
}

export default RouteList;