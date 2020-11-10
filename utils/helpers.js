
export const postFetcher = async (url, data) => {
    const request = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  
    return request.json()
  }

  export const getFetcher = async (url) => {
    const request = await fetch(url, {
      method: 'GET'
    })
  
    return request.json()
  }
  