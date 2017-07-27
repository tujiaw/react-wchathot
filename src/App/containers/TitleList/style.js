const Style = {}

Style.root = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  background: '#fff',
  paddingLeft: 10,
}

Style.typeName = {
  padding: 8,
  display: 'block',
  borderBottom: '1px solid #f1f1f1'
}

Style.item = {
  display: 'flex',
  padding: 6,
  cursor: 'pointer',
}

Style.itemEnter = {
  ...Style.item,
  background: '#E5E5E5',
}

Style.itemLeave = {
  ...Style.item,
  background: '#fff',
}

Style.image = {
  width: 60,
  height: 60,
  borderRadius: 10,
  marginRight: 10,
}

Style.username = {
  fontSize: 18
}

Style.title = {
  fontSize: 15
}

Style.list = {
  overflowY: 'scroll',
}

Style.right = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
}

Style.Fetching = {
  display: 'flex',
  justifyContent: 'center',
  height: 20
}

export default Style