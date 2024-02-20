
import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        uname: "",
        gender: "",
        age: "",
        dob: "",
        email: "",
        pass: "",
        cpass: "",
        opt: "",
        phone: "",
        add: "",

        de: "",
        cap: "",
        reset: "",
        sub: "",
    });

    const [nameerror, setNameerror] = useState("");
    const [unameerror, setUnameerror] = useState("");
    const [gendererror, setgendererror] = useState("");

    const [doberror, setDoberror] = useState("");
    const [emailerror, setemailerror] = useState("");
    const [adderror, setadderror] = useState("");

    const [phoneerror, setPhoneerror] = useState('');
    const [passerror, setPasserror] = useState('');
    const [cpasserror, setCpasserror] = useState('');

    const navigate=useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevdata) => ({ ...prevdata, [name]: value }));
    }

    

    const handleReset = (e) => {
        setFormData({
            name: "",
            uname: "",
            gender: "",

            dob: "",
            email: "",
            pass: "",
            cpass: "",
            opt: "",
            phone: "",
            add: "",

            de: "",
            cap: "",
            reset: "",
            sub: "",
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        if (formData.name < 1) {
            setNameerror("Enter name")
        }

        if (formData.uname < 1) {
            setUnameerror("Enter username")
        }


        if (formData.add.trim() === '') {
            setadderror("Enter Address")
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email.trim() === '') {
            setemailerror('Enter Email address')
        }
        else if (!emailRegex.test(formData.email)) {
            setemailerror('Enter a valid email address')
        }

        if (formData.dob.trim() === '') {
            setDoberror('Enter Date of birth')
        }



        const phoneRegex = /^\d{10}$/;
        if (formData.phone.trim() === '') {
            setPhoneerror("Phone number is required")
        }
        else if (!phoneRegex.test(formData.phone)) {
            setPhoneerror("Enter valid phone number")
        }

        if (formData.pass.trim() === '') {
            setPasserror("Field required")
        }
        else if (formData.pass.length < 8) {
            setPasserror("Password should contain minimum 8 characters")
        }

        if (formData.cpass.trim() === '') {
            setCpasserror("Confirm your password")
        }
        else if (formData.cpass !== formData.pass) {
            setCpasserror("Passwords do not match")
        }

        if (formData.gender.trim() === '') {
            setgendererror("Select gender")
        }
        navigate('/welcome')



    }
    return (
        <div>
            <h1 style={{textAlign:'center'}}>sign up</h1>
            <form onSubmit={handleSubmit}>
                Name <input type="text" name="name" value={formData.name} placeholder='Enter Name' onChange={handleChange} /> {nameerror && <div style={{ color: 'red' }}>{nameerror}</div>} <br /><br />
                UserName <input type="text" name="uname" value={formData.uname} placeholder='Enter user Name' onChange={handleChange} /> {unameerror && <div style={{ color: 'red' }}>{unameerror}</div>} <br /><br />
                Gender
                <label>
                    <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} />Male
                    <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} />Female
                </label>{gendererror && <div style={{ color: 'red' }}>{gendererror}</div>}
                <br /><br />

                Date of Birth <input type="date" name="dob" value={formData.dob} onChange={handleChange} />{doberror && <div style={{ color: 'red' }}>{doberror}</div>} <br /><br />
                Email Address <input type="email" name="email" value={formData.email} placeholder='Enter your Email' onChange={handleChange} /><span style={{ color: 'red' }}>{emailerror}</span> <br /><br />
                Password <input type="password" name="pass" value={formData.pass} placeholder='Enter your password' onChange={handleChange} />{passerror && <div style={{ color: 'red' }}>{passerror}</div>} <br /><br />
                Confirm Password <input type="password" name="cpass" value={formData.cpass} placeholder='Confirm password' onChange={handleChange} /> {cpasserror && <div style={{ color: 'red' }}>{cpasserror}</div>}<br /><br />
                Phone Number
                <select value={formData.opt} onChange={handleChange}>
                    <option name="A" value="A">+91</option>
                    <option name="B" value="B">+10</option>
                    <option name="C" value="C">+01</option>
                </select>
                <input type="text" name="phone" value={formData.phone} placeholder='Enter your Phone Number' onChange={handleChange} />{phoneerror && <div style={{ color: 'red' }}>{phoneerror}</div>}<br /><br />
                Address <textarea name="add" value={formData.add} placeholder='Enter your Address' onChange={handleChange} /> {adderror && <div style={{ color: 'red' }}>{adderror}</div>}<br /><br />
                <input type="checkbox" value="de" name="de" checked={formData.de} onChange={handleChange} />
                I hereby declare that the above information provided is true and correct. <br /><br />
                <input type="checkbox" value="cap" name="cap" checked={formData.cap} onChange={handleChange} />
                I'm not a robot <br /><br />
                <button type="submit">Submit</button>
                <button type="reset" onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
};

export default Register;