import React from 'react'
import Style from './style'
import { QQURL } from '../../constants/qqurl'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEnter: false
    }
  }

  render() {
    const { logo, title, userName, contentImg } = this.props.data
    return (
      <div style={ this.state.isEnter ? Style.itemEnter : Style.itemLeave } onClick={ this.props.onClick } 
        onMouseEnter={ () => this.setState({ isEnter: true })}
        onMouseLeave={ () => this.setState({ isEnter: false })}>
        <img style={Style.image} src={ QQURL + contentImg } />
        <div style={Style.right}>
          <div style={Style.username}>{userName}</div>
          <div style={Style.title}>{title}</div>
        </div>
      </div>
    );
  }
}

export default Item;