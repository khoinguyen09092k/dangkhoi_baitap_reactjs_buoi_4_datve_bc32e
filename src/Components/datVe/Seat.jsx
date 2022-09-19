import React, { Component } from 'react'
import data from './danhSachGhe.json'
import { connect } from 'react-redux'
class Seat extends Component {

    getSeat = (soGhe) => {
        const Seat = soGhe;
        // console.log(Seat)
        this.props.dispatch({
            type: 'SAVE_SEAT',
            payload: { Seat },
        })

    }

    render() {

        const { danhSachGheDaChon,disableBTN} = this.props
        

        return (
            <div>
                <span className='bg-warning '>Please Select your Seats NOW!</span>

                <table id="seatsBlock">
                    <tr>
                        <th></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                        <th>11</th>
                        <th>12</th>
                    </tr>
                    {
                        data.map((item) => {



                            return <tr>
                                <td>
                                    {item.hang}
                                </td>
                                {item.danhSachGhe.map(itemghe => {
                                    const index = danhSachGheDaChon.findIndex(soGhe => soGhe === itemghe.soGhe)
                                    const camChonGhe = disableBTN
                                    console.log("index: ", index);
                                    // if (index === -1) {
                                    //     return <td>
                                    //         <button className='btn btn-primary' onClick={() => this.getSeat(itemghe.soGhe)} >{itemghe.soGhe}</button>
                                    //     </td>
                                    // }
                                    // else {
                                    //     return <td>
                                    //         <button className='btn btn-success' onClick={() => this.getSeat(itemghe.soGhe)} >{itemghe.soGhe}</button>
                                    //     </td>
                                    // }

                                    return <td>
                                        <button  disabled = {camChonGhe}   className={index === -1 ? 'btn btn-primary' : 'btn btn-success'} onClick={() => this.getSeat(itemghe.soGhe)} >{itemghe.soGhe}</button>
                                    </td>
                                })}
                            </tr>
                        })
                    }
                </table>
            </div>
        )
    }
}


const mapStateToProps = (rootReducer) => {
    return {
        danhSachGheDaChon: rootReducer.baiTapDatVe.danhSachGheDaChon,
        disableBTN : rootReducer.baiTapDatVe.disableBTN
    }
}


export default connect(mapStateToProps)(Seat)

