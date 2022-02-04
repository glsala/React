import Item from './Item'

function List() {
    return (
        <>
            <h1>My List</h1>
            <Item brand="Ferrari" year={1985} />
            <Item brand="Fiat" year={1964} />
        </>
    )
    
}
export default List