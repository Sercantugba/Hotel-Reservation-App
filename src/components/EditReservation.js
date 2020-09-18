import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Lable, Container, Table } from 'reactstrap';
import { Link} from 'react-router-dom';
import axios from 'axios'




export default class EditReservation extends Component {

  constructor(props) {
    super(props);
    this.state ={
        id: window.location.pathname.split("/")[2],
        reserve: [],
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Persons: "",
        RoomType: "",
        ArrivalDate: "",
        DeparatureDate:"",
        Questions:""
    }
  }


  async componentDidMount() {
      console.log(this.state.id)
 
    try{
            const response = await axios.get("https://cors-anywhere.herokuapp.com/https://calm-ocean-37082.herokuapp.com/sercan_api/v1/reserve/"+window.location.pathname.split("/")[2])
            console.log(response.data);
            this.setState({FirstName: response.data.firstName,
                LastName: response.data.lastName,
                Email: response.data.email,
                Phone: response.data.phone,
                Persons: response.data.persons,
                RoomType: response.data.roomPreference,
                ArrivalDate: response.data.arrivalDate,
                Questions: response.data.questions,
                DepartureDate: response.data.departureDate,

            })
        }

    catch(e){
            console.log("Error", e)
        }
    }


  onChange = (event) =>{
    event.preventDefault();
    console.log("Onchange", event.target.value)
    this.setState({
      [event.target.name]:event.target.value
    });
}


onSubmit=(event) =>{
    event.preventDefault();
    alert("We received your changes request.Please check your email for confirmation!Thank you for choosing Andros Resort!!");
    let formData = {
        firstName : this.state.FirstName,
        lastName : this.state.LastName,
        email : this.state.Email,
        phone : this.state.Phone,
        roomPreference : this.state.RoomType,
        numberOfPersons : this.state.Persons,
        arrivalDate : this.state.ArrivalDate,
        departureDate : this.state.DepartureDate,
        questions : this.state.Questions
    };
    this.postAPI(formData);
}

postAPI = async (formData) =>{
    console.log(formData)
    try{
            const response = await axios.put("https://cors-anywhere.herokuapp.com/https://calm-ocean-37082.herokuapp.com/sercan_api/v1/reserve/"+window.location.pathname.split("/")[2], formData
           
            );
            console.log(response.data);
          
            this.props.history.push('/manageReservation/');
        }

    catch(e){
            console.log("Error", e)
        }

       
    }
   render(){
 
    console.log(this.state.id)
       return(
        <React.Fragment>

<form className="form-div" onSubmit={this.onSubmit} style={{marginTop:'100px'}} >
                   <label>
                       First Name:  </label>
                       <input type="text" name="FirstName" value={this.state.FirstName} onChange={this.onChange}></input>            
                    <br/>
                    <label>
                       Last Name:  </label>
                       <input type="text" name="LastName" value={this.state.LastName} onChange={this.onChange}></input>            
                    <br/>
                    <label>
                        Email:  </label>
                        <input type="text" name="Email" value={this.state.Email} onChange={this.onChange} />          
                    <br/>
                    <label>
                        Phone:  </label>
                        <input type="text" name="Phone" value={this.state.Phone} onChange={this.onChange} />
                    <br/>
                    <label>
                    Room Type:  </label>
                        <input type="text" name="RoomType" value={this.state.RoomType} onChange={this.onChange} />          
                    <br/>
                    <label>
                        Number of Persons:  </label>
                        <input type="text" name="Persons" value={this.state.Persons} onChange={this.onChange} />
                    <br/>
                    
                    <label>
                        Arrival Date:  </label>
                        <input type="text" name="ArrivalDate" value={this.state.ArrivalDate} onChange={this.onChange} />
                    <br/>
                    <label>
                        Deparature Date:  </label>
                        <input type="text" name="DeparatureDate" value={this.state.DepartureDate} onChange={this.onChange} />
                    <br/>
                    <label>
                        Questions/Concerns:  </label>
                        <input type="text" name="Questions" value={this.state.Questions} onChange={this.onChange} />
                    <br/>
                    <label>
                        <input type="submit" value="Submit" />
                    </label>  
                    </form>


           
  </React.Fragment>
           
    
       );   
   }
}
