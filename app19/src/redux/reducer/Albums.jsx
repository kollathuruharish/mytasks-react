import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAlbum, deleteAlbum, getAllAlbums } from './Action'


class Albums extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             albums:{
                 names:"",
                 age:"",
                 qualification:""
             }
        }
    }
    getAlbums=()=>{
          this.props.getAlbumData()
    }
    deleteAlbum=(album)=>{
        this.props.deleteAlbumData(album)
    }
    changeAlbum=(e)=>{
        let newAlbum={...this.state.albums}
        newAlbum[e.target.name]=e.target.value
        this.setState({albums:newAlbum})
    }
    createAlbum=()=>{
        this.props.createALbumData(this.state.albums)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <form> 
                    <label htmlFor="names">Name</label> <br />
                    <input type="text" name="names" value={this.state.names} onChange={(e)=>{this.changeAlbum(e)}} /> <br />
                    <label htmlFor="age">Age</label> <br />
                    <input type="text" name="age" value={this.state.age}  onChange={(e)=>{this.changeAlbum(e)}}/> <br />
                    <label htmlFor="qualification">Qualification</label> <br />
                    <input type="text" name="qualification" value={this.state.qualification}  onChange={(e)=>{this.changeAlbum(e)}}/> <br />
                    <button onClick={this.createAlbum} type='button'>Submit</button>
                </form>
                {/* <button onClick={this.getAlbums}>Click to view Album Data</button>
                <button onClick={this.deleteAlbum}>Delete Data</button> */}
                {this.props.albums && this.props.albums.map((album)=>{
                    return <ul>
                        <li>Names : {album.names}</li>
                        <li>Age : {album.age}</li>
                        <li>Qualification: {album.qualification}</li>
                        <button onClick={()=>this.deleteAlbum(album)}>Delete</button>
                     
                      {/* <li>{album}</li> */}
                    </ul>
                })}
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     return this.props.dispatch(getAllAlbums())
    // }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        albums:state
    }
}
function mapDispatchtoState(dispatch) {
    return{
        getAlbumData:()=>dispatch(getAllAlbums()),
        deleteAlbumData:(albums)=>dispatch(deleteAlbum(albums)),
        createALbumData:(albums)=>dispatch(createAlbum(albums))
    }

}

export default connect(mapStateToProps,mapDispatchtoState)(Albums)