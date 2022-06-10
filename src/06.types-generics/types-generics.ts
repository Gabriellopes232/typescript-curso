{
    // S => State
    // T => Type
    // K => key
    // V => Value
    // E => Element

    type numOrStr = number | string

    function useState<S extends numOrStr = string>(){
        let state: S;

        function getState(){
            return state;
        }

        function setState(newState:S){
            state = newState;
        }

        return{getState, setState}
    }
    const newState = useState()

    newState.setState('foo'); // e uma string
    console.log(newState.getState)

    newState.setState(`123`)// De erro
    console.log(newState.getState)
}