export const urlify = (link: string) => link.toLowerCase().replace(/\s/g, '-')
export const makeTitle = (link: string) =>
  link.replace(/-|\s/g, ' ').replace(/\+/g, ' ')

export const postFetcher = async (url: string, data: any) => {
  const request = await fetch(url, {
    method: 'POST',
    body: data,
  })

  return request.json()
}
