import React, { Component } from 'react';
import { Button, Form, Col, FormGroup, Input, Label, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../CSS/Book.css'



export default class Book extends Component {

  constructor(props) {
    super(props);
    this.state ={
        reserve: [],
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Adults: "",
        Kids: "",
        RoomType: "",
        ArrivalDate: "",
        DeparatureDate:"",
        Questions:""
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
    let formData = {
        firstName : this.state.FirstName,
        lastName : this.state.LastName,
        email : this.state.Email,
        phone : this.state.Phone,
        roomPreference : this.state.RoomType,
        noOfAdults : this.state.Adults,
        noOfChildren : this.state.Kids,
        arrivalDate : this.state.ArrivalDate,
        departureDate : this.state.DeparatureDate,
        questions : this.state.Questions
    };
    this.postAPI(formData);
}

postAPI = async (formData) =>{
    console.log(formData)
    try{
            const response = await axios.post("/sercan_api/v1/reservation", formData
           
            );
            console.log(response.data);
            this.setState({reserve: response.data}) 
            this.props.history.push('/reservation/');
        }

    catch(e){
            console.log("Error", e)
        }

    }
   render(){

       return(
        <React.Fragment>

  <div className="form-div">

  <form onSubmit={this.onSubmit} >
                   <label style={{ marginTop: '40px'}} >
                       First Name:  </label>  <br/>
                       <input type="text" name="FirstName" value={this.state.FirstName} onChange={this.onChange} placeholder="Enter your first name" ></input>            
                    <br/>
                    <label>
                       Last Name:  </label>  <br/>
                       <input type="text" name="LastName" value={this.state.LastName} onChange={this.onChange} placeholder="Enter your last name" ></input>            
                    <br/>
                    <label>
                        Email(required):  </label>  <br/>
                        <input type="text" name="Email" value={this.state.Email} onChange={this.onChange} placeholder="Your email"  />          
                    <br/>
                    <label>
                        Phone:  </label>  <br/>
                        <input type="text" name="Phone" value={this.state.Phone} onChange={this.onChange} placeholder="(000-000-0000)" />
                    <br/>
                    <label>
                    Room Type(required):  </label>  <br/>
                        <input type="text" name="RoomType" value={this.state.RoomType} onChange={this.onChange} placeholder="King's Suite" />          
                    <br/>
                    <label>
                        Number of persons(required):  </label>  <br/>
                        <input type="text" name="Adults" value={this.state.Adults} onChange={this.onChange} placeholder="1" />
                    <br/>
                    <label>
                        Arrival Date:  </label>  <br/>
                        <input type="text" name="ArrivalDate" value={this.state.ArrivalDate} onChange={this.onChange} placeholder="mm/dd/yyyy" />
                    <br/>
                    <label>
                        Deparature Date:  </label>  <br/>
                        <input type="text" name="DeparatureDate" value={this.state.DeparatureDate} onChange={this.onChange} placeholder="mm/dd/yyyy" />
                    <br/>
                    <label>
                        Your Message:  </label>  <br/>
                        <input id="text-area" type="text" name="Questions" value={this.state.Questions} onChange={this.onChange} placeholder="" />
                    <br/>
                    <label id="reserve-submit"> </label>  <br/>
                        <input type="submit"  value="Sumbit Reservation" />
                 
                    <br/>
                    </form>
                    

                    <p style={{fontFamily: 'cursive'}}>(Fill out the form to request your room and dates.We will confirm your reservation as soon as possible.)</p>

                          
  </div>
  </React.Fragment>
           
    
       );   
   }
}

