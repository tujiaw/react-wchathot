const Style = {}
Style.root = {
  display: 'flex',
  flexDirection: 'column',
  width: 130,
}

Style.button = {
  border: 0,
  outline: 0,
  cursor: 'pointer',
  padding: '4px 20px',
  fontSize: 16,
  background: 'rgb(238, 238, 238)',
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