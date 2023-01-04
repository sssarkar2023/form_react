import { useState } from 'react';
const FormComponent1 = () => {
    
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && email) {
            const person = { id: new Date().getTime().toString(), firstName, email };
            //console.log(person);
            setPeople((people) => {
                return [...people, person];
            });
            setFirstName('');
            setEmail('');
        } else {
            alert("Please fill the form");
        }
    }
    return (
        <>
            <article>
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">Name: </label>
                        <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <button type="submit">Add Person</button>
                </form>
                {people.map((person) => {
                    const { id, firstName, email } = person;
                    return (
                        <div className='item' key={id}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                        </div>
                    )
                })}
                
        </article>
        </>
    )
}

export default FormComponent1;