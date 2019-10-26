export default async ({METHOD, URL, data, resType, token}) => {
  try {
    const options = {
      method: METHOD || 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'access-token': token || undefined,
      },
      body: data ? JSON.stringify(data) : undefined,
    };

    let result = '';
    const response = await fetch(URL, options);

    if (resType === 'json') {
      result = await response.json();
      return result;
    }
    result = await response.text();
    return result;
  } catch (e) {
    throw Error(e);
  }
};
