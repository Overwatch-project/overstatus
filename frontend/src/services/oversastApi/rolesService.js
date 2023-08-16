import overfastApi from "./oversastApi";

export async function getRoles(){
    const response = await overfastApi.get('/roles?locale=pt-br')
    console.log("OI CARALHO", response)
    return response.data
}
