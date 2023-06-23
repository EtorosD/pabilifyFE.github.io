import styled from "styled-components"
import GooglepayButton from "@google-pay/button-react"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Hr = styled.hr`

`;


const App = () => {
    return (
        <Container>
            Payment
        <Hr/>

        <GooglepayButton
            environment="TEST"
            paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                    {
                        type: 'CARD',
                        parameters: {
                            allowedAuthMethods:['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                        },
                        tokenizationSpecification: {
                            type: 'PAYMENT_GATEWAY',
                            parameters: {
                                gateway: 'example',
                                gatewayMerchantId: 'exampleGatewayMerchantId'
                            },
                        },
                    },
                ],
                merchantInfo: {
                    merchantId: '12345678901234567890',
                    merchantName: ' PABILIFY'
                },
                transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: '1',
                    currencyCode: 'USD',
                    countryCode: 'US',
                },
                shippingAddressRequired: true,
                callbackIntents: ['PAYMENT_AUTHORIZATION']
            }}
            onLoadPaymentData={paymentRequest => {
                console.log('Sucess', paymentRequest);
            }}
            onPaymentAuthorized={paymentData => {
                console.log('Payment Authorized Sucess', paymentData)
                return { transactionState: 'SUCCESS'}
            }
        }
        existingPaymentMethodRequired='false'
        buttonColor="royalblue"
        buttonType="Buy"
        />
        </Container>
    );
}

export default App;