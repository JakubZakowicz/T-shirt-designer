import React from 'react';
import TShirtFront from '../images/t-shirt_front_1.png';
import TShirtBack from '../images/t-shirt_back_1.png';
import ColorPickerWindow from './ColorPickerWindow';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import { CHANGE_SIDE } from '../Actions/actions';

function Display(props) {
  return (
    <div className="display position-relative">
      <div className="side-buttons">
        <button
          className="app-btn side-btn"
          onClick={() => props.changeSide(true)}
        >
          Front
        </button>
        <button
          className="app-btn side-btn mt-1"
          onClick={() => props.changeSide(false)}
        >
          Back
        </button>
      </div>
      <div className="center">
        <div className="position-relative">
          <img
            src={`${props.frontSide ? TShirtFront : TShirtBack}`}
            alt="t-shirt"
            width="700"
            draggable="false"
          />
          <div className="t-shirt-square">
            <div className="position-relative">
              <Draggable bounds="parent">
                <h1
                  style={{
                    color: props.color,
                    fontFamily: props.fontFamily,
                    fontSize: props.fontSize + 'px',
                    fontWeight: props.fontWeight,
                    textAlign: props.align,
                  }}
                  tabIndex="0"
                >
                  {props.text}
                </h1>
              </Draggable>
            </div>
          </div>
        </div>
      </div>

      <ColorPickerWindow />
    </div>
  );
}

const mapStateToProps = state => {
  const { color, text, fontFamily, fontSize, fontWeight, align, frontSide } =
    state;
  return { color, text, fontFamily, fontSize, fontWeight, align, frontSide };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSide: value => dispatch({ type: CHANGE_SIDE, payload: { value } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
