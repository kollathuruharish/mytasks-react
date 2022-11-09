export const Lokesh1  = (props) =>{
    console.log(props.object)
    return(
        <div>
            <h2>hello</h2>
            <ul>
                <li>First Name: {props.object.fname}</li>
                <li>Last Name: {props.object.lname}</li>
                <li>Email: {props.object.email}</li>

            </ul>
            <ul>
                <li>Array: {props.array}</li>
                <li>Message: {props.message}</li>
            </ul>
        </div>
    )
}
export default Lokesh1