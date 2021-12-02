import axios from 'axios';
import React from 'react'
import AddUsersForm from './AddUsersForm';



class Create extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            userData: [],
            search: "",
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then(data => {
            console.log(data.data);
            this.setState({ userData: data.data })
        })
    }


     DeleteData = (ele) => {
         console.log(ele, "deleted")
         this.setState({
             userData: this.state.userData.filter((item, index) => {
             return item!==ele
         })})
        }

      DeleteCompData = (ele) => {
          console.log(ele, "deleteall")
          this.setState({
             userData: this.state.userData.filter((item, index) => {
             return item.index!==ele
         })})
    }
    
    addUser = user => {
         console.log(user)
    user.id = this.state.userData.length + 1;
        this.setState({ userData: [...this.state.userData, user] });
    };
    
    editRow = user => {
        console.log(user)
    }

     

    render() {

      return (
             <div >
                <h2 style={{fontSize:"30px", margin:"30px", color:"blueviolet"}}>Crud Operation</h2>
              <input type="text" placeholder="Search Employee"
                  style={{padding:"5px", margin:"10px"}}
                  value={this.state.search}
                  onChange={(e) => { console.log(e); this.setState({ search: e.target.value }) }}
              />
               
              <button style={{ margin: "10px" }}
                  className="btn btn-success"
                  onClick={() => this.DeleteCompData()}>
                  DeleteAll
              </button>
              
              <AddUsersForm addUser={this.addUser} />
              
             <center>
                    <table className="col">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                          {this.state.userData.filter((ele, index) => {
                              const name = ele.name.toLowerCase().includes(this.state.search.toLowerCase())
                              const username = ele.username.toLowerCase().includes(this.state.search.toLowerCase())
                              const email = ele.email.toLowerCase().includes(this.state.search.toLowerCase())

                              return name||username||email
                           })
                              
                               .map((ele, index) => (
                            <tr key={index}>
                                <td>{ele.name}</td>
                                <td>{ele.username}</td>
                                <td>{ele.email}</td>
                                       <td><button style={{ margin: "10px" }}
                                           className="btn btn-primary"
                                           onClick={() => this.DeleteData(ele)}>
                                           Delete
                                            </button>
                                       </td>
                                      <td> <button style={{ margin: "10px" }}
                                           className="btn btn-primary"
                                           onClick={() => this.editRow(ele)} >
                                            Edit
                                           </button>
                                       </td>
                            </tr>
                            ))}
                            
                        </tbody>
                    </table>
           </center>

            </div>
        )
    }
}

export default Create;