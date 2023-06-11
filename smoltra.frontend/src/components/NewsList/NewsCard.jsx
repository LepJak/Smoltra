import { Card } from "react-bootstrap"
import { compareAsc, format } from 'date-fns'

const NewsCard = (props) => {
    var date ="";
    if(props?.news?.created != null)
        date = format(new Date(props?.news?.created), 'dd.MM.yyyy')
    return (
    <Card border="secondary" style={{ width: '95%', margin:"5px", minHeight:"200px",maxHeight:"200px"}}>
        <Card.Body>
            <Card.Title  style={{fontSize:"30px"}}>{props.news.title}</Card.Title>
            <Card.Text style={{height:"100%",width:"80%", minHeight:"96px" ,overflow:"hidden",textOverflow: "ellipsis", WebkitLineClamp:4, display: "-webkit-box", WebkitBoxOrient: "vertical"}}>
                {props.news.annotation}
            </Card.Text>
            <p style={{width:"100%", textAlign:"right"}}>{date}</p>
        </Card.Body>
    </Card>)
}
export default NewsCard;