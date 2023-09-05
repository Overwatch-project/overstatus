import overfastApi from "./oversastApi";

export async function getHeroes(string){
    const response = await overfastApi.get(`/heroes?locale=pt-br&role=${string}`)
    return response.data
}