import styles from './FaceCareLine.module.scss'
import FaceCareItem from './faceCareItem/FaceCareItem'

const data = [
    {
        title: 'Чем отличается пилинг Джесснера от White',
        image: './images/faceCare/lineItem1.png'
    },
    {
        title: 'Чем отличается пилинг Джесснера от White',
        image: './images/faceCare/lineItem2.png'
    },
    {
        title: 'Что такое PRX-t33',
        image: './images/faceCare/lineItem1.png'
    },
    {
        title: 'Чем отличается пилинг Джесснера от White',
        image: './images/faceCare/lineItem2.png'
    },
    {
        title: 'Что такое PRX-t33',
        image: './images/faceCare/lineItem1.png'
    },
]

const FaceCareLine = () => {
    return(
        <div className={styles.container}>
            <div className={styles.line}>
                {
                    data.map((item, index) => {                       
                        return(
                            <FaceCareItem
                                title={item.title}
                                image={item.image}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FaceCareLine