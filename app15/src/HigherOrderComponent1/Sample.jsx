import React,{Component} from 'react'

export const Sample = (OriginalData) => {
    class Container extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 message:"Hi...React component"
            }
        }
        handlemessage=()=>{
            this.setState({message:"I am changing component"})
        }

        handlehover=()=>{
            this.setState({message:"I am container Component"})
        }
        
       render() {
           return (
               <div>
                   <OriginalData message={this.state.message}  handlehover={this.handlehover}/>
               </div>
           )
       }
   }
   
   return Container
}


