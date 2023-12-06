import React from 'react'
import Link from "next/link";

export default function LeftAside() {
  return (
        <aside className="col-3">
            <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" href="/flight">The Flight</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" href="/city">The City</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" href="/island">The Island</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" href="/food">The Food</Link>
                </li>
            </ul>
            </nav>
        </aside>
  )
}
