import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function StarShipCard ({starships}) {

    if(!Array.isArray(starships)){
        return <p> loading.... </p>
    }
    
    return ( 
        <div style={{ display:"flex", flexDirection:"column", alignItems:'center' }} >
            <h1 className='starFont'> StarShips </h1>
           <div className='container'> 
            {starships.map((starships, index) => (
               <Card className="bg-white p-2 text-dark bg-opacity-50"   bg='secondary' text='light' style={{width: "14rem"}} key={index} >
               
               <Card.Header> {starships.name}  </Card.Header>
               
               <Card.Body style={{ display:"flex", flexDirection:"column", alignItems:'center', justifyContent:"space-evenly"  }} >
                 <Card.Title> { starships.model } </Card.Title>
                 <Card.Text>
                   Manufacturer: {starships.manufacturer}
                 </Card.Text>
                 <Button variant="dark" > More </Button>
               </Card.Body>

              </Card>
            ))}
            </div>
            
        </div>
    )
}


export default StarShipCard;