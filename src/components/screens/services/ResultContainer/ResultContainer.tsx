import ResultRender from "./ResultRender/ResultRender"
import styles from './ResultContainer.module.scss'

interface item {
    title: string,
    subtitle: string,
    cost: number,
    variants: Array<string>
}
const data: item[] = [
    {
        title: 'Название',
        subtitle: 'Описание',
        cost: 1000,
        variants: ['HydraFacial', 'Icoone Laser', 'OnMacabim']
    },
    {
        title: 'Название',
        subtitle: 'Описание',
        cost: 1000,
        variants: ['HydraFacial', 'Icoone Laser', 'OnMacabim']
    },
    {
        title: 'Название',
        subtitle: 'Описание',
        cost: 1000,
        variants: ['HydraFacial', 'Icoone Laser', 'OnMacabim']
    },
    {
        title: 'Название',
        subtitle: 'Описание',
        cost: 1000,
        variants: ['HydraFacial', 'Icoone Laser', 'OnMacabim']
    },
    {
        title: 'Название',
        subtitle: 'Описание',
        cost: 1000,
        variants: ['HydraFacial', 'Icoone Laser', 'OnMacabim']
    },
]

const ResultContainer = () => {
    return(
        <div className={styles.container}>
            {
                <ResultRender data={data}/>
            }
        </div>
    )
}


export default ResultContainer