import React from 'react'
import { connect } from 'react-redux'
import { TOGGLE_COLOR_WINDOW } from '../Actions/actions'

function ColorPicker({ color, dispatch }) {
    return (
        <div className="color-picker" style={{background: color}} onClick={() => dispatch({ type: TOGGLE_COLOR_WINDOW })}></div>
    )
}

const mapStateToProps = state => {
    const { color } = state
    return { color }
}

export default connect(mapStateToProps) (ColorPicker)
