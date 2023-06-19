import React from "react";
import { compareAsc, format } from 'date-fns'
import { orderStateHelper } from "../../../../helpers/orderStateHelper";
import { Row, Col, Table } from "react-bootstrap";
import emptyImage from "../../../../images/empty_photo.jpg";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const OrderUpdate = (props) => {
    let state = props?.orderUpdatePage?.order;
    console.log(state)
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleImageError = e => { e.target.src = emptyImage };
    const imageUrl = (id) => `https://localhost:7175/api/image/${id}`;
    var date = "";
    if (state?.created != null)
        date = format(new Date(state?.created), 'dd.MM.yyyy hh:mm')
    const status = orderStateHelper.getState(state?.state);
    let items = state?.orderItems?.map(x => (
        <tr>
            <td><img style={{ width: "120px" }} onError={handleImageError} src={imageUrl(x.imageId)} /></td>
            <td>{x.nameProduct}</td>
            <td>{x.count}</td>
            <td>{x.priceForOne}</td>
            <td>{x.totalPrice}</td>
        </tr>))
    //let orders = state?.orders?.map((n) => <OrderListItem order={n}/>);
    return (
        <>
            <h2>Заказ № {state?.orderId}</h2>

            <p style={{ fontSize: "20px" }}>{date}</p>
            <FormControl style={{ margin: "30px" , width:"20rem"}}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>{orderStateHelper.getState(1).title}</MenuItem>
                    <MenuItem value={2}>{orderStateHelper.getState(2).title}</MenuItem>
                    <MenuItem value={3}>{orderStateHelper.getState(3).title}</MenuItem>
                    <MenuItem value={4}>{orderStateHelper.getState(4).title}</MenuItem>
                    <MenuItem value={5}>{orderStateHelper.getState(5).title}</MenuItem>
                </Select>
            </FormControl>

            <Table striped bordered hover>
                <tr>
                    <th></th>
                    <th>Наименование</th>
                    <th>Кол-во</th>
                    <th>Цена за ед.</th>
                    <th>Сумма</th>
                </tr>
                {items}
            </Table>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>ИТОГО: {state?.totalPrice}</p>

        </>)
}

export default OrderUpdate;

