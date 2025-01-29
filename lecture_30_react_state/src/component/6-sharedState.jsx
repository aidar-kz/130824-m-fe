/**
 * Что если вы хотите, чтобы обе галереи синхронизировали свои состояния? 
 * Правильный способ сделать это в React:
 *   1. Удалить состояние из дочерних компонентов.
 *   2, И добавить его к их ближайшему общему родительскому компоненту. 
 */
function Gallery({ gallery, index, showDesc, handlePrevClick, handleNextClick, handleDescClick }) {

    let itemObj = gallery[index]
    let isLast = index === gallery.length - 1 // true/false

    return (
        <>
            <button disabled={index === 0} onClick={handlePrevClick}>Назад</button>
            <button disabled={isLast} onClick={handleNextClick}>Дальше</button>

            <h1>{itemObj.name}</h1>
            <h3>{itemObj.artist}</h3>

            <h3>{index + 1} / {gallery.length}</h3>

            <button onClick={handleDescClick}>{showDesc ? 'Скрыть' : 'Показать'} описание</button>

            <div style={{ marginTop: '20px' }}>
                {showDesc && <p>{itemObj.description}</p>}
                <img src={itemObj.url} alt={itemObj.description} width="200" />
            </div>
        </>
    )
}

export default Gallery