/**
 * Fetch au format Json API 
 * @param {string} url 
 * @param {object} options 
 * @returns {Promise}
 */
export async function fetchJSON(url = '', options = {}) {
    const headers = {
        Accept: 'application/json',
        ...options.headers
    }    
    const response = await fetch(url, {...options, headers})  
    if (!response.ok) {
        throw new Error('Impossible de récupérer les données depuis le serveur', {cause: response})
    }
    return response.json()
}

    