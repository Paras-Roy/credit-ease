import { useEffect, useState } from 'react';
import './form.scss'

const Form = () => {

    const [name, setName] = useState({})
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/api");
                if (response.status === 200) {
                    const data = await response.json();
                    setName(data);
                } else {
                    throw new Error("An error occurred");
                }
            } catch (err) {
                console.log(err);
                setName({});
            }
        }
        fetchData();
    }, []);

    return ( 
        <div className="form">
            {name.tutorial}
        </div>
     );
}
 
export default Form;