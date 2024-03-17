import { FC, useState } from 'react'
import styles from './FaceMasterItem.module.scss'
import FaceMasterInfo from '../faceMasterInfo/FaceMasterInfo'
import { IMasterItem } from '@/types/master.interface'


const FaceMasterItem: FC<IMasterItem> = (props) => {
    const {name, profession, image, surname, adress, favorite, description, procedures, qualification} = props
    const [visibleMaster, setvisibleMaster] = useState(false)

    const showMaster = () => {
        setvisibleMaster(!visibleMaster)
        document.body.style.overflow = document.body.style.overflow == 'hidden' ? 'visible' : 'hidden'
    }

    return(
        <div className={styles.container}>
            { visibleMaster && <FaceMasterInfo showMaster={showMaster} qualification={qualification} procedures={procedures} image={image} favorite={favorite} name={name} surname={surname} profession={profession} description={description}/> }
            <img className={styles.favourite_icon} src= {favorite ? "./images/masters/favourite-fill.png" : "./images/masters/favourite.png"}  alt="favourite_icon" />
            <div onClick={showMaster} className={styles.inner}>
                <div className={styles.image_container}>
                    <img src={image} alt="master" />
                </div>
                <div className={styles.info_container}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.profession}>{profession}</div>
                    {
                        adress &&
                        <div className={styles.adress_container}>
                            <img src='./images/faceCare/adress_icon.svg' alt="adress_icon" />
                            <div className={styles.adress}>{adress}</div>
                        </div>                    
                    }
                </div>
            </div>
        </div>
    )
}


export default FaceMasterItem