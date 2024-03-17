import SearchResultRender from "./SearchResultRender"

const data = [
    {
        title: 'Эстетическая косметология'
    },
    {
        title: 'Терапевтическая косметология'
    },
    {
        title: 'Перманентный макиях'
    },
    {
        title: 'Уход за ресницами'
    },
    {
        title: 'Уход за бровями'
    },
    {
        title: 'Makeup'
    },
    {
        title: 'Пирсинг'
    },
]

const SearchResultContainer = () => {
    return(
        <div>
            <SearchResultRender
                data={data}
            />
        </div>
    )
}

export default SearchResultContainer