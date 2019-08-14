import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/Buildcontrols";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";
const INGREDIENT_PRICES = {
  salad: 0.4,
  bacon: 0.5,
  cheese: 0.7,
  meat: 1
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igkey => {
        //console.log(ingredients[igkey]);
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        console.log(sum + el);
        return sum + el;
      }, 0);
    //console.log(sum > 0);
    this.setState({ purchasable: sum > 0 });
  }
  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };
  purchasCancaleHandler = () => {
    this.setState({ purchasing: false });
  };
  addIngredientsHandler = type => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newTotalPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };
  removeIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount === 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newTotalPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchasCancaleHandler}
        >
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredients={this.addIngredientsHandler}
          removeIngredients={this.removeIngredientsHandler}
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          disabled={disabledInfo}
          Ordered={this.purchasingHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
