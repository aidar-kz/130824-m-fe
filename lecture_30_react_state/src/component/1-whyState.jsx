export default function Gallery({ gallery }) {
    let index = 0;

    function handleClick() {
        index = index + 1
        console.log('index:', index);
    }

    let itemObj = gallery[index]
    return (
        <>
            <button onClick={handleClick}>Дальше</button>
            <h1>{itemObj.name}</h1>
            <h3>{itemObj.artist}</h3>
            <img src={itemObj.url} alt="" width="200" />
        </>
    )
}