export function getAllAlbums() {
    return {
        type:"GET_ALL_ALBUMS"
    }
}
export function deleteAlbum(albums) {
    return {
        type:"DELETE_ALBUM",
        payload:albums
    }
}
export function createAlbum(albums) {
    return {
        type:"CREATE_ALBUM",
        payload:albums
    }
}