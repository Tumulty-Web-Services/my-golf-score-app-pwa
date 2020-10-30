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

export function formatDate(date) {
  const dateObj = new Date(date);
  const month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  const results = `${month[dateObj.getMonth()]}/${dateObj.getDate()}`;

  return results;
}
