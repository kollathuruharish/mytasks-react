export default function Harish(properties){
    console.log(properties.employeeInfo)
    return(
        <div>
            <h2>Hello  from Harish Component</h2>
            <p>value in child component</p>
            <ul>
                <li>Employee Id: {properties.employeeInfo.id}</li>
                <li>Employee Name: {properties.employeeInfo.name}</li>
                <li>Employee Email: {properties.employeeInfo.email}</li>
            </ul>
            <ul>
                <li>{properties.message}</li>
                <li>{properties.arr}</li>
            </ul>
        </div>
    )
}