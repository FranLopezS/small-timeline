import { useState } from "react"

export function ButtonCounter({ nameIcon, defaultColor, selectedColor, size, initialCounter, solidIconSelected, titleSelected, titleNotSelected }) {
    const [counter, setCounter] = useState(initialCounter);
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected)
        if (selected) {
            setCounter(counter - 1)
        } else {
            setCounter(counter + 1)
        }
    }

    const colorIcon = (selected) ? selectedColor : defaultColor
    const typeIcon = (selected && solidIconSelected) ? 'solid' : 'regular'
    const titleIcon = (selected) ? titleSelected : titleNotSelected
    const counterIcon = (counter > 0) ? counter : ''

    return (
        <button className="flex justify-center gap-2" title={titleIcon} onClick={handleClick}>
            <box-icon name={nameIcon} type={typeIcon} color={colorIcon} size={size}></box-icon> {counterIcon}
        </button>
    )
}