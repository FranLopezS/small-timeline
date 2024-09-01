import { useState } from "react"

export function ButtonWithoutCounter({ nameIcon, defaultColor, selectedColor, size, solidIconSelected, titleSelected, titleNotSelected }) {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected)
    }

    const colorIcon = (selected) ? selectedColor : defaultColor
    const typeIcon = (selected && solidIconSelected) ? 'solid' : 'regular'
    const titleIcon = (selected) ? titleSelected : titleNotSelected

    return (
        <button className="flex justify-center gap-2" title={titleIcon} onClick={handleClick}>
            <box-icon name={nameIcon} type={typeIcon} color={colorIcon} size={size}></box-icon>
        </button>
    )
}