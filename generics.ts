// S => state
// T => type
// K => key
// V => value
// E => Element

function useState<S extends number | string = string> () {
    let state: S;

    function getState () {
        return state;
    }

    function setState(newState: S) {
        state = newState;
    }

    return { getState, setState };
}

const newState = useState();

// newState.setState(false);
// console.log(newState.getState());

newState.setState("foo");
console.log(newState.getState());

// newState.setState(123);
// console.log(newState.getState());

newState.setState("foo");
console.log(newState.getState());
