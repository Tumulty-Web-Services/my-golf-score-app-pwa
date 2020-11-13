export const postFetcher = async (url, data) => {
  const request = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  })

  return request.json()
}

export const getFetcher = async (url) => {
  const request = await fetch(url, {
    method: 'GET',
  })

  return request.json()
}

export const postPaymentFetcher = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    })
    return await response.json()
  } catch (err) {
    throw new Error(err.message)
  }
}
