export default function Reducer(state = { login: [] }, action) {
    switch (action.type) {
        case "Login User Details":
            console.log('login user detailsssss', action.data)
            return{
                ...state,
                data: action.data
            }
        default:
        }
    }