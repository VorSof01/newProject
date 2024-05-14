import {useCookie} from "#app";

const token = useCookie('token')

export const { data: responseData, execute: responseExecute } = await useFetch('/api/profile/info', {
    method: 'get',
    immediate: false,
    watch: false,
    headers: {
        Authorization: `Bearer ${token.value}`
    }
})

export const { data: responseData1, execute: responseExecute1 } = await useFetch('/api/profile/employee/rating', {
    immediate: false,
    watch: false,
    method: 'get',
    headers: {
        Authorization: `Bearer ${token.value}`
    }
})