/**
 * FETCH API JSON 
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
        throw new Error ('pas ok')
    }
    return response.json()
}