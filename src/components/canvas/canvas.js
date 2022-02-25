import React from 'react'
import Box from '../box/box'
import './canvas.css'

export default function Canvas({ boxes, deleteAction, isDisabled, initialPosition }) {
    return (
        <div className="canvas">
            {boxes.map((box) => {
                return <Box id={box.id} key={box.id} deleteAction={deleteAction} isDisabled={isDisabled} initialPosition={initialPosition} />
            })}
        </div>
    )
}
