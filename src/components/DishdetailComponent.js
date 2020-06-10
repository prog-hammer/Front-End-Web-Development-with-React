import React, {Component} from 'react'
import {Card,CardImg,CardImgOverlay,CardText, CardBody, CardTitle} from 'reactstrap'

class DishDetail extends Component{
    
    renderDish(dish){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle heading>
                                    {dish.name}
                                </CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                    </Card>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    renderComments(comments){
        if(comments.length!=0){
            const data=comments.map((comment)=>{
                return(
                    <li key={comment.key}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                        </p>
                    </li>
                )
            })
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments</h4>
                    <ul className="list-unstyled">{data}</ul>
                </div>
            )
        }
    }

    render(){
        const dish=this.props.dish
        if(dish!=null){
            return(
                <div className="row">
                    {this.renderDish(dish)}
                    {this.renderComments(dish.comments)}
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
}

export default DishDetail;