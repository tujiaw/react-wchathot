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
    const { title, userName, contentImg } = this.props.data
    return (
      <div style={ this.state.isEnter ? Style.itemEnter : Style.itemLeave } onClick={ this.props.onClick } 
        onMouseEnter={ () => this.setState({ isEnter: true })}
        onMouseLeave={ () => this.setState({ isEnter: false })}>
        <img style={Style.image} src={ QQURL + contentImg } alt=""/>
        <div style={Style.right}>
          <div style={Style.username}>{userName}</div>
          <div style={Style.title}>{title}</div>
        </div>
      </div>
    );
  }
}

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

  componentWillReceiveProps(nextProps) {
    if (this.props.typeName !== nextProps.typeName) {
      this.refs.list.scrollTop = 0
    }
  }

  render() {
    return (
      <div style={Style.root}>
        <span style={Style.typeName}>{this.props.typeName}</span>
        <div style={Style.list} ref="list">
          {this.props.list.map((item, index) => {
            return <Item key={index} data={item} onClick={this.onTitleClick.bind(this, item)} />
          })}
          <span style={Style.Fetching}>{this.props.isFetching ? '加载中..' : '加载更多' }</span>
        </div>
      </div>
    );
  }
}

export default TitleList;