import { useState } from 'react'
import '../Pagecss/profile.css'
import Left from '../add/left'
import Login from'./profile-page/log-in'
import Notlogin from'./profile-page/not-log-in-1'
export default
function Profile() {
  return (
    <>

        <main>
          <Left/>
          <div class="view">
            <Login/>
          </div>
        </main>

    </>
    )
}