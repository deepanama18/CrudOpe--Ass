import React,{useState} from 'react'


function Validate(props) {
    
    const [state, setstate] = useState({
        name: "",
        email: "",
        pass: ""
    })

    const { name, email, pass } = state;
 
    const handleChange = (e) => {
       
        console.log(e.target.value)
      setstate({...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        if (name === "" || email === "" || pass === "") {
          alert("Please Enter All Details")
        } 
        e.preventDefault();
        console.log(state)
        props.history.push("./Create")
}


    return (
            <center>
            <div style={{marginTop:"50px"}}>
                <input type="text" required
                     style={{margin:"10px"}}
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={handleChange}
                /><br />
                <input type="email" required
                     style={{margin:"10px"}}
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={handleChange}
                /><br />
                <input type="pass" required
                    style={{margin:"10px"}}
                    name="pass"
                    placeholder="Enter Password"
                    value={pass}
                    onChange={handleChange}
                /><br />
                <button
                    className="btn btn-info"
                     style={{margin:"10px"}}
                    onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            </center>
        )
    }


export default Validate;