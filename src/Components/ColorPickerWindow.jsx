import { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { CHANGE_COLOR, TOGGLE_COLOR_WINDOW } from '../Actions/actions';
import { SketchPicker } from 'react-color';

function useOutsideAlerter(ref, dispatch) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch({ type: TOGGLE_COLOR_WINDOW });
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, dispatch]);
}

function ColorPickerWindow({ color, isColorWindow, dispatch }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, dispatch);
  return (
    <>
      {isColorWindow && (
        <div ref={wrapperRef}>
          <SketchPicker
            color={color}
            onChange={updatedColor =>
              dispatch({
                type: CHANGE_COLOR,
                payload: { value: updatedColor.hex },
              })
            }
          />
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => {
  const { color, isColorWindow } = state;
  return { color, isColorWindow };
};

export default connect(mapStateToProps)(ColorPickerWindow);
