import api from "../core/api";

export let createUsers = async (data) => {
    try {
        console.log('abc')
        var response = await fetch(api.API_USERS ,
            {
                method: 'POST',
                body: JSON.stringify({
                    Email:data.Email,
                    Password:data.Password,
                    OTP:true,
                    IsConfirmed:true
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "X-Requested-With": "XMLHttpRequest"
                }
            }
        )
        var result = await response.json();
        console.log('result',result)
        console.log('response',response)
        return result
    }
    catch (e) {
        console.log('error: ', e.message);
        return [];
    }
}
