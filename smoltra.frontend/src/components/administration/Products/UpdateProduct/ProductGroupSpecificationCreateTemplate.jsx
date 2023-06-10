import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import TextField from '@mui/material/TextField';


const ProductGroupSpecificationCreateTemplate = (props) => {


    const changeGroupName =(e) =>{
        props.changeSpecGroupName(props.specGroup,e.currentTarget.value)
    }

    const changeSpecificationValue =(spec, newSpec) =>{
        props.changeSpecValue(props.specGroup,spec, newSpec)
    }

    const addSpecification = (group) => {
        props.addSpecification(props.specGroup);
    }

    let speciifications = props.specGroup.specifications?.map(s =>
        <ProductSpecificationCreateTemplate changeSpecValue={changeSpecificationValue} spec={s}/>
    );
    return (<div style={{ border: "1px solid gray", borderRadius: "8px", backgroundColor: "#ebe2e6", padding: "8px", margin:"5px 0 5px 0" }}>
        <TextField
            id="standard-multiline-flexible"
            label="Название группы характеристик"
            maxRows={1}
            variant="standard"
            style={{ width: "100%", margin:"0 0 20px 0" }}
            defaultValue={props.specGroup.name}
            onChange={changeGroupName}
            
        />

        <Table style={{ width: "100%" }}>
            {speciifications}
        </Table>
        <Button onClick={addSpecification} style={{ width: "100%" }}>Добавить новую характеристику</Button>
    </div>

    );
}
const ProductSpecificationCreateTemplate = (props) => {
    const changeSpecificationName =(e)=>{
        props.changeSpecValue(props.spec,{name: e.currentTarget.value, value: props.spec.value});      
    }
    const changeSpecificationValue =(e)=>{
        props.changeSpecValue(props.spec,{value: e.currentTarget.value, name: props.spec.name});      
    }
    return(
        <tr>
            <td>
                <TextField
                    id="standard-multiline-flexible"
                    label="Название характеристики"
                    value={props.spec.name}
                    maxRows={1}
                    
                    variant="standard"
                    style={{ width: "100%" }}
                    onChange={changeSpecificationName}
                />
            </td>
            <td>

                <TextField
                 value={props.spec.value}
                    id="standard-multiline-flexible"
                    label="Значение"
                    variant="standard"
                    onChange={changeSpecificationValue}
                />
            </td>
        </tr>
    )
}

export default ProductGroupSpecificationCreateTemplate;
