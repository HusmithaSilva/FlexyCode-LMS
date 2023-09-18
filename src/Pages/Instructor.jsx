import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Student from '../Body/Student'


export default function Instructor() {
  return (
    // header instructors footer components render here
    // together it create instructor jsx
    <div>
        <Header />
      <Student/>
      <Footer />
    </div>
  )
}
