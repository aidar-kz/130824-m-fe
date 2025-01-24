/**
НЕСКОЛЬКО ПЕРЕМЕННЫХ СОСТОЯНИЯ В КОМПОНЕНТЕ
Вы можете иметь сколько угодно переменных состояния различных типов в одном компоненте. 
*/
import { useState } from "react";

/**
 * У компонента Gallery есть две переменные состояния: 
 * - число index 
 * - и логическое значение showMore, которое переключается 
 *   между true и false при нажатии на кнопку "Показать описание".
 */
export default function Gallery({ gallery }) {
    const [index, setIndex] = useState(0)
    const [showDesc, setShowDesc] = useState(false)

    const handleNextClick = () => setIndex(index + 1);
    const handleDescClick = () => setShowMore(!showDesc);

    let itemObj = gallery[index]

    return (
        <>
            <button onClick={handleClick}>Дальше</button>

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

/**
Если стейт-переменные не связаны между собой (index и showMore),
то можно и нужно использовать несколько переменных состояния.
Но если вы обнаружите, что часто изменяете две переменные вместе, 
то возможно будет проще объединить их в одну переменную состояния.

Например, если у вас есть форма со множеством полей, 
то наверное удобнее иметь одну переменную состояния, 
которая содержит один объект со всеми полями формы, 
чем отдельную переменную состояния для каждого поля. 
 */
