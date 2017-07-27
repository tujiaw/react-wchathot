import React from 'react'
import Item from './item'
import Style from './style'

class TitleList extends React.Component {
  onTitleClick(item) {
    this.props.onTitleClick(item)
  }

  onScrollHandle(event) {
    const clientHeight = event.target.clientHeight
    const scrollHeight = event.target.scrollHeight
    const scrollTop = event.target.scrollTop
    const isBottom = (clientHeight + scrollTop === scrollHeight)
    console.log('is bottom:' + isBottom)
    if (isBottom) {
      this.props.onScrollBottom();
    }
  }

  componentDidMount() {
    this.refs.list.addEventListener('scroll', this.onScrollHandle.bind(this))
  }

  componentWillUnmount() {
    this.refs.list.removeEventListener('scroll', this.onScrollHandle.bind(this))
  }

  render() {
    return (
      <div>
        <span style={Style.typeName}>{this.props.typeName}</span>
        <div style={Style.list} ref="list">
          {this.props.list.map((item, index) => {
            return <Item key={index} data={item} onClick={this.onTitleClick.bind(this, item)} />
          })}
        </div>
      </div>
    );
  }
}

export default TitleList;