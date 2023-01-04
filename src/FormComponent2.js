import { useState } from "react";
const FormComponent2 = () => {
    
    const [person, setPerson] = useState({ firstName: '', age: '', email: '',mobile:'' });
    const [people, setPeople] = useState([]);

    const handleChange = (e) => {
        
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
        //console.log(person);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (person.firstName && person.age && person.email && person.mobile) {
            
            const newPerson = { ...person, id: new Date().getTime().toString() };
            setPeople([...people, newPerson]);
            setPerson({ firstName: '', age: '', email: '',mobile:'' });

        }
    };


    return (
        <>
            <article className="form">
                <form>
                    <div>
                        <label htmlFor="firstName">Name:</label>
                        <input type="text" name="firstName" id="firstName" value={person.firstName} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="age">Age: </label>
                        <input type="number" id="age" name="age" value={person.age} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name="email" value={person.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="phonenumber">Mobile No: </label>
                        <input type="number" id="mobile" name="mobile" value={person.mobile} onChange={handleChange} />
                    </div>
                    <button type="submit" onClick={handleSubmit}>Add Person</button>
                </form>
                
            </article>
            <article>
                {people.map((person) => {
                    const { id, firstName, email, age,mobile } = person;
                    return (
                        <div className='item' key={id}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                            <p>{age}</p>
                            <p>{mobile}</p>

                        </div>
                    )
                })}
            </article>
        
        </>
    )
}

export default FormComponent2;