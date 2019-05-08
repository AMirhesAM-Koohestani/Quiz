import React from 'react';

class Add extends React.Component {

   state={
      team: [
         name="",
         initial_budget=0,
         tot_players=0
      ]
   }

   // onFormSubmit = (e) => {
   //    e.preventDefault();
   //    this.setState(() => ({

   //    }));
   // }

   render() {
      return (
         <div>
            <form onFormSubmit={this.onFormSubmit}>
               <p>
               Team Name: <input type="text" /> <br/>
               Initial Budget: <input type="number" /> <br/>
               Total players: <input type="number" /><br/>   
               </p>
            <button>Submit</button>
            </form>
             
            
         </div>
      );
   }

}

export default Add;