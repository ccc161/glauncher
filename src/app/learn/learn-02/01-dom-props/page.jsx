'use client'
import image from '../../../../../public/icon/mainWindow.png'

function App() {
  // react 的 dom htlm和svg标签
  // dom 组件具有props
  const imgData = {
    className: 'toolIcon',
    style: {
      width: 200,
      height: 200,
      backgroundColor: 'grey'
    }

  }
  return (
    <div>
      <p>text</p>
      <img
        src={image.src}
        alt='tool icon'
        {...imgData}
        // edit style
        // style={{
        //   width:200, 
        //   height:200,
        //   backgroundColor: 'red'
        // }}
      />
    </div>
  )

}
export default App;