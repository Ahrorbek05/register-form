import { useState } from 'react';
import '../Form/form.css';




export default function Form() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('+9989');
const [link, setLink] = useState('');
const [state, setState] = useState('');
const [city, setCity] = useState('');
const [residence, setResidence] = useState('');
const [employee, setEmployee] = useState('')
const [Desc, setDesc] = useState('')

function handleName(event){
  setName(event.target.value)
}

function handleEmail(event){
  setEmail(event.target.value)
}

function handlePhone (event){
  setPhone(event.target.value)
}

function handleState(event){
  setState(event.target.value)
}

function handleEmployee(event){
  setEmployee(event.target.value)
}

function handleCity(event){
  setCity(event.target.value)
}

function handleState(event){
  setState(event.target.value)
}


function handleDesc(event){
  setDesc(event.target.value)
}

function handleForm(event){
  event.preventDefault();
  let user = {
    name: name,
    email: email,
    phone: phone,
    link: link,
    state: state,
    Desc: Desc,
    city: city,
    residence: residence,
    employee: employee
  }

  localStorage.setItem('user', JSON.stringify(user))

}

    
return (
        <div className="form-container">
        <h1>Kompaniya ma’lumotlari</h1>
        <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
        <form>
          <div className="user">
            <img src="../src/images/ellipse.png" alt="ellipse" />
            <span><a href="yuklash">Yuklash</a></span>
          </div>
          <div className="form-group">
            <label>Kompaniya nomi <span>*</span></label>
            <input type="text" placeholder="Kompaniya nomi" required  onChange={handleName} />
          </div>
          <div className="form-group">
            <label>Email <span>*</span></label>
            <input type="email" placeholder="Email" required  onChange={handleEmail}/>
          </div>
          <div className="form-group">
            <label>Telefon raqami <span>*</span></label>
            <input type="tel" placeholder="UZ +9989" required onChange={handlePhone}/>
          </div>
          <div className="form-group">
            <label>Linklar <span>*</span></label>
            <div className="social-links">
              <button className="link-btn"><img src="../src/images/icon1.svg" alt="icons" /></button>
              <button className="link-btn"><img src="../src/images/instagram.svg" alt="icons" /></button>
              <button className="link-btn"><img src="../src/images/telegram.svg" alt="icons" /></button>
              <button className="link-btn"><img src="../src/images/facebook.svg" alt="icons" /></button>
              <button className="link-btn"><img src="../src/images/github.svg" alt="icons" /></button>
            </div>
          </div>
          <div className="region">
          <div className="form-group1">
            <label>Davlat <span>*</span></label>
            <select required onChange={handleState}>
              <option value="davlat">Davlat</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Kazakhstan">Kazakhitan</option>
              <option value="Russia">Russia</option>
            </select>
          </div>
          <div className="form-group2">
            <label>Shahar <span>*</span></label>
            <select required onChange={handleCity}>
              <option value="">Shahar</option>
              <option value="Toshkent">Toshkent</option>
              <option value="Astana">Astana</option>
              <option value="Moskva">Moskva</option>
            </select>
          </div>
          </div>
          <div className="form-group">
            <label>Yashash joyi <span>*</span></label>
            <input type="text" placeholder="Joy" required onChange={handleState}/>
          </div>
          <div className="form-group">
            <label>Hodimlar soni <span>*</span></label>
            <input type="number" placeholder="Hodimlar soni" required onChange={handleEmployee}/>
          </div>
          <div className="form-group">
            <label>Izoh <span>*</span></label>
            <textarea placeholder="Kompaniya haqida izoh qoldiring" required onChange={handleDesc}></textarea>
          </div>
          <div className="form-buttons">
            <button type="button" className="back-btn">Ortga</button>
            <button type="submit" className="next-btn" onClick={handleForm}>Keyingisi</button>
          </div>
        </form>
      </div>
)
}