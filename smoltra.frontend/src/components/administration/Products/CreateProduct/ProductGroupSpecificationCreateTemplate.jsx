import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import TextField from '@mui/material/TextField';


const ProductGroupSpecificationCreateTemplate = (props) => {
    console.log(props.specGroup.specifications);

    const addSpecification = (group) =>{
        props.addSpecification(props.specGroup);
    }
   
    let speciifications = props.specGroup.specifications?.map(s =>
        <tr>
            <td>
            <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
            </td>
            <td>
                {s.name}
            </td>
            <td>
                {s.value}
            </td>
        </tr>
    );
    return (
        <><div>
            <p>{props.name}</p>
            <Table style={{ width: "100%" }}>
                {speciifications}
                <tr><td colSpan={2} onClick={addSpecification}><Button>Добавить новую группу</Button></td></tr>
            </Table>
        </div>
        </>

    );
}
export default ProductGroupSpecificationCreateTemplate;
