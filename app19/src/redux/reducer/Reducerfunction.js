// let albums = [
//       {
//           "userId": 1,
//           "id": 1,
//           "title": "quidem molestiae enim"
//         },
//         {
//           "userId": 1,
//           "id": 2,
//           "title": "sunt qui excepturi placeat culpa"
//         },
//         {
//           "userId": 1,
//           "id": 3,
//           "title": "omnis laborum odio"
//         },
//         {
//           "userId": 1,
//           "id": 4,
//           "title": "non esse culpa molestiae omnis sed optio"
//         },
//         {
//           "userId": 1,
//           "id": 5,
//           "title": "eaque aut omnis a"
//         },
//         {
//           "userId": 1,
//           "id": 6,
//           "title": "natus impedit quibusdam illo est"
//         },
//         {
//           "userId": 1,
//           "id": 7,
//           "title": "quibusdam autem aliquid et et quia"
//         },
//         {
//           "userId": 1,
//           "id": 8,
//           "title": "qui fuga est a eum"
//         },
//         {
//           "userId": 1,
//           "id": 9,
//           "title": "saepe unde necessitatibus rem"
//         },
//         {
//           "userId": 1,
//           "id": 10,
//           "title": "distinctio laborum qui"
//         },

//     ]
  let albums = []
  const defaultValue = {
  // albums:albums
  //  albums:["A","B","C"]
  albums: albums
}
const Reducerfunction = (state = defaultValue, action) => {
  switch (action.type) {
    case "GET_ALL_ALBUMS":
      return defaultValue.albums
    case "DELETE_ALBUM":
      // let newAlbums=[...state]
      // newAlbums.pop()
      // return newAlbums
      let newAlbums = [...state]
      return newAlbums.filter((album) => album !== action.payload)
    case "CREATE_ALBUM":
      let newAlbum = [...state]
      newAlbum.push(action.payload)
      return newAlbum

    default:
      return defaultValue.albums
  }
}
export default Reducerfunction