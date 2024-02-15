const express = require('express');
const app = express();

const homePageRoute = require('./routes/Home')
const cors = require('cors')

require('dotenv').config();

const port = process.env.PORT;
app.use(express.json());

app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

app.use("/api/v1", homePageRoute);


app.listen(port, () => {
    console.log(`app is live on port ${port}`)
})