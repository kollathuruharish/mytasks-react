import React,{ Component } from 'react'

export const Parent = (OriginalData) => {
    
     class Container extends Component {
         constructor(props) {
             super(props)
         
             this.state = {
                  url:"https://tse2.mm.bing.net/th?id=OIP.avxhtQqr5FoubGjq4sIXugHaEo&pid=Api&P=0&w=260&h=163"
             }
         }
         handleImage=()=>{
             this.setState({url:"ImageDeleted"})
         }

         handlehover=()=>{
             this.setState({url:"https://tse4.mm.bing.net/th?id=OIP.1GsUsQw5KSrgVNyJPkFNngHaEo&pid=Api&P=0&w=251&h=158"})
         }
         
        render() {
            return (
                <div>
                    <OriginalData url={this.state.url} handleImage={this.handleImage} handlehover={this.handlehover}/>
                </div>
            )
        }
    }
    
    return (
        Container

    )
}
