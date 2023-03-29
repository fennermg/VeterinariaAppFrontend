import React from 'react';
import {useState} from 'react';
import '../../../src/index.css'

const Patients = ({}) =>{


    return(
        <div>
            <section>
                <button type="button">
                    Close 
                </button>
                <div>
                    <h1>ADD PATIENT</h1>
                </div>
                <form>
                    <label>Name</label>
                    <input placeholder='Name'/> 
                </form> 
            </section>    
        </div>
    )
}

export default Patients