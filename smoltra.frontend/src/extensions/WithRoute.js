import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    let { productId } = useParams();
    
    return (
      <Component
      productId={productId}
        {...props}
        />
    );
  };
  
  return Wrapper;
};