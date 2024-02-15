
exports.homePage = async (req , res) => {
    try {
        const response = await fetch("https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098");
        const result = await response.json();

        console.log(result)
        return res.status(200).json({
            success: true,
            message: "Team data fetched successfully",
            result,
        })

    } catch (error) {
        
        return res.status(400).json({
            success:false,
            message:error.message,
            Error: "Team data not found"
        });
    }
}