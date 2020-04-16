
export default async function(config) {
    console.log('toto')
    const response = await fetch(`https://api.instagram.com/oauth/authorize/?client_id=${config.clientId}&redirect_uri=${config.redirectUrl}&response_type=${config.responseType}`)
    return JSON.parse(response)
 }