import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Gambar from '../LOGO.png';

function ContohCard(){
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card style = {{ width : '18rem' }}>
            <Card.Img variant = "top" src={Gambar}/>
            <Card.Body>
            <Card.Title>WELCOME TO GoHealthy</Card.Title>
            <Card.Text>Stay healthy and choose your taste
                Lets Costume Your Favorite Food! 
            </Card.Text>
            <Button variant ="primary">Order Now</Button>
        </Card.Body>
        </Card>
        </div>
    );
}

export default ContohCard;