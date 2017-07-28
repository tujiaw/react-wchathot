import React, { Component } from 'react';
import Style from './style'
import Category from './containers/Category'
import TitleList from './containers/TitleList'
import { getTypeId } from './constants/typeList'
import { getWchatHot } from './utils/get'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      typeName: '',
      isFetching: false,
      pagebean: {
        allNum: 0,
        allPages: 0,
        contentlist: [],
        currentPage: 1,
        maxResult: 20,
      }
    }
  }

  requestData = (typeName, page) => {
    const id = getTypeId(typeName)
    if (id < 0 || this.state.isFetching) {
      return
    }

    this.setState({ isFetching: true})
    getWchatHot(id, page).then((res) => {
      this.handleResponse(res)
    }).catch((err) => {
      this.setState({ isFetching: false })
      console.error(err)
    })
  }

  handleResponse = (res) => {
    this.setState({ isFetching: false })
    if (res.showapi_res_body && res.showapi_res_body.pagebean) {
      let newPagebean = res.showapi_res_body.pagebean
      let newContentlist = []
      let curContentlist = this.state.pagebean.contentlist
      for (const item of newPagebean.contentlist) {
        if (item == null || item.userName == null || item.userName.length === 0 
          || item.title == null || item.title.length === 0) {
            console.log('filter:' + item)
          continue
        }
        if (curContentlist.find(function(elem) {
          return elem.title === item.title
        })) {
          console.log('filter repeat:' + item)
          continue
        }
        newContentlist.push(item)
      }
      if (newContentlist.length === 0) {
        return
      }

      const newTypeName = newContentlist[0].typeName
      if (newTypeName === this.state.typeName) {
        curContentlist = curContentlist.concat(newContentlist)
      } else {
        curContentlist = newContentlist
      }
      newPagebean.contentlist = curContentlist

      console.log(newPagebean)
      this.setState({
        typeName: newTypeName,
        pagebean: newPagebean
      })
    }
  }

  componentDidMount() {
    this.requestData('热点', 1)
  }

  onTypeClick = (type) => {
    this.requestData(type.name, 1)
  }

  onTitleClick = (item) => {
    console.log(item)
    window.open(item.url)
  }

  onScrollBottom = () => {
    this.requestData(this.state.typeName, this.state.pagebean.currentPage + 1)
  }

  render() {
    return (
      <div style={Style.root}>
        <h3 style={Style.title}>微信热门精选</h3>
        <div style={Style.content}>
          <Category style={Style.category} onTypeClick={this.onTypeClick} />
          <TitleList style={Style.titleList} 
            typeName={this.state.typeName} 
            isFetching={this.state.isFetching}
            list={this.state.pagebean.contentlist}
            onTitleClick={this.onTitleClick}
            onScrollBottom={this.onScrollBottom}/>
        </div>
      </div>
    );
  }
}

export default App;
