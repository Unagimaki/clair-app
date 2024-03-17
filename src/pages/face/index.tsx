import styles from './index.module.scss'
import Title from '@/components/UI/title/Title'
import FaceCareContainer from '@/components/screens/face/faceCare/FaceCareContainer'
import FaceCareLine from '@/components/screens/face/faceCareLine/FaceCareLine'
import FaceMastersContainer from '@/components/screens/face/faceMasters/FaceMastersContainer'
import TakeTogetherContainer from '@/components/screens/face/takeTogether/TakeTogetherContainer'
import ShowAll from '@/components/UI/showAll/ShowAll'
import TakeHomeContainer from '@/components/screens/face/takeHome/TakeHomeContainer'
import Header from '@/components/UI/header/Header'
import Footer from '@/components/UI/footer/Footer'
import { procedureData } from '@/data/procedures'
import SubTitle from '@/components/UI/subtitle/SubTitle'

const FacePage = () => {
    return(
        <section className={styles.main}>
            <div className={styles.container}>
                <Header/>
                <Title title='уходы за лицом'/>
                <FaceCareContainer data={procedureData}/>
                <FaceCareLine/>
                <SubTitle title='Кто делает'/>
                <FaceMastersContainer/>
                <SubTitle title='Возьмите вместе'/>
                <TakeTogetherContainer/>
                <ShowAll title='Все услуги'/>
                <TakeHomeContainer/>
                <ShowAll title='Магазин'/>
                <Footer/>
            </div>
        </section>
    )
}

export default FacePage