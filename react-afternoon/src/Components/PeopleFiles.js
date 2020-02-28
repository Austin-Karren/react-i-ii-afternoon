import React, { Component } from 'react'

class PeopleFiles extends Component{
   // const {people} = prop;
   // console.log(people)

   // return(
   //    <div className="PeopleFiles">

   //    </div>
   // )
   constructor (props){
      super(props);
      this.state ={

      }
   }

   render() {
      const {person} = this.props;
      console.log(this.props)
      return (
          <div className="PeopleFiles">
             <h1>{person.name.first} {person.name.last}</h1>
             <a><b>From:</b> {person.city}, {person.country} </a>
             <br></br>
             <a><b>Job Title:</b> {person.title} </a>
             <br></br>
             <a><b>Employer:</b> {person.employer} </a>
             <br></br>
             <b>Favorite Movies:</b>
             <ol>
                <li> {person.favoriteMovies[0]} </li>
                <li> {person.favoriteMovies[1]} </li>
                <li> {person.favoriteMovies[2]} </li>
             </ol>
          </div>
      );
   }
}

export default PeopleFiles;