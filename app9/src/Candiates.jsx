import React from "react"
export const Candiates = (props) => {
    console.log(props.allCandiates.length)
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Tel</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                    </tr>
                </thead>
                <tbody>
                    {props.allCandiates.map((Candiate) => {
                        return <tr>
                            <td>{Candiate.fname}</td>
                            <td>{Candiate.lname}</td>
                            <td>{Candiate.tel}</td>
                            <td>{Candiate.address}</td>
                            <td>{Candiate.city}</td>
                            <td>{Candiate.state}</td>
                            <td>{Candiate.zip}</td>
                        </tr>
                    })}

                </tbody>
            </table>


        </div>
    )
}