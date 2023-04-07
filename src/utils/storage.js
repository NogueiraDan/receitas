import AsyncStorage from "@react-native-async-storage/async-storage"

// BUSCAR, ADICIONAR, e REMOVER

export async function getFavorites (key){
    const favorites = await AsyncStorage.getItem(key);
    return JSON.parse(favorites) || [];
    
}
export async function saveFavorites (key, newItem){
    let myFavorites = await getFavorites(key);
    let hasItem = myFavorites.some(item=>item.id === newItem.id)

    if(hasItem){
        console.log("Item já favoritado")
        return;
    }

    myFavorites.push(newItem)

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
    alert('Favoritado!')


}
export async function removeFavorites (id){
    let receipes = await getFavorites("@appreceitas")
    let myFavorites = receipes.filter((item)=>{
        return(item.id !== id)
    })

    await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites))
    alert("Removido")
    return myFavorites

}

export async function isFavorite (receipe){

    let myReceipes = await getFavorites("@appreceitas")

    const favorite = myReceipes.find(item=>item.id === receipe.id)

    if(favorite){
        return true
    }
    else return false

}
