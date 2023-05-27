

import FavoriteCard from "../components/FavoriteCard";
import PageTitle from "../components/PageTitle";



const Favorite = () => {
  
  return (
    <div>
      
      <PageTitle text="Favourite" />
      <div className="container" style={{display:"flex"}}>
      <FavoriteCard/>
      
      </div>
   
    </div>
  )
}

export default Favorite