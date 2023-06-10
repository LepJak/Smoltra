import React from "react"
import Table from 'react-bootstrap/Table';


const Specifications = (props) => {
    let specifications = props.specificationGroups?.map(g => {
        return (
            <Table striped >
                <thead>
                    <tr>
                        <th>{g.name}</th>
                    </tr>
                </thead>
                <tbody>
                    {g.specifications.map(s => (
                        <tr>
                            <td>{s.name}</td>
                            <td>{s.value}</td>
                        </tr>))
                    }
                </tbody>
            </Table>)
    });
    return (<div>
        {specifications}
    </div>   )                       
}

export default Specifications;