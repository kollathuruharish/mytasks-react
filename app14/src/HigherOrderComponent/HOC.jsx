import React ,{Component}from 'react'
 export const HOC=(OriginalData)=>{

    class NewData extends Component {
        constructor(props) {
                super(props)
            
                this.state = {
                     count:0,
                }
            }
            handleCount=()=>{
                this.setState({count: this.state.count +1});
            }
        render(){
        
        return( <OriginalData count={this.state.count} handleCount={this.handleCount}/>)
        }
    }
    return NewData;
};