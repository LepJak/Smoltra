import { connect } from "react-redux";
import { productApi } from "../../../../api/api";
import { withRouter } from "../../../../extensions/WithRoute";
import axios from "axios";
import { changeProductProp,changeSpecificationValue,deleteSpec, deleteSpecG, setProduct,addImage,changeNameSpecificationGroup, deleteImage,createSpecificationGroup, createSpecification} from "../../../../redux/reducers/updateProduct-reducer";
import UpdateProduct from "./UpdateProduct";
import React from "react";
import { getProducts } from "../../../../redux/reducers/products-reduser";

class UpdateProductContainer extends React.Component{

    componentDidMount(){
        
        axios.get("https://localhost:7175/api/Product/"+this.props.productId)
        .then(response => {
            this.props.setProduct(response.data);
        });
    }
    
    render(){
        return(<UpdateProduct {...this.props}
             updateProductPage={this.props.updateProductPage} 
             changeProductProp={this.props.changeProductProp}
             addImage={this.props.addImage}
             deleteImage={this.props.deleteImage}
             createSpecificationGroup={this.props.createSpecificationGroup}
             createSpecification={this.props.createSpecification}
             changeNameSpecificationGroup={this.props.changeNameSpecificationGroup}
             changeSpecificationValue={this.props.changeSpecificationValue}
             deleteSpecG={this.props.deleteSpecG}/>
             )
    }

    
}
const updateProduct = (product) => {
    return (dispatch) => {
        productApi.updateProduct(product)
        .then(data=>{
            dispatch(getProducts());
        });

    }

}


const mapStateToProps = (state) => {
    return {
        updateProductPage: state.updateProductReducer.updateProductPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setProduct: (product) => {
            dispatch(setProduct(product));  
        },
        changeProductProp : (nameProperty, property) =>{
            dispatch(changeProductProp(nameProperty, property))
        },
        addImage : (file) => {
            dispatch(addImage(file))
        },
        deleteImage : (image) => {
            dispatch(deleteImage(image))
        },
        createSpecificationGroup : () =>{
            dispatch(createSpecificationGroup())
        },
        createSpecification : (group) =>{
            dispatch(createSpecification(group))
        },
        changeNameSpecificationGroup: (group, name)=>{
            dispatch(changeNameSpecificationGroup(group, name))
        },
        changeSpecificationValue:(group, specification, newSpecification)=>{
            dispatch(changeSpecificationValue(group, specification, newSpecification))
        },
        updateProduct: (product) =>{
            dispatch(updateProduct(product))
        },
        deleteSpecG:(spG) =>{
            dispatch(deleteSpecG(spG))
        },
        deleteSpec:(spG, sp) =>{
            dispatch(deleteSpec(spG, sp))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateProductContainer));