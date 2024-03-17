import styles from './ShopItemPageRender.module.scss'
import { useState } from 'react'
import FilterMenu from '@/components/UI/filterMenu/FilterMenu'

const ShopItemPageRender = () => {
    const [amount, setAmount] = useState<number>(0)
    const [currentFilter, setCurrentFilter] = useState<string>('')

    const increment = () => { setAmount(amount+1) }
    const decrement = () => { amount >= 0 && setAmount(amount-1) }

    const changeFilter = (title: string) => { setCurrentFilter(title) }

    return(
        <div className={styles.container}>
            <div className={styles.inner}>

                <div className={styles.images_container}>
                    <div className={styles.secondary_container}>
                        <div className={styles.secondary_image}>
                            <img src="/images/shop/product.png" alt="secondary_image" />
                        </div>
                        <div className={styles.secondary_image}>
                            <img src="/images/shop/product.png" alt="secondary_image" />
                        </div>
                    </div>

                    <img className={styles.main_image} src="/images/shop/product.png" alt="product" />
                </div>

                <div className={styles.info_container}>

                    <div className={styles.top}>
                        <div className={styles.category_container}>
                            <div className={styles.categories}>
                                <div className={styles.category_item}>Уход за волосами /</div>
                                <div className={styles.category_item}>Кудрявые волосы /</div>
                                <div className={styles.category_item}>Новинки</div>
                            </div>
                            <div>
                                <img src="/images/UI/favourite.png" alt="favourite" />
                            </div>
                        </div>
                        <div className={styles.title}>
                            Шампунь «Так и Ходи» для объёмных кудрей и волн с запахом кардамона
                        </div>
                        <div className={styles.text}>
                            Хорошо промывает, не пересушивает волосы и кожу головы даже в жёсткой воде, а ещё от него так и веет спокойствием. Не содержит сульфатов. Шампунь подойдет для всех типов кожи головы.
                        </div>
                        <div className={styles.filter}>
                            <FilterMenu filterListener={changeFilter} data={[{title: 'Состав'}, {title: 'Применение'}]}/>
                        </div>
                        <div className={styles.filter_container}>
                            <div className={styles.filter_title}> {currentFilter === 'Состав' ? 'Состав' : 'Применение'}</div>
                            <div className={styles.filter_text}>
                            {
                                currentFilter === 'Состав' ? 'Вода, кокамидопропил бетаин, натрия кокоил изетионат, каприлил каприл глюкозид, лаурил глюкозид, кокоглюкозид, глицерин, пищевой ароматизатор, морская соль, сорбат калия, бензоат натрия, гуар гидроксипропилтримоний хлорид, эфирное масло кардамона.' :
                                'ПрименениеПрименениеПрименениеПрименениеПрименениеПрименениеПрименениеПрименение'}
                            </div>
                        </div>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.cost_container}>
                            <div className={styles.current_cost}>5 050 &#x20bd;</div>
                            <div className={styles.prev_cost}>5 500 &#x20bd;</div>
                        </div>

                        <div className={styles.buttons_container}>
                            <div className={styles.amount_button}>
                                <button onClick={decrement} className={styles.decrement}>-</button>
                                <button className={styles.total}>{amount}</button>
                                <button onClick={increment} className={styles.increment}>+</button>
                            </div>
                            <button className={styles.addToCart_buttom}>
                                <div>Добавить в корзину</div>
                            </button>

                            
                        </div>
                        <div className={styles.declaration}>
                            <a href='#'>Торговая декларация</a>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    )
}

export default ShopItemPageRender