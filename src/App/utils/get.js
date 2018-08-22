import 'whatwg-fetch'
import 'es6-promise'
import md5 from 'md5'
import { curDate } from './tools'

export function get(url) {
  console.log('get url:' + url)
  return new Promise((resolve, reject) => {
    fetch(url, {
      // credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*'
      }
    })
    .then((res) => res.json())
    .then((json) => {
      return resolve(json)
    })
    .catch((error) => {
      console.error('fetch failed', error)
      return reject(error)
    })
  })
}

export var showapiRequest = function(mainUrl, appId, appParams, callback) {
    var url = mainUrl + '?';
    var params = {
        showapi_appid: appId,
        showapi_timestamp: curDate(),
        showapi_sign_method: 'md5',
        showapi_res_gzip: 1
    };

    appParams = appParams || {};
    for (var appParam in appParams) {
        params[appParam] = appParams[appParam];
    }

    var keys = [];
    for (var param in params) {
        keys.push(param);
    }

    keys.sort();
    var sortResult = '';
    for (const key of keys) {
      sortResult = sortResult + key + params[key];
    }

    var secret = '21b693f98bd64e71a9bdbb5f7c76659c';
    var sign = md5(sortResult + secret);
    for (const key of keys) {
      url = url + key + '=' + params[key] + '&';
    }
    url = url + 'showapi_sign=' + sign;
    return get(url)
};

export var getWchatHot = function(typeid, page) {
  const appParams = { typeId: typeid || 0, page: page || 1 }
  console.log('get wchat hot:' + JSON.stringify(appParams))
  return showapiRequest('https://route.showapi.com/582-2', 17262, appParams)
}
