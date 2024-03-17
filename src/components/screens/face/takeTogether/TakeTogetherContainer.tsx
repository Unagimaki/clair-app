import styles from './TakeTogetherContainer.module.scss'
import TakeTogetherRender from './takeTogetherRender/TakeTogetherRender'

const TakeTogetherContainer = () => {

    const data = [
        {
            title: 'Уход за кожей',
            description: 'Эстетическая косметология',
            cost: 1000,
            variants: ['HydraFacial', 'HydraFacial', 'HydraFacial']
        },
        {
            title: 'Уход за кожей',
            description: 'Эстетическая косметология',
            cost: 1000,
            variants: ['HydraFacial', 'HydraFacial', 'HydraFacial']
        },
        {
            title: 'Уход за кожей',
            description: 'Эстетическая косметология',
            cost: 1000,
            variants: ['HydraFacial', 'HydraFacial', 'HydraFacial']
        },
    ]

    return(
        <div>
            <TakeTogetherRender data={data}/>
        </div>
    )
}

export default TakeTogetherContainer