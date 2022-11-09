export default function reducedata(state,Action) {
  switch (Action.type) {
      case  "GET_ALL_FUNCTION":
        return "getAllfunction from users"

        case  "GET_ALL_Products":
            return "getAllProducts from users"

  
      default:
          return "GetAllusers from users"
  }
}