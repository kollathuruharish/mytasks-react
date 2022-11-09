import React,{Component} from 'react'
import { connect } from 'react-redux'
import { createStudents, deleteStudents,getAllStudents } from './action'

 class Students extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Students:{
                  fname:"",
                  lname:"",
                  email:""
              }
         }
     }
     handlechange=(e)=>{
       let newStudents={...this.state.Students}
       newStudents[e.target.name]=e.target.value
       this.setState({Students:newStudents})
     }
     
    //  handlecreate=()=>{
    //      this.props.handlecreate(this.state.Students)

    //  }
     createStudents=()=>{
        this.props.createStudentsData(this.state.Students)
    }
     getStudents=()=>{
         this.props.getStudentsData()
     }
    
     ShowStudents=()=>{
        console.log(this.props)
     this.props.dispatch(getAllStudents())
    }
    deleteStudents=(student)=>{
        this.props.deleteStudentData(student)
    }
    render(){
        console.log(this.props)
    return (
        <div>
            <h2>Click to get the students details</h2>
            <form>
                <label htmlFor="fname">First Name :</label>
                <input type="text" name="fname" value={this.state.fname} onChange={(e)=>{this.handlechange(e)}} /><br/>
                <label htmlFor="lname">Last Name :</label>
                <input type="text" name="lname"  value={this.state.lname}  onChange={(e)=>{this.handlechange(e)}} /><br/>
                <label htmlFor="email">Email :</label>
                <input type="text" name="email" value={this.state.email} onChange={(e)=>{this.handlechange(e)}}  /><br/>
                <button type='button' onClick={this.createStudents}>Submit</button>
            </form> 
            <br />
            {/* <button onClick={this.ShowStudents}>Click</button>
            <button onClick={this.deleteStudent}>Delete</button> */}

            {this.props.Students && this.props.Students.map((stu,i)=>{
                //  return <h3 key={i}>{stu.fname}</h3>
                return <h2>{stu.fname}</h2>
            })}
        </div>
    )
}
 }
function StateToPros(state){
    console.log(state)
    
    return{
        students:state

    }
}
function mapStatetoProps(dispatch) {
    return{
        getStudentsData:()=>dispatch(getAllStudents()),
        deleteStudentsData:(student)=>dispatch(deleteStudents(student)),
        createStudentsData:(Students)=>dispatch(createStudents(Students))

    }
}

export default connect(StateToPros,mapStatetoProps)(Students)