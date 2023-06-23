import styled from "styled-components"
import { mobile } from "../reponsive";
import { calculateTotals } from "../redux/cartRedux";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
`;

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrices = styled.span`

`;

const Total = () => {
const {products, total} = useSelector ((store) => store.cart)
const dispatch = useDispatch()

useEffect(() => {
    dispatch(calculateTotals());
},[total])

return (

<Summary>
<SummaryTitle>ORDER SUMMARY</SummaryTitle>
{/* <SummaryItem>
    <SummaryItemText>Subtotal</SummaryItemText>
    <SummaryItemPrices>Subtotal</SummaryItemPrices>
</SummaryItem>

<SummaryItem>
    <SummaryItemText>Estimated Shipping</SummaryItemText>
    <SummaryItemPrices>$ 4.99</SummaryItemPrices>
</SummaryItem>

<SummaryItem>
    <SummaryItemText>Shipping Discount</SummaryItemText>
    <SummaryItemPrices>$ -4.99</SummaryItemPrices>
</SummaryItem> */}

<SummaryItem type="total">
    <SummaryItemText>Total</SummaryItemText>
    <SummaryItemPrices>${total}</SummaryItemPrices>
</SummaryItem>
<Button>CHECKOUT NOW</Button>
</Summary>

)
}

export default Total