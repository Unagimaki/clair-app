import { datesData } from "@/data/dates"
import ProfileDatesRender from "./profileDatesRender/ProfileDatesRender"
import styles from './ProfileContainer.module.scss'

const ProfileDatesContainer = () => {
    return(
        <div className={styles.container}>
            <ProfileDatesRender data={datesData}/>
        </div>
    )
}

export default ProfileDatesContainer