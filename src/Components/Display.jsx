import { useState } from 'react';
import ColorPickerWindow from './ColorPickerWindow';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import { CHANGE_TEXT } from '../Actions/actions';

const sides = {
  front: 'front',
  back: 'back',
};

const colors = {
  white: 'white',
  red: 'red',
  black: 'black',
  blue: 'blue',
  green: 'green',
  purple: 'purple',
};

function Display(props) {
  const [side, setSide] = useState(sides.front);
  const [color, setColor] = useState(colors.white);

  Object.keys(colors).map(color => {
    return console.log(color);
  });

  return (
    <div className="display">
      <div className="side-buttons">
        <button
          className="app-btn side-btn"
          onClick={() => setSide(sides.front)}
        >
          Front
        </button>
        <button
          className="app-btn side-btn mt-1"
          onClick={() => setSide(sides.back)}
        >
          Back
        </button>
      </div>
      <div className="center">
        <div className="position-relative">
          <img
            src={`images/t-shirt_${color}_${side}.png`}
            alt="t-shirt"
            width="700"
            draggable="false"
          />
          <div className="t-shirt-square">
            <Draggable bounds="parent">
              <textarea
                style={{
                  color: props.color,
                  fontFamily: props.fontFamily,
                  fontSize: props.fontSize + 'px',
                  fontWeight: props.fontWeight,
                  textAlign: props.align,
                }}
                value={props.text}
                onChange={e => props.changeText(e.target.value)}
              />
            </Draggable>
          </div>
        </div>
      </div>
      <ColorPickerWindow />
      <div className="dots">
        {Object.keys(colors).map((color, index) => (
          <button
            key={index}
            className={`dot ${color}`}
            onClick={() => setColor(color)}
          ></button>
        ))}
      </div>
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
    changeText: value => dispatch({ type: CHANGE_TEXT, payload: { value } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
