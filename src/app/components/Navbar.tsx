import React from 'react'

export default function navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg p-3 mb-5 rounded">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a href='/' className="btn btn-ghost text-xl">วิชาปรัชญาเศรษฐกิจพอเพียงและพุทธศาสนา</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a href='/'>หน้าหลัก</a></li>
        <li>
          <details>
            <summary>เกี่ยวกับ</summary>
            <ul className="p-2">
              <li><a href='/logic'>ความมีเหตุผล</a></li>
              <li><a href='/middle'>ความพอประมาณ</a></li>
              <li><a href='/immunity'>ภูมิคุ้มกัน</a></li>
              <li><a href='/knowledge'>ความรู้</a></li>
              <li><a>คุณธรรม</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>AI ตรวจวินิฉัยโรค</summary>
            <ul className="p-2">
              <li><a>AI ตรวจมะเร็งผิวหนัง</a></li>
              <li><a>AI ตรวจมะเร็งปอด</a></li>
              
            </ul>
          </details>
        </li>
        <li><a>องค์กรเสมือนจริง</a></li>
        <li><a>ติดต่อ</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn btn-primary">Sign In</a> 
      <a className="btn ml-3 btn-success">Sign Up</a>
    </div>
  </div>
  )
}
