import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoNewsHeaders= {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '4e36096f8fmsh9bb341cfd405a9dp1663ebjsn90e4f8672886',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url)=>({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptosNews:builder.query({
            query:(news)=>createRequest(`/news/search?q=${news.x}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${news.y}`)
        })
    })

})
export const {
    useGetCryptosNewsQuery,
} = cryptoNewsApi
