
import axios from "@/config/axiosConfig";

export const createWorkspaceRequest=async ({name, description,token})=>{

     
    try {
        const response = await axios.post('/workspaces', {name, description}, {
            headers:{
                'x-access-token':token,


            }
        }        
        )

        return response?.data;
    } catch (error) {
        console.log('Error while creating workspace ',error);

        throw error.response.data;
    }
};

export const fetchWorkspacesRequest= async ({token})=>{
    
    try {
        const response = await axios.get('/workspaces', {
            headers:{
                'x-access-token':token,

            }
        }        
        )

        console.log('response in fetch ws',response);
        
        return response?.data?.data;
    } catch (error) {
        console.log('Error while fetch workspace ',error);

        throw error.response.data;
    }
}
