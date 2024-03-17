import { FC, useState } from 'react'
import styles from './FaceMasterInfo.module.scss'
import { IMasterItem } from '@/types/master.interface'
import FaceCareItem from '../../faceCare/faceCareItem/FaceCareItem';

type props = IMasterItem & {
    showMaster: () => void;
}


const FaceMasterInfo: FC<props> = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const {favorite, image, name, surname, profession, description, showMaster, procedures, qualification} = props
    
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.card_container}>
                    <div className={styles.card_inner}>
                        <div className={styles.card_header}>
                            <div className={styles.header_title}>О мастере</div>
                            <button onClick={showMaster} className={styles.close_button}/>
                        </div>
                        <div className={styles.image}>
                            <img className={styles.master_image} src={image} alt="master_photo"/>
                            <img className={styles.favourite} src={`/images/masters/${favorite ? 'favourite-fill' : 'favourite'}.png`} alt="" />
                        </div>
                        <div className={styles.name}>{name} {surname}</div>
                        <div className={styles.profession}>{profession}</div>

                        <div onClick={() => setIsOpen(!isOpen)} style={{maxHeight: `${!isOpen ? '144px' : 'min-content'}`}} className={styles.card_info}>

                            <div className={styles.description}>{description}</div>
                            <div className={styles.services_title}>Услуги</div>
                            <div className={styles.services_text}>Услуги, которые делает мастер {name}</div>
                            <div className={styles.services_list}>
                                {
                                    procedures?.map(item => {
                                        return(
                                            <FaceCareItem
                                                cost={item.cost}
                                                text={item.text}
                                                title={item.title}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <div className={styles.qualification_title}>Квалификация</div>
                            <div className={styles.qualification_list}>
                                { qualification?.map(item => <div className={styles.qualification_item}>{item.text}</div>) }
                            </div>

                        </div>

                    </div>
                    <button className={styles.date_button}>Записаться к мастеру</button>
                </div>
            </div>
        </div>
    )
}

export default FaceMasterInfo