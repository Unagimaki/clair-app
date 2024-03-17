import { FC } from 'react'
import styles from './FaceContainer.module.scss'
import FaceCareItem from './faceCareItem/FaceCareItem'
import { IProcedure } from '@/types/procedure.interface'

interface props {
    data: Array<IProcedure>
}

const FaceCareContainer: FC<props> = ({data}) => {

    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.text}>
                    Профессиональный уход за лицом и за телом.
                    Это обширное понятие, под которым подразумевается разглаживание мелких морщинок,
                    коррекция формы бровей,
                    выравнивание цвета лица, восковая депиляция.
                </div>
                <div className={styles.items_container}>
                    <div className={styles.items_list}>
                        {
                            data.map(item => {
                                return(
                                    <FaceCareItem
                                        title={item.title}
                                        text={item.text}
                                        cost={item.cost}
                                        key={item.id}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={styles.button_container}>
                        <button className={styles.button}>
                            <div className={styles.button_text}>Перейти к записи</div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FaceCareContainer