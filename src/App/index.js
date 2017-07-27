import React, { Component } from 'react';
import Style from './style'
import Category from './containers/Category'
import TitleList from './containers/TitleList'
import { getWchatHot } from './utils/get'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      typeName: '',
      pagebean: {
        allNum: 0,
        allPages: 0,
        contentlist: [],
        currentPage: 1,
        maxResult: 20,
      }
    }
  }

  handleResponse = (res) => {
    if (res.showapi_res_body && res.showapi_res_body.pagebean) {
      const newPagebean = Object.assign({}, res.showapi_res_body.pagebean)
      const newTypeName = newPagebean.contentlist.length ? newPagebean.contentlist[0].typeName : ''
      console.log(newPagebean)
      this.setState({ 
        typeName: newTypeName,
        pagebean: newPagebean 
      })
    }
  }

  componentDidMount() {
    getWchatHot().then((res) => {
      this.handleResponse(res)
    }).catch((err) => {
      console.error(err)
    })
  }

  onTypeClick = (type) => {
    this.setState({ typeName: type.name })
    getWchatHot(type.id, 1).then((res) => {
      this.handleResponse(res)
    }).catch((err) => {
      console.error(err)
    })
  }

  onTitleClick = (item) => {
    console.log(item)
    window.open(item.url)
  }

  render() {
    return (
      <div style={Style.root}>
        <h1 style={Style.title}>微信热门精选</h1>
        <div style={Style.content}>
          <Category style={Style.category} onTypeClick={this.onTypeClick} />
          <TitleList style={Style.titleList} 
            typeName={this.state.typeName} 
            list={this.state.pagebean.contentlist}
            onTitleClick={this.onTitleClick}/>
        </div>
      </div>
    );
  }
}

export default App;
