import { useNavigate, useLocation } from 'react-router-dom'
import { useRef } from 'react'
import './View.css'

function Modify() {
  const navigate = useNavigate()

  const entry = useLocation().state.entry

  const fnameRef = useRef()
  const lnameRef = useRef()
  const saddressRef = useRef()
  const cityRef = useRef()
  const stateRef = useRef()
  const zipRef = useRef()
  const teleRef = useRef()
  const emailRef = useRef()
  const dateRef = useRef()
  const studentsRef = useRef()
  const locationRef = useRef()
  const atmosRef = useRef()
  const dormsRef = useRef()
  const sportsRef = useRef()
  const friendsRef = useRef()
  const televisionRef = useRef()
  const internetRef = useRef()
  const otherRef = useRef()
  const likelyRef = useRef()
  const raffleRef = useRef()
  const commentsRef = useRef()

  const onCancelClick = () => {
    navigate('/')
  }

  const onSubmitClick = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: entry.id,
        fName: fnameRef.current.value,
        lName: lnameRef.current.value,
        streetAddress: saddressRef.current.value,
        city: cityRef.current.value,
        state: stateRef.current.value,
        zip: zipRef.current.value,
        telephone: teleRef.current.value,
        email: emailRef.current.value,
        date: dateRef.current.value,
        likeStudents: studentsRef.current.checked,
        likeLocation: locationRef.current.checked,
        likeAtmos: atmosRef.current.checked,
        likeDorms: dormsRef.current.checked,
        likeSports: sportsRef.current.checked,
        interestFriends: friendsRef.current.checked,
        interestTv: televisionRef.current.checked,
        interestInternet: internetRef.current.checked,
        interestOther: otherRef.current.checked,
        likely: likelyRef.current.value,
        raffle: raffleRef.current.value,
        comment: commentsRef.current.value
      })
    }

    fetch('http://34.194.209.134:30007/survey/' + entry.id, requestOptions)
      .then(async response => {
        const data = await response.json()

        console.log(response)
        if (!response.ok) {
          const error = (data && data.message) || response.status
          return Promise.reject(error)
        }
      })
      .catch(error => {
        console.error('There was an error!', error)
      })

    navigate('/view')
  }

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
          <tr key={entry.id}>
            <td><input ref={fnameRef} type="text" defaultValue={entry.fName}/></td>
            <td><input ref={lnameRef} type="text" defaultValue={entry.lName}/></td>
            <td><input ref={saddressRef} type="text" defaultValue={entry.streetAddress}/></td>
            <td><input ref={cityRef} type="text" defaultValue={entry.city}/></td>
            <td><input ref={stateRef} type="text" defaultValue={entry.state}/></td>
            <td><input ref={zipRef} type="text" defaultValue={entry.zip}/></td>
            <td><input ref={teleRef} type="text" defaultValue={entry.telephone}/></td>
            <td><input ref={emailRef} type="email"defaultValue={entry.email}/></td>
            <td><input ref={dateRef} type="date" defaultValue={entry.date}/></td>
            <td><input ref={studentsRef} type="checkbox" defaultChecked={entry.likeStudents === "true"}/></td>
            <td><input ref={locationRef} type="checkbox" defaultChecked={entry.likeLocation === "true"}/></td>
            <td><input ref={atmosRef} type="checkbox" defaultChecked={entry.likeAtmos === "true"}/></td>
            <td><input ref={dormsRef} type="checkbox" defaultChecked={entry.likeDorms === "true"}/></td>
            <td><input ref={sportsRef} type="checkbox" defaultChecked={entry.likeSports === "true"}/></td>
            <td><input ref={friendsRef} type="radio" name="interest" defaultChecked={entry.interestFriends === "true"}/></td>
            <td><input ref={televisionRef} type="radio" name="interest" defaultChecked={entry.interestTv === "true"}/></td>
            <td><input ref={internetRef} type="radio" name="interest" defaultChecked={entry.interestInternet === "true"}/></td>
            <td><input ref={otherRef} type="radio" name="interest" defaultChecked={entry.interestOther === "true"}/></td>
            <td>
              <select ref={likelyRef}>
                <option value="high" selected={entry.likely === "high"}>Very Likely</option>
                <option value="medium" selected={entry.likely === "medium"}>Likely</option>
                <option value="low" selected={entry.likely === "low"}>Unlikely</option>
              </select>
            </td>
            <td><input ref={raffleRef} type="text" defaultValue={entry.raffle}/></td>
            <td><textarea ref={commentsRef} defaultValue={entry.comment}/></td>
            <td><button onClick={onCancelClick}>Cancel</button></td>
            <td><button onClick={onSubmitClick}>Submit</button></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Modify