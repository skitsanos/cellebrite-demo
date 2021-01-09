import request from 'umi-request';

request.interceptors.request.use(
    (request_url, options) =>
    {
        options.headers = {
            ...options.headers
            //'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

        return {
            url: request_url,
            options: {
                ...options,
                timeout: 60000
            }
        };
    },
    {global: true}
);

request.interceptors.response.use(async response =>
{
    //const data = await response.clone().json();
    //skip 403s from login service itself
    /*if (response.status === 403 && !response.url.endsWith(endpoints.login))
    {
        location.href = '/login';
    }*/
    return response;
});

export const apiGet = (api_url, options) => request.get(api_url, options);

export const apiPost = (api_url, options) => request.post(api_url, options);

export const apiPut = (api_url, options) => request.put(api_url, options);

export const apiDelete = (api_url, options) => request.delete(api_url, options);

const url = '/api';

export const endpoints = {
    phones: `${url}/phones`
};