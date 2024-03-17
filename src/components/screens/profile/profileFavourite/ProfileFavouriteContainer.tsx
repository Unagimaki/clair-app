import { shopData } from "@/data/shop"
import ProfileFavouriteRender from "./profileFavouriteRender/ProfileFavouriteRender"

const ProfileFavouriteContainer = () => {
    return(
        <div>
            <ProfileFavouriteRender data={shopData.filter(item => item.favourite)}/>
        </div>
    )
}

export default ProfileFavouriteContainer