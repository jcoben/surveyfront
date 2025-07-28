import {useState, useEffect} from "react"
import { useNavigate, Link } from 'react-router-dom'
import './View.css'

function View() {
  const navigate = useNavigate()
  const [data, setData] = useState([]);

  const onRemoveClick = (id) => {
    console.log("Deleting entry with id: " + id)
    fetch('http://34.194.209.134:30007/survey/' + id, { method: 'DELETE' })
      //.then(res => res.json())
      .then(
         () => {
            fetch('http://34.194.209.134:30007/survey')
              .then((response) => response.json())
              .then((json) => setData(json))
         }
      )
  }

  useEffect(() => {
    fetch('http://34.194.209.134:30007/survey')
      .then((response) => response.json())
      .then((json) => setData(json))
  }, []);

  return (
    <>
      <table>
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
          {data.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.fName}</td>
              <td>{entry.lName}</td>
              <td>{entry.streetAddress}</td>
              <td>{entry.city}</td>
              <td>{entry.state}</td>
              <td>{entry.zip}</td>
              <td>{entry.telephone}</td>
              <td>{entry.email}</td>
              <td>{new Date(entry.date).toDateString()}</td>
              <td>{entry.likeStudents}</td>
              <td>{entry.likeLocation}</td>
              <td>{entry.likeAtmos}</td>
              <td>{entry.likeDorms}</td>
              <td>{entry.likeSports}</td>
              <td>{entry.interestFriends}</td>
              <td>{entry.interestTv}</td>
              <td>{entry.interestInternet}</td>
              <td>{entry.interestOther}</td>
              <td>{entry.likely}</td>
              <td>{entry.raffle}</td>
              <td>{entry.comment}</td>
              <td><Link to="/modify" state={{entry}}>Edit</Link></td>
              <td><button onClick={() => onRemoveClick(entry.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default View