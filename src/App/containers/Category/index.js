import React from 'react'
import typeList from '../../constants/typeList'
import Style from './style'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEnter: false
    }
  }

  render() {
    return (
      <button style={ this.state.isEnter ? Style.buttonEnter : Style.buttonLeave }
        onMouseEnter={ () => this.setState({ isEnter: true })} 
        onMouseLeave={ () => this.setState({ isEnter: false })}
        onClick={() => this.props.onClick()}>
        { this.props.name }
      </button>
    )
  }
}

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mouseEnter: false
    }
  }

  onTypeClick(item) {
    this.props.onTypeClick(item)
  }

  render() {
    return (
      <div style={Style.root}>
        {typeList.map((item, index) => {
          return <Item key={index} name={item.name} onClick={ this.onTypeClick.bind(this, item) } />
        })}
      </div>
    );
  }
}

export default Category;