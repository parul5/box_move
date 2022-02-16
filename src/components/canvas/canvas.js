import React from 'react'
import Box from '../box/box'
import './canvas.css'

export default function Canvas({ boxes, deleteAction, isDisabled }) {
    return (
        <div className="canvas">
            {boxes.map((box, index) => {
                return <Box id={box.id} key={index} deleteAction={deleteAction} isDisabled={isDisabled} />
            })}
        </div>
    )
}
