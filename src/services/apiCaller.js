const apiCaller = async (endpoint, method='GET', data=null)=>{
    try {
        const url=`http://192.168.107.212:8080/${endpoint}`
        console.log("🚀 ~ apiCaller ~ url:", url)
        const options = {
            method,
            headers:{
                'Content-Type':'application/json'
            }
        }

        if(method !== 'GET' && data){
            options.body = JSON.stringify(data)
        }
        console.log("🚀 ~ apiCaller ~ options:", options)
        const response = await fetch(url, options)
        
        
        if(!response.ok){
            const error = await response.json()
            throw new Error(`Error: ${response.status} - ${error.message}`)
        }

        const result = await response.json()
        console.log("🚀 ~ apiCaller ~ result:", result)
        
        return result
    } catch (error) {
        console.error('API Call Error:', error.message);
        throw error;
    }
}

export default apiCaller;