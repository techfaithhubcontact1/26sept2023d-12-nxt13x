import Link from 'next/link'
import React from 'react'

export default function LeftAside() {
    return (
        <aside className="col-3">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="collapse navbar-collapse container-fluid" id="navbarNav">
              <ul className="container-fluid">
                <li className="nav-item container-fluid">
                  <Link className="nav-link" aria-current="page" href="/flight"> The Flight</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/city" aria-current="page"> The City</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/island" aria-current="page"> The Island</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/food" aria-current="page"> The Food</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </aside>
    )
}
