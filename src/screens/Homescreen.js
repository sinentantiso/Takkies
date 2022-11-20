import React from 'react'
import takkies from '../takkiesData'
import Takkies from './../components/Takkies';

export default function Homescreen() {
  return (
    <div>
      <div className='row'>

        {takkies.map(takkie=>{
            return <div className='col-md-4'>
                <div>
                    <Takkies takkies ={takkies} />
                </div>
            </div>
        })}

      </div>
    </div>
  )
}
