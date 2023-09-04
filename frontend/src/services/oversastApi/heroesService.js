import overfastApi from "./oversastApi";

export async function getHeroes(){
    const response = await overfastApi.get('/heroes?locale=pt-br')
    return response.data
}