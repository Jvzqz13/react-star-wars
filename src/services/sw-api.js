export  async function getAllStarships  () {
    try {

        const response = await fetch("https://swapi.dev/api/starships/")
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }

};

export async function getStarshipsbyId(id){
try {

    const response = await fetch(`https://swapi.dev/api/starships/${id}`);
    const data = await response.json();
    return data;
    
} catch (error) {
    console.log(error);    
}
};