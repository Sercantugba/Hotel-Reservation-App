
  // import React, { Component } from 'react';
  // import axios from 'axios'
  // import '../CSS/Explore.css'
  
  
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // console.log(API_KEY)
  // // console.log(process.env.REACT_APP_API_KEY)
  // export default class Explore extends Component {
  
      
  //     constructor(props) {
  //         super(props);
  //         this.state ={
  //             results: [],
  //             restaurants: []
  //         }
  //     }
  //     // axios({
  //     //   "method":"GET",
  //     //   "url":"https://tripadvisor1.p.rapidapi.com/answers/list",
  //     //   "headers":{
  //     //   "content-type":"application/octet-stream",
  //     //   "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
  //     //   "x-rapidapi-key":"a1be738c59msh90b89d50dd2b608p193fbcjsne225fdbec97b",
  //     //   "useQueryString":true
  //     //   },"params":{
  //     //   "limit":"10",
  //     //   "question_id":"5283833"
  //     //   }
  //     //   })
  //     async componentDidMount() {
  //         try{
  //             const response = await axios.get("https://tripadvisor1.p.rapidapi.com/attractions/list",
  //                {
  //                   "headers":{
  //                     "content-type":"application/octet-stream",
  //                     "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
  //                       "x-rapidapi-key":API_KEY,
  //                       "useQueryString":true
  //                       },"params":{
  //                         // "limit":"10",
  //                         // "question_id":"5283833"
  //                         "lang":"en_US",
  //                         "currency":"USD",
  //                         "sort":"recommended",
  //                         "lunit":"km",
  //                         "location_id":"55711",
  //                         "limit" : "5"
                   
  //                         }
  //                });
  //                console.log(response.data)
  //                const restau = await axios.get("https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng",
  //                {
  //                   "headers":{
  //                     "content-type":"application/octet-stream",
  //                     "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
  //                       "x-rapidapi-key":API_KEY,
  //                       "useQueryString":true
  //                       },"params":{
  //                         "limit":"5",
  //     "currency":"USD",
  //     "distance":"2",
  //     "lunit":"km",
  //     "lang":"en_US",
  //     "latitude":"32.778534",
  //     "longitude":"-96.79938"}
  //   });
  //   console.log(restau.data)
  //             this.setState({results: response.data.data, isLoading: false})
  //             this.setState({restaurants: restau.data.data, isLoading: false})  
          
  //         }
            
  //         catch(e){
  //             console.log("Error", e)
  //         }
  //       }
  
  
  //       render() {
  //           console.log(this.state.restaurants)
  
  //         return (
  //             <div>
  // {/* <h1>hey there</h1> */}
  // <div style={{backgroundColor:'yellow'}}>{this.state.restaurants.map((reser) => <ul>
      
  //     <li>{reser.address}</li><li>{reser.name}</li><li>{reser.description}
  //         </li></ul>)}</div>
  // {this.state.results.map((res) => <ul><li>
  //         <img src={res.photo.images.medium.url} /> </li><li>{res.address}</li><li>{res.name}</li><li>{res.description}
  //         </li></ul>)}
  // </div>
  //         )
  //     }
  // }

  
import React, { Component } from 'react';
import axios from 'axios'
import '../CSS/Explore.css'


const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY)
export default class Explore extends Component {

    
    constructor(props) {
        super(props);
        this.state ={
            results: [],
            restaurants: []
        }
    }
    async componentDidMount() {
        try{
            const response = await axios.get("https://tripadvisor1.p.rapidapi.com/attractions/list",
               {
                  "headers":{
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
                      "x-rapidapi-key":API_KEY,
                      "useQueryString":true
                      },"params":{
                        "lang":"en_US",
                        "currency":"USD",
                        "sort":"recommended",
                        "lunit":"km",
                        "location_id":"55711",
                        "limit" : "5"
                       
                 
                 
                        }
               });
               const restau = await axios.get("https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng",
               {
                  "headers":{
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
                      "x-rapidapi-key":API_KEY,
                      "useQueryString":true
                      },"params":{
                        "limit":"5",
    "currency":"USD",
    "distance":"2",
    "lunit":"km",
    "lang":"en_US",
    "latitude":"32.778534",
    "longitude":"-96.79938"
                       
                        
                 
                        }
               });
        
       
    
            console.log(restau.data.data)
            let x=restau.data.data;
            console.log(x[0].photo);
           console.log(x[0].photo.images.medium.url); 
           console.log(x[0].cuisine[0].name); 
      
             this.setState({results: response.data.data, isLoading: false})
            this.setState({restaurants: restau.data.data, isLoading: false})  
        
        }
          
        catch(e){
            console.log("Error", e)
        }
      }


      render() {
          console.log(this.state.restaurants)

        return (
         <React.Fragment>

           <h1 id="explore-header">Explore nearby restaurants and attractions in Dallas</h1>
       
            <div className="explore-main-container">

        <div className="first-item">{this.state.restaurants.map((res) => <div className="restaurants">
    {/* <li>
        <img src={res.large.url} /> </li> */}
{/* <li>{res.photo}</li> */}
<h4>{res.name}</h4>
<p>{res.address}</p><p>{res.description}</p>
      </div>)}</div>

        <div className="second-item">

       {this.state.results.map((res) =><div className="attractions"> 
        <img src={res.photo.images.medium.url} alt="attraction"/> <h4>{res.name}</h4> <p>{res.address}</p><p>{res.description}</p>
        </div>)}
        </div>


</div>
</React.Fragment>
        )
    }
}
