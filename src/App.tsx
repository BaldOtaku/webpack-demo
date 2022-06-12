import { Button, message } from 'antd'

const App = () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        message.success('This is a success message')
      }}
    >
      click me
    </Button>
  )
}

export default App
