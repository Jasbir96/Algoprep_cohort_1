## Agenda
* Review
* Types of testing 
* Anotamy of a unit testcases 
  * what are it's different part
  * snapshot testing
* Testing in frontend  -> unit testcases (how internally work) -> React Testing library + JEST
* Testing in backend  -> unit testcases (how it internally work) -> Jest and supertest 


## Types of Testing
### Method of doing Testing
**Manual Testing** -> QA 
**Automation Testing** -> you write testcases to verify all the requirements

**Automation Testing**
What : to verify if your product matches the requirement
**Usecases**
*  when you write testcases -> verify all of the requirement are matching
*  when you write testcases : you can develop new features withtout causing any regression 
**regression** : when you want to add a features and that features breaks you existing application
* it also reduce number of possible ways to generate bugs 

## scope 
* **Unit Test**: testcase that you write to test the smallest independent piece of your code in `isolation`
**Ex** 
 * React : on a component level : button / input 
 * Node/express  : on route level with mocking all the external dependecies for that route
  
* **Functional/Integration testing:** when you write a testcase for a module inside a product
 **Ex**
 * React : testing a complete form
 * Node/express  : route level testing but with all the real depedecies
  
**End-to end testing** : you test the whole flow 
**Ex**
**React** : add to cart, profile
 
## Based on requirement
* **Feature level testing** : automation (**unit** , functional , e2e)
* **Regression Testing** : when you want to add a features and that features breaks you existing application
* **Performance Testing** :  Measuring responsiveness and efficiency to ensure smooth user experience under normal conditions.
    * frontend : metric that your application should:  your website first fold should load under 2.5sec 
    * backend : how much time does your backend take for giving back response
* **Security Testing:** : Identifying vulnerabilities and weaknesses to ensure protection against security threats.
* **Stress Testing** : Assessing how well the system performs under extreme conditions, identifying breaking points.





## Unit test case for frontend and backend
* **Unit Test**: testcase that you write to test a smallest independent piece of your code in `isolation`
**Ex** 
 * **React** : on a component level : button / input 
 * Node/express  : on route level with mocking all the external dependecies for that route



##  Unit Testcases in Nextjs 












 <!-- testing a single Express route handler function in isolation, verifying that it correctly processes incoming requests, manipulates data as expected, and returns the appropriate response, while mocking any dependencies to ensure the test focuses solely on the route logic -->