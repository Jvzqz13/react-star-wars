
function Home ({starships}) {

    if(!Array.isArray(starships)){
        return <p> loading.... </p>
    }
    
    return ( 
        <div>
            <h1> All StarShips </h1>
            
            
            {starships.map((starships, index) => (
                <div key={index}>
                    <h2> {starships.name} </h2>
                    <p> Model: {starships.model} </p>
                    <p> Manufacturer: {starships.manufacturer} </p>
                </div>
            ))}


            <div>
            </div>
        </div>
    )
}

export default Home;