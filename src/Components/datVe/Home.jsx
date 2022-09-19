import React, { Component } from 'react'
import { connect } from 'react-redux'
import Infomation from './Infomation'
import Seat from './Seat'
import style from './style.css'

class Home extends Component {

    getValue = () => {
        const valueSeat = document.getElementById('numberSeat').value
        const valueUser = document.getElementById('userName').value
        
        this.props.dispatch({
            type: 'GET_VALUE',
            payload:{valueSeat,valueUser}
        })
    }


    render() {

        return (
            <div className=' home'>

                <div className='header'>
                    <h2 className='text-white text-center pt-3'>MOVIE SEAT SELECTION</h2>
                </div>
                <div className='container form-seat ml-5'>
                    <div className='info'>
                        <p className='text-warning'>Fill The Required Details Below And Select Your Seats</p>
                        <div className='from d-flex'>
                            <div className='from-left'>
                                <label className='text-white'> Name </label>
                                <span className='text-danger'> * </span>
                                <input type="text" id='userName' />
                            </div>
                            <div className='from-right ml-1'>
                                <label className='text-white'>Number of Seat</label>
                                <span className='text-danger'> * </span>
                                <input type="number" id='numberSeat' />
                            </div>

                        </div>
                        <div className='button-info mt-2'>
                            <button onClick={() => this.getValue()}>Start Selecting</button>
                        </div>
                    </div>
                    <div className='select-seat mt-4'>
                        <div className='chair'>
                            <ul className='d-flex '>
                                <li className='text-white ml-3 green-box'><span ></span> Selected Seat</li>
                                <li className='text-white ml-3 red-box'><span></span> Reserved Seat</li>
                                <li className='text-white ml-3 white-box'><span></span> Empty Seat</li>
                            </ul>

                        </div>
                        <Seat />
                    </div>
                    <div className='info-seat'>
                        <Infomation />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ((state) => {
    return {

    }
})

export default connect(mapStateToProps)(Home)