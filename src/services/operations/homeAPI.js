import { home } from "../../slices/homeSlice";
import { apiConnector } from "../apiConnector";
import { homePageEndpoints } from "../apis";



const { HOMEPAGE_API } = homePageEndpoints;


export function getHomePageData (){
    return async (dispatch) => {
        try {
            console.log("this is home api url" , HOMEPAGE_API)
            const respnse = await apiConnector("GET", HOMEPAGE_API )
            console.log("CALL for api to get home page data", respnse)
            console.log(respnse.data.message)
            if(!respnse.data.success){
              throw new Error(respnse.data.message)
            }

             dispatch(home({...respnse.data.result}))
  
            // toast.success("Reset password Link sent success")
  
        } catch (error) {
          console.log("Fetching team data - Error")
          //toast.error("Failed to send the Reset Password link ")
        }
    }
}