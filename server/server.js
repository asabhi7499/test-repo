// Express server instantiation
const express = require('express');
const app = express();

const homePageRoute = require('./routes/Home')
const cors = require('cors')

// Bring the Constant variable PORT value present in .env file
require('dotenv').config();
const port = process.env.PORT || 4000;


// JSON parser to parse son data
app.use(express.json());

//CORS for giving access to local host access the server
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

// Define route for home page
app.use("/api/v1", homePageRoute);

// Server live on port 4000
app.listen(port, () => {
    console.log(`app is live on port ${port}`)
})