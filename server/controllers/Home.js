// Controller to bring the json data from the 3rd party API and display on the UI
exports.homePage = async (req , res) => {
    try {
        // API call using fetch method
        const response = await fetch("https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098");
        const result = await response.json();

        // console.log(result)
        //Return the succesfull response
        return res.status(200).json({
            success: true,
            message: "Team data fetched successfully",
            result,
        })

    } catch (error) {
        // Return the failed response
        return res.status(400).json({
            success:false,
            message:error.message,
            Error: "Team data not found"
        });
    }
}