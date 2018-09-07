import React from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
    //This could be a functional component, need not be a class
    componentWillUpdate = () => {
        console.log('[OrderSummary] will update');
    }

    render = () => {
        const ingredientSummary = Object.entries(this.props.ingredients)
            .map(ing =>  <li key={ing[0]}><span style={{textTransform: 'capitalize'}}>{ing[0]}</span>: {ing[1]}</li>);
        return (
            <React.Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: USD {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continued}>CONTINUE</Button>
            </React.Fragment>
        )
    }
}

export default OrderSummary;