// localStorage.setItem('key', 'username')
// localStorage.getItem('key')
// localStorage.removeItem('key')
// localStorage.clear()
const form = document.form('login-form')
const student = document.getElementById('user-student')
const lecturers = document.getElementById('user-lecturers')
const pawstudent = document.getElementById('pass-student')
const pawlectures = document.getElementById('pass-lecturers')

let itemsArray = []
localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const cipherMaker = text => {
  const
}
