import overfastApi from "./oversastApi";

export async function getRoles(){
    const response = await overfastApi.get('/roles?locale=pt-br')
    return response.data
}
