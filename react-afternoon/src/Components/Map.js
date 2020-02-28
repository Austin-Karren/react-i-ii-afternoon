import React, {Component} from 'react';
import people from '../data'
import People from './PeopleFiles'

class MapData extends Component {
   constructor(props) {
      super(props);
      this.state = { people: people, index: 0 }

      this.handlePreviousButton = this.handlePreviousButton.bind(this);
      this.handleNextButton = this.handleNextButton.bind(this);
   }

   handlePreviousButton(){
      if(this.state.index > 0){
         this.setState({ index: this.state.index -1 })
      } else if(this.state.index === 0){
         this.setState({ index: 24 })
      }
   }

   handleNextButton(){
      if(this.state.index < 24){
         this.setState({ index: this.state.index +1 })
      } else if(this.state.index === 24){
         this.setState({ index: 0 })
      }
   }

   render() { 
      // let peopleMap = this.state.people.map(person => {
      //    return <People key={person.id} people={person}/>
      // });
      let data = this.state.people[this.state.index];
      let backArrow = '<';
      return ( 
         <div className="EmployeePage">
            <div className="PageCounter"> {this.state.index +1}/25 </div>
            <People person={data}/>
            <div className="buttonContainer">
               <button className="button" onClick={this.handlePreviousButton}> {backArrow} Previous</button>
               <button className="button" onClick={this.handleNextButton}>Next > </button>
            </div>
         </div>
       );
   }
}
 
export default MapData;