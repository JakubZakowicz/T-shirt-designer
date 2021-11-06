import { 
    TOGGLE_COLOR_WINDOW, 
    CHANGE_COLOR,
    CHANGE_TEXT,
    CHANGE_FONT_FAMILY,
    CHANGE_FONT_SIZE,
    CHANGE_FONT_WEIGHT,
    CHANGE_ALIGNMENT,
    CHANGE_SIDE
} from '../Actions/actions'

const initialStore = {
    text: 'Ale zajebista koszulka',
    FontFamily: 'Arial',
    fontSize: '60',
    fontWeight: '500',
    color: '#000',
    align: 'center',
    isColorWindow: false,
    frontSide: true
}

const reducer = (state = initialStore, action) => {
    switch(action.type) {
        case TOGGLE_COLOR_WINDOW:
            return { ...state, isColorWindow: !state.isColorWindow }
        case CHANGE_COLOR:
            return { ...state, color: action.payload.value }
        case CHANGE_TEXT:
            return { ...state, text: action.payload.value }
        case CHANGE_FONT_FAMILY:
            return { ...state, fontFamily: action.payload.value }
        case CHANGE_FONT_SIZE:
            return { ...state, fontSize: action.payload.value }
        case CHANGE_FONT_WEIGHT:
            return { ...state, fontWeight: action.payload.value }
        case CHANGE_ALIGNMENT:
            return { ...state, align: action.payload.value }
        case CHANGE_SIDE:
            return { ...state, frontSide: action.payload.value }
        default :
            return state
    }
}

export default reducer