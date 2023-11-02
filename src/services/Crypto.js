import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoapiheader = {
  "X-RapidAPI-Key": "4e36096f8fmsh9bb341cfd405a9dp1663ebjsn90e4f8672886",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url)=>({url,headers:cryptoapiheader})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        }),
        getCryptosDetails:builder.query({
            query:(uuid)=>createRequest(`/coin/${uuid}`)
        })
    })

})

export const {
    useGetCryptosQuery,useGetCryptosDetailsQuery
} = cryptoApi

