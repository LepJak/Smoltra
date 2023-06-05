import React from "react"
import Table from 'react-bootstrap/Table';


const Specifications = (props) => {
    let specifications = props.specificationsGroup?.map(g => {
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
                            <td>{s.values?.map(v => (<span>{v.name}</span>))}</td>
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