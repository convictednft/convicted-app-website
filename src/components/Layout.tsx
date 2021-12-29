import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css'


export default function Layout({ children }) {
  return <div style={{ position: 'relative' }}>{children}</div>
}
