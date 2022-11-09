import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePhotosAction, getAllPhotosAction } from './action'

 class Photos extends Component {
     getAllPhotosDetails=()=>{
         this.props.dispatch(getAllPhotosAction())
     }
     deletePhotos=()=>{
         this.props.deletePhotos()
     }
    //  constructor(props) {
    //      super(props)
     
    //      this.state = {
    //           Photos:{
    //             albumId:"",
    //             title:"",
    //             url:"",
    //             thumbnailUrl:""
    //           }
    //      }
    //  }
     
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>hello photos</h1>
                {/* <button onClick={this.getAllPhotosDetails}>get data</button> */}
                {/* <button onClick={this.deletePhotos}>Delete</button> */}
                {this.props.Photos.map((photo)=>{
                    return <p>{photo}</p>
                })}
                {/* <form>
                    <label htmlFor="albumId">Album Id</label>
                    <input type="text" name='albumId' value={this.state.albumId} /><br />
                    <label htmlFor="title"> Title</label>
                    <input type="text" name='title' value={this.state.title} /><br />
                    <label htmlFor="url">Url</label>
                    <input type="text" name='url' value={this.state.url} /><br />
                    <label htmlFor="thumbnailUrl">Thumbnail Url </label>
                    <input type="text" name='thumbnailUrl'  value={this.state.thumbnailUrl}/><br />
                    <button type='button'>Add</button>
                </form> */}
                {this.props.Photos && this.props.Photos.map((phts)=>{
                    return <p>{phts.title}</p>
                })}
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        Photos:state
    }
}
function  mapDispatchToProps(dispatch){
    return {
      getAllPhotos:()=>dispatch(getAllPhotosAction()), 
      deletePhotos:(photo)=>dispatch(deletePhotosAction(photo)) 
        }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Photos)
