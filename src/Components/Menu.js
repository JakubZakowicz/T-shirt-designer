import React from 'react';
import {
  AiOutlineAlignLeft,
  AiOutlineAlignCenter,
  AiOutlineAlignRight,
} from 'react-icons/ai';
import ColorPicker from './ColorPicker';
import { connect } from 'react-redux';
import {
  CHANGE_TEXT,
  CHANGE_FONT_FAMILY,
  CHANGE_FONT_SIZE,
  CHANGE_FONT_WEIGHT,
  CHANGE_ALIGNMENT,
} from '../Actions/actions';

function Menu(props) {
  const selectAlign = target => {
    let buttons = document.querySelectorAll('.add-text-prop button');
    buttons.forEach(button => {
      button.classList.remove('active');
    });

    buttons.forEach(button => {
      if (button.contains(target)) button.classList.add('active');
    });
  };

  return (
    <div className="menu p-3 ">
      <button className="app-btn w-100 p-1">Add Text</button>
      <div className="add-text-props position-relative">
        <div className="add-text-prop">
          <h6>Text:</h6>
          <input
            onChange={e => props.changeText(e.target.value)}
            className="menu-text-input"
            type="text"
            value={props.text}
            placeholder="Enter text"
          ></input>
        </div>
        <div className="add-text-prop">
          <h6>Font:</h6>
          <select
            onChange={e => props.changeFontFamily(e.target.value)}
            className="menu-text-input"
          >
            <option value="Arial, sans-serif">Arial</option>
            <option value="Times, Times New Roman, serif">
              Times New Roman
            </option>
            <option value="Helvetica, sans-serif">Helvetica</option>
            <option value="Tahoma, sans-serif">Tahoma</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="Andale Mono, monospace">Andale Mono</option>
            <option value="Courier New, monospace">Courier New</option>
            <option value="Comic Sans MS, Comic Sans, cursive">
              Comic Sans MS
            </option>
            <option value="Impact, fantasy">Impact</option>
          </select>
        </div>
        <div className="add-text-prop">
          <h6>Font size:</h6>
          <input
            onChange={e => props.changeFontSize(e.target.value)}
            className="menu-text-input"
            type="number"
            min="1"
            max="150"
            value={props.fontSize}
            placeholder="Set font size"
          ></input>
        </div>
        <div className="add-text-prop">
          <h6>Font weight:</h6>
          <select
            onChange={e => props.changeFontWeight(e.target.value)}
            className="menu-text-input"
          >
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500" selected>
              500
            </option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
          </select>
        </div>
        <div className="add-text-prop">
          <h6>Alignment:</h6>
          <div>
            <button
              onClick={e => selectAlign(e.target, props.changeAlign('start'))}
              className="align-btn"
            >
              <AiOutlineAlignLeft className="align-icon" />
            </button>
            <button
              onClick={e => selectAlign(e.target, props.changeAlign('center'))}
              className="align-btn active"
            >
              <AiOutlineAlignCenter className="align-icon" />
            </button>
            <button
              onClick={e => selectAlign(e.target, props.changeAlign('end'))}
              className="align-btn"
            >
              <AiOutlineAlignRight className="align-icon" />
            </button>
          </div>
        </div>
        <div className="add-text-prop position-relative">
          <h6>Text color:</h6>
          <ColorPicker />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  const { text, changeFontFamily, fontSize, fontWeight } = state;
  return { text, changeFontFamily, fontSize, fontWeight };
};

const mapDispatchToProps = dispatch => {
  return {
    changeText: value => dispatch({ type: CHANGE_TEXT, payload: { value } }),
    changeFontFamily: value =>
      dispatch({ type: CHANGE_FONT_FAMILY, payload: { value } }),
    changeFontSize: value =>
      dispatch({ type: CHANGE_FONT_SIZE, payload: { value } }),
    changeFontWeight: value =>
      dispatch({ type: CHANGE_FONT_WEIGHT, payload: { value } }),
    changeAlign: value =>
      dispatch({ type: CHANGE_ALIGNMENT, payload: { value } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
