import { useState, useRef } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

function Enter() {
  const navigate = useNavigate()

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

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [saddress, setSaddress] = useState("")
  const [city, setCity] = useState(false)
  const [state, setState] = useState(false)
  const [tele, setTele] = useState(false)
  const [email, setEmail] = useState(false)
  const [date, setDate] = useState(false)
  const [students, setStudents] = useState(false)
  const [location, setLocation] = useState(false)
  const [atmos, setAtmos] = useState(false)
  const [dorms, setDorms] = useState(false)
  const [sports, setSports] = useState(false)
  const [friends, setFriends] = useState(false)
  const [television, setTelevision] = useState(false)
  const [radio, setRadio] = useState(false)
  const [other, setOther] = useState(false)
  const [likely, setlikely] = useState(false)
  const [raffle, setRaffle] = useState(false)
  const [comments, setComments] = useState(false)

  const onCancelClick = () => {
    navigate('/')
  }

  const onSubmitClick = () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id:  "",
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

    fetch('http://34.194.209.134:81/survey', requestOptions)
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
    navigate('/')
  }

  return (
    <>
        <form>
          <div className="surveyLine">
              <div className="surveyItem ">
                  <label for="fname">First name:</label>
                  <input ref={fnameRef} type="text" id="fname" name="fname"/>
              </div>
              <div className="surveyItem ">
                  <label for="lname">Last name:</label>
                  <input ref={lnameRef} type="text" id="lname" name="lname"/>
              </div>
          </div>
          <div className="surveyLine">
              <div className="surveyItem ">
                  <label for="saddress">Street Address:</label>
                  <input ref={saddressRef} type="text" id="saddress" name="saddress"/>
              </div>
              <div className="surveyItem ">
                  <label for="city">City:</label>
                  <input ref={cityRef} type="text" id="city" name="city"/>
              </div>
          </div>
          <div className="surveyLine">
              <div className="surveyItem ">
                  <label for="state">State:</label>
                  <input ref={stateRef} type="text" id="state" name="state"/>
              </div>
              <div className="surveyItem ">
                  <label for="zip">Zip:</label>
                  <input ref={zipRef} type="text" id="zip" name="zip"/>
              </div>
          </div>
          <div className="surveyLine">
              <div className="surveyItem ">
                  <label for="tele">Telephone:</label>
                  <input ref={teleRef} type="text" id="tele" name="tele"/>
              </div>
              <div className="surveyItem ">
                  <label for="email">E-mail:</label>
                  <input ref={emailRef} type="email" id="email" name="email"/>
              </div>
          </div>
          <div className="surveyLine">
              <div className="surveyItem ">
                  <label for="date">Date:</label>
                  <input ref={dateRef} type="date" id="date" name="date"/>
              </div>
          </div>
          
          <label className="surveyHeading">What did you like most about campus?</label>
          <div className="checkItem">
              <label for="students">
                  <input ref={studentsRef} type="checkbox" name="students" />
                  Students
              </label>
          </div>
          <div className="checkItem">
              <label for="location">
                  <input ref={locationRef} type="checkbox" name="location" />
                  Location
              </label>
          </div>
          <div className="checkItem">
              <label for="atmos">
                  <input ref={atmosRef} type="checkbox" name="atmos" />
                  Atmosphere
              </label>
          </div>
          <div className="checkItem">
              <label for="dorms">
                  <input ref={dormsRef} type="checkbox" name="dorms" />
                  Dorms
              </label>
          </div>
          <div className="checkItem">
              <label for="sports">
                  <input ref={sportsRef} type="checkbox" name="sports" />
                  Sports
              </label>
          </div>

          <label className="surveyHeading">How did you become interested in the university?</label>
          <div className="surveyRadios">
              <div className="surveyRadio">
                  <input ref={friendsRef} type="radio" id="friends" name="interest" defaultChecked />
                  <label for="friends">Friends</label>
              </div >
              <div className="surveyRadio">
                  <input ref={televisionRef} type="radio" id="television" name="interest" />
                  <label for="television">Television</label>
              </div >
              <div className="surveyRadio">
                  <input ref={internetRef} type="radio" id="internet" name="interest" />
                  <label for="internet">Internet</label>
              </div>
              <div className="surveyRadio">
                  <input ref={otherRef} type="radio" id="other" name="interest" />
                  <label for="other">Other</label>
              </div>
          </div>

          <label for="likely" className="surveyHeading">How likely are you to recommend this university?: </label>
          <select name="likely" id="likely" ref={likelyRef}>
              <option value="high">Very Likely</option>
              <option value="medium">Likely</option>
              <option value="low">Unlikely</option>
          </select>

          <div>
            <label for="raffle" className="surveyHeading">Raffle:</label>
            <input ref={raffleRef} type="text" id="raffle" name="raffle"/>
          </div>

          <div>
            <label for="comments" className="surveyHeading">Additional Comments:</label>
            <textarea ref={commentsRef} id="comments" name="comments"/>
          </div>

          <div>
            <button onClick={onCancelClick}>Cancel</button>
            <button onClick={onSubmitClick}>Submit</button>
          </div>
        </form>
    </>
  )
}

export default Enter