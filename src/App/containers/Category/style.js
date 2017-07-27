const Style = {}
Style.root = {
  display: 'flex',
  flexDirection: 'column'
}

Style.button = {
  border: 0,
  outline: 0,
  cursor: 'pointer',
  padding: '4px 20px',
  fontSize: 16,
  marginRight: 15,
}

Style.buttonEnter = {
  ...Style.button,
  color: '#0050bb'
}

Style.buttonLeave = {
  ...Style.button,
  color: '#3d84b0'
}

export default Style