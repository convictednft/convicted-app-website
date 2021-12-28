import React from 'react'
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Layout({ children }) {
  return <div style={{ position: 'relative' }}>{children}</div>
}
