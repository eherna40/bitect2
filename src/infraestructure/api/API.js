import { baseUrl, api, methods } from "./config"

export const getTablets = () => {

    return fetch(`${baseUrl}/${api}${methods.getTablets}`)
        .then(res => res.json())
        .catch(err => err)
        .then(res => res)
}
export const selectTablet = (id) => {

    const form_data= new FormData()
    form_data.append('id_tablet', id)

    return fetch(`${baseUrl}/${api}${methods.select}`
        ,{
            method: 'POST',
            body: form_data
        }
    )
        .then(res => res.json())
        .catch(err => err)
        .then(res => res)
}
