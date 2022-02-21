import React, { useState } from 'react'

function Sharedpro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [phno, setPhno] = useState('');

    const subm = (e) => {
        e.preventDefault()
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var passwdformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        var phoneno = /^[789]\d{9}$/;
        if (name.length == 0 || email.length == 0 || password.length == 0 || city.length == 0 || phno.length == 0) {
            alert('please fill all details')
        } else {
            if (email.match(mailformat)) {
                if (password.match(passwdformat)) {
                    if (phno.match(phoneno)) {
                        alert("form submitted sucessfully!!")
                        setName("");
                        setEmail("")
                        setCity("")
                        setPassword("")
                        setPhno("")
                    } else {
                        alert("Invalid phone number!")
                    }

                } else {
                    alert("Password must have Minimum eight characters, at least one uppercase letter, one lowercase letter and one number")
                }

            } else {
                alert("Invalid Email!");
            }

        }
        //alert(`name is ${name} and email ${email} ${city}`)

    }
    return (

        <div className='col-lg-6 offset-lg-3 border mt-4'>
            <form onSubmit={subm}>
                <div class=" justify-content-center">
                    <div className="mb-3 ">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" aria-describedby="Name"
                            value={name} onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 ">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <select class="form-select" aria-label="Default select example" onChange={(e) => setCity(e.target.value)}>
                            <option selected>Select city</option>
                            <option value="pune">Pune</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="delhi">Delhi</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">phone number</label>
                        <input className="form-control" type="tel"
                            value={phno} onChange={(e) => setPhno(e.target.value)} />
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Sharedpro