const apiCaller = async (endpoint, method='GET', data=null)=>{
    try {
        const url=`https://localhost:8080/${endpoint}`
        const options = {
            method,
            headers:{
                'Content-Type':'application/json'
            }
        }

        if(method !== 'GET' && data){
            options.body = JSON.stringify(data)
        }

        const response = await fetch(url, options)
        if(!response.ok){
            const error = await response.json()
            throw new Error(`Error: ${response.status} - ${error.message}`)
        }

        return await response.json()
    } catch (error) {
        console.error('API Call Error:', error.message);
        throw error;
    }
}