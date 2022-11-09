import React from "react"

export const Employees = (props) => {
    console.log(props.allEmployees.length)
        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th>Employee Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.allEmployees.map((Employee) => {
                            return <tr>
                                <td>{Employee.fName}</td>
                                <td>{Employee.lName}</td>
                                <td>{Employee.email}</td>
                                <td>{Employee.empid}</td>


                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

