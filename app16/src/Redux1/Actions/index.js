export default function reducercomp(state,Actions) {
    switch (Actions.type) {
        case "GET_ALL_USERS":
            return "HELLO Users"
        case "GET_ALL_DETAILS":
            return "Hello Details"


        default:
            return "Hello AllUsers"
    }
}