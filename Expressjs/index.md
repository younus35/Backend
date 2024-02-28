<h2>Express js</h2><br>
it is a framework that is used to handle the heavy lifting.Let us say the code written in node without the express<br>
could be hard to understand and also hard to write so the inbuild function in express helps us build our application easier<br>
<h2>MiddleWare and next</h2><br>
Middlewares in Express.js are functions that have access to the request object (req), the response object (res), and the next<br>middleware function in the application's request-response cycle. They can perform tasks such as modifying request
<br>and response objects, ending the request-response cycle, or calling the next middleware function. Middlewares are<br> essential for handling tasks like authentication, logging, error handling, etc., in an Express.js application.<br>
<h2>res.send() and content type</h2><br>
res.send() is used in Express.js to send a response to the client with the specified data. It automatically sets the<br> appropriate content type based on the data provided like if html then text/html,and sends it back to the client.<br>
<h2>app.listen()</h2><br>
app.listen(3000) tells the Express.js application to start listening for incoming HTTP requests on port 3000. Behind the <br>scenes, it creates a server and binds it to the specified port, allowing the application to handle incoming requests<br> 
from clients.<br>
<h2>body parser</h2><br>
The body parser is a middleware used in web development frameworks like Express.js for parsing incoming request bodies. It's<br> used to extract data from the body of HTTP requests, such as form data or JSON, and make it accessible to the <br>application for processing.<br>













