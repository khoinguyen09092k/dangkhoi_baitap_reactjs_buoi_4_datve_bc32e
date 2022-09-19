import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Infomation extends Component {
  state ={ // state
    tenNguoiDat :"",
    soLuongGheDat : "",
    danhSachGheDaChon : [],
  }
  render() {
    
    const {tenNguoiDat,soLuongGheDat,danhSachGheDaChon} = this.props // redux
    return (
      <div className='info'>
        <h4 className='bg-warning col-4 text-center'> SCREEN THIS WAY</h4>
        <button  onClick={()=>this.setState({tenNguoiDat,soLuongGheDat,danhSachGheDaChon })}>Confirm Selection</button>
        <div className='info-table col-6 mt-3 pb-3'>
          <table className='table bg-white'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Number of Seats</th>
                <th>Seats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{this.state.tenNguoiDat}</th>
                <th>{this.state.soLuongGheDat}</th>
                <th>{this.state.danhSachGheDaChon.reduce((pre,curent)=>{
                  return pre += curent + ","
                },"")}
             

                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <span className='text-white'>© 2018 Movie Seat Selection . All Rights Reserved | Design by W3layouts</span>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    tenNguoiDat : rootReducer.baiTapDatVe.tenNguoiDat,
    soLuongGheDat : rootReducer.baiTapDatVe.soLuongGheDat,
    danhSachGheDaChon : rootReducer.baiTapDatVe.danhSachGheDaChon
  }

}

export default connect(mapStateToProps)(Infomation)