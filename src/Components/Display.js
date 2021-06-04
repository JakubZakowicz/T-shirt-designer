import React from 'react'
import TShirt from '../images/t-shirt_front_white.png'
import ColorPickerWindow from './ColorPickerWindow'
import { connect } from 'react-redux'
import Draggable from 'react-draggable';

function Display({ color, text, fontFamily, fontSize, fontWeight, align }) {
    return (
        <div className="display position-relative">
            <div className="side-buttons">
                <button className="app-btn side-btn">Front</button>
                <button className="app-btn side-btn mt-1">Back</button>
            </div>
            <div className="center">
                <div className="position-relative">
                    <img src={TShirt} alt="t-shirt" width="700" draggable="false" />
                    <div className="t-shirt-square">
                        <div className="position-relative">
                            <Draggable bounds="parent">
                                <h1
                                    style={{
                                        color: color,
                                        fontFamily: fontFamily,
                                        fontSize: fontSize + 'px',
                                        fontWeight: fontWeight,
                                        textAlign: align
                                    }}
                                    tabIndex="0"
                                >{text}</h1>
                            </Draggable>
                        </div>
                    </div>
                </div>
            </div>
            
            <ColorPickerWindow />
        </div>
    )
}

const mapStateToProps = state => {
    const { color, text, fontFamily, fontSize, fontWeight, align } = state
    return { color, text, fontFamily, fontSize, fontWeight, align }
}

export default connect(mapStateToProps) (Display)
