import { useState  } from "react"; //Importimi i Hook

const About = () => {
    
    //let name = 'Arianit'; //nuk mundet me ndryshue vlera

    const [name, setName] = useState('Arianit') //useState hook used for reactive values
    const [age, setAge] = useState(27); //age emri i variables setAge emri i hook

    const click = () => {
        //name = 'Ari';
        setName('Ari'); //Menyra se si e ndryshojme vleren e Hook.
        setAge(23);
    }

    return ( 
        <div className="about">
            <h2>About</h2>
            <p>{ name } is {age} years old</p>
            <button onClick={click}>Kliko</button>
        </div>
     );
}
 
export default About;