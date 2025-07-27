import React from 'react'

class SurveyEntryList extends React.Component {
    constructor([props]) {
        super(props);
    }
}

this.state = {
    isLoaded: false,
    items: []
}

setItems(remoteItems) {
    var items = [];
    remoteItems.forEach((item) => {
      let newItem = {
         id: item._id,
         fname: item.fname,
         lname: item.lname,
         saddress: item.saddress,
         city: item.city,
         state: item.state,
         zip: item.zip,
         tele: item.tele,
         email: item.email,
         date: item.date,
         students: item.students,
         location: item.location,
         atmos: item.atmos,
         dorms: item.dorms,
         sports: item.sports,
         friends: item.friends,
         television: item.television,
         internet: item.internet,
         other: item.other,
         recommend: item.recommend,
         raffle: item.raffle,
         comments: item.comments
      }
      items.push(newItem)
   });
   this.setState({
      isLoaded: true,
      items: items
   });
}

fetchRemoteItems() {
   fetch("http://34.194.209.134:30007/survey")
      .then(res => res.json())
      .then(
         (result) => {
            this.setItems(result);
         },
         (error) => {
            this.setState({
               isLoaded: false,
               error
            });
         }
      )
}

deleteRemoteItem(id) {
   fetch('http://34.194.209.134:30007/survey' + id, { method: 'DELETE' })
      .then(res => res.json())
      .then(
         () => {
            this.fetchRemoteItems()
         }
      )
}

componentDidMount() { 
   this.fetchRemoteItems(); 
}

handleDelete = (id, e) => { 
   e.preventDefault(); 
   console.log(id); 

   this.deleteRemoteItem(id); 
}

render() {
   let lists = [];
   if (this.state.isLoaded) {
      lists = this.state.items.map((item) =>
         <tr key={item.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <td>{item.fname}</td>
            <td>{item.lname}</td>
            <td>{item.saddress}</td>
            <td>{item.city}</td>
            <td>{item.state}</td>
            <td>{item.zip}</td>
            <td>{item.tele}</td>
            <td>{item.email}</td>
            <td>{new Date(item.date).toDateString()}</td>
            <td>{item.students}</td>
            <td>{item.location}</td>
            <td>{item.atmos}</td>
            <td>{item.dorms}</td>
            <td>{item.sports}</td>
            <td>{item.friends}</td>
            <td>{item.television}</td>
            <td>{item.internet}</td>
            <td>{item.other}</td>
            <td>{item.recommend}</td>
            <td>{item.raffle}</td>
            <td>{item.comments}</td>
            <td><a href="#" onClick={(e) => this.handleDelete(item.id, e)}>Remove</a></td>
         </tr>
      );
   }
   return (
      <div>
         <table onMouseOver={this.handleMouseOver}>
            <thead>
               <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Street Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip Code</th>
                  <th>Telephone</th>
                  <th>E-mail</th>
                  <th>Date</th>
                  <th>Students</th>
                  <th>Location</th>
                  <th>Atmosphere</th>
                  <th>Dorms</th>
                  <th>Sports</th>
                  <th>Friends</th>
                  <th>Television</th>
                  <th>Internet</th>
                  <th>Other</th>
                  <th>Recommend</th>
                  <th>Raffle</th>
                  <th>Comments</th>
               </tr>
            </thead>
            <tbody>
               {lists}
            </tbody>
         </table>
      </div>
   );
}

export default ExpenseEntryItemList;