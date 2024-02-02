import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function StarShipCard ({starships}) {

    if(!Array.isArray(starships)){
        return <p> loading.... </p>
    }
    
    return ( 
        <div>
            <h1 className='starFont'> StarShips </h1>
           <div className='container'> 
            {starships.map((starships, index) => (
               <Card bg='secondary' text='light' style={{width: "18rem"}} key={index} >
               <Card.Header> {starships.name}  </Card.Header>
               <Card.Body>
                 <Card.Title> { starships.model } </Card.Title>
                 <Card.Text>
                   Manufacturer: {starships.manufacturer}
                 </Card.Text>
                 <Button variant="dark">Go somewhere</Button>
               </Card.Body>
             </Card>
            ))}
            </div>
            
        </div>
    )
}


export default StarShipCard;