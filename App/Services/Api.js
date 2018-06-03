// a library to wrap and simplify api calls
import apisauce from 'apisauce';

import Constants from '../Constants/Constants';
import Secrets from 'react-native-config'

const BASE_URL = 'https://newsapi.org/v2';

const ENDPOINT_SOURCE = '/sources';
const ENDPOINT_NEWS = '/everything';

const create = (baseURL = BASE_URL) => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
      'X-Api-Key': Secrets.API_KEY
    },
    // 30 second timeout...
    timeout: 30000
  })

  const getSources = (selectedCategory) => {
    const category = selectedCategory === Constants.SOURCE_CATEGORIES[0] ? '' : selectedCategory;
    const endpoint = `${ENDPOINT_SOURCE}?language=en&category=${category}`;
    return api.get(endpoint);
  }
  const getNews = (sourceId, query) => {
    const endpoint = `${ENDPOINT_NEWS}?language=en&sources=${sourceId}&q=${query}`;
    return api.get(endpoint)
  }

  return {
    getSources,
    getNews
  }
}

export default {
  create
}
