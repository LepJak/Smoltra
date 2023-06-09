import { connect } from "react-redux";
import CreateProduct from "./UpdateProduct";
import { productApi } from "../../../../api/api";
import { withRouter } from "../../../../extensions/WithRoute";
import axios from "axios";
import { changeProductProp, setProduct,addImage, deleteImage,createSpecificationGroup} from "../../../../redux/reducers/updateProduct-reducer";
import UpdateProduct from "./UpdateProduct";
import React from "react";

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
             createSpecificationGroup={this.props.createSpecificationGroup}/>)
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
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateProductContainer));