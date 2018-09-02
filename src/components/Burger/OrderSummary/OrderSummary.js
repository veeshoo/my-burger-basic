import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.entries(props.ingredients)
        .map(ing =>  <li key={ing[0]}><span style={{textTransform: 'capitalize'}}>{ing[0]}</span>: {ing[1]}</li>);
    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: USD {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.cancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continued}>CONTINUE</Button>
        </React.Fragment>
    )
}

export default orderSummary;