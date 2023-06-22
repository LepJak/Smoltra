import { Card } from "react-bootstrap"
import { compareAsc, format } from 'date-fns'
import { useSelector } from "react-redux";

const NewsCard = (props) => {
    const auth = useSelector(state => state.authReducer?.auth);
    var date = "";
    if (props?.news?.created != null)
        date = format(new Date(props?.news?.created), 'dd.MM.yyyy')
    var link = auth?.role == "Admin" ? `updateNews/${props?.news?.id}` : `news/${props?.news?.id}`
    return (
        <a style={{ textDecoration: "none", color: "black" }} href={link}>
            <Card border="secondary" style={{ width: '95%', margin: "5px", minHeight: "200px", maxHeight: "200px" }}>
                <Card.Body>
                    <Card.Title style={{ fontSize: "30px" }}>{props.news.title}</Card.Title>
                    <Card.Text style={{ height: "100%", width: "80%", minHeight: "96px", overflow: "hidden", textOverflow: "ellipsis", WebkitLineClamp: 4, display: "-webkit-box", WebkitBoxOrient: "vertical" }}>
                        {props.news.annotation}
                    </Card.Text>
                    <p style={{ width: "100%", textAlign: "right" }}>{date}</p>
                </Card.Body>
            </Card></a>)
}
export default NewsCard;