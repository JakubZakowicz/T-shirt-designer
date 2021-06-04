import React from 'react'
import { connect } from 'react-redux'
import { CHANGE_COLOR } from '../Actions/actions'
import { SketchPicker } from 'react-color'

function ColorPickerWindow({ color, isColorWindow, dispatch }) {
    return (
        <>
        { isColorWindow
            ? <SketchPicker color={color} onChange={updatedColor => dispatch({ type: CHANGE_COLOR , payload: { value: updatedColor.hex }})} />
            : <></>
        }
        </>
    )
}

const mapStateToProps = (state) => {
    const { color, isColorWindow } = state
    return { color, isColorWindow }
}


export default connect(mapStateToProps) (ColorPickerWindow)
