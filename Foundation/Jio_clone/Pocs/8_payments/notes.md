## Responsibilities of Payment gateway
  * accept payment from the client
  * confirm the payment with the your backend

## Challenges 

## Multiple Payment modes that change baed on the geography 
* netbanking -> RTGS , IMPS(indian), NEFT
* UPI-> india
* Debit, credit card
* wallets -> multiple companies
* cyrpto
* SWIFT-> global 
* buy now pay later

## Follow very strict compliances
*  You have to follow very strict security standards
   *  credit card paymnet (PCI DSS)[Payment Card Industry standards]    
   *  international -> SWIFT
  
### liceneses and regulation (localization)
* You need to have license to accept the payment
* Every country has different regulation and you need follow them
* Different countries allow different payment modes for ex: UPI and IMPS are only available in India

### Fraud Detection
* You should be able to prevent every kind of fraud transaction
* also needs to be reliable to make sure any fraud confirmation are not made to the server

**solution** : a specizilzed service that only deals with payment (payment) and takes cut of every transaction 

## Payment acceptance

* Payment gateway : Razorapy
* Keys
  * Public key : server , client
  * PrivateKaye (is only known by server) -> uniuquely identify a backend for payemnt gateway
*  webhook -> 
   *  you define a url on which razorpay will make the request confirming status of the payment
   *  You need to expose your server `publically` so that payment gateway is able to access your webhook route


### Steps
1.  Frontent -> provide userId& productId and make a request to a `checkout` route 

2. Backend -> checkout route -> 
    * RazorPay takes over the whole backend checkout flow
      * creates an `encrypted order` using it's libarary-> private key +publickey+user_info(attributes are defined by razorpay)+product info(attributes are defined by razorpay)
      * response with order is send to frontend 
3. frontend -> 
      * load razorpay script 
      * using razorpay script + publickey and ecrypted order -> payemnt request is made on payement gateway 
 4. confirmation
     * razorypay -> makes a confirmation request on your backned webhook url 

