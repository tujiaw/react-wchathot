import React from 'react'
import Style from './style'
import { QQURL } from '../../constants/qqurl'

class Item extends React.Component {
  render() {
    const { logo, title, userName, contentImg } = this.props.data
    return (
      <div style={Style.item} onClick={ this.props.onClick }>
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