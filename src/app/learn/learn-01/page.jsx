'use client'
import { Fragment, useState } from "react"

function App() {
  const divTitle = "divTitle"

  const flag = false
  let divContent = ""

  const nameList = [
    { id: 1, name: 'zhangsan' },
    { id: 2, name: 'lisi' },
    { id: 3, name: 'wangwu' },
  ]

  // 列表元素加载
  const nameListContent = nameList.map(
    item => (
      <Fragment key={item.id}>
        <li>{item.name}</li>
        <li>-------------------------------</li>
      </Fragment>
    )
  )
  // 条件判断
  if (flag) {
    divContent = <span>flag true</span>
  } else {
    divContent = <span>flag false</span>
  }

  // 事件 和 状态
  let buttonContent = "click me"

  function handleButtonClick(e) {
    // 函数式组件默认没有状态机制，因此这个button的内容不会因为点击而在页面上更新
    buttonContent = buttonContent === "click me" ? "button clicked" : "click me"
    console.log(buttonContent)
    console.log(e)
  }
  // useState的字符串数据形式
  const [content, setContent] = useState("default content")
  // useState 的对象形式
  const [data, setData] = useState(
    {
      title: "default title",
      content: "default content",
    }
  )
  // useState列表
  const [stateList, setStateList] = useState(
    [
      { id: 1, name: 'abaa1' },
      { id: 2, name: 'abaa2' },
      { id: 3, name: 'abaa3' },
    ],
  )

  const stateListData = stateList.map(
    item => (<li key={item.id}>{item.name}</li>)
  )


  function handleStateButtonClick(e) {
    setContent("clicked detect!")
    // setData({
    //   title: 'new title',
    //   content: 'new content',
    // })
    setData({
      ...data,//展开原数据
      content: "new content",// 需要修改的数据写在后面
    })
    let index = stateList.length
    setStateList([
      ...stateList,
      {id: index + 1, name: "abc4"}
    ])
  }


  return (
    <>
      <div title={divTitle}>{divContent}</div>
      <ul>{nameListContent}</ul>
      <p>default button</p>
      <button id="clickButton" onClick={handleButtonClick}>{buttonContent}</button>
      <p>useState button</p>
      <button id="stateButton" onClick={handleStateButtonClick}>{content}</button>
      <p>useState object</p>
      <p title={data.title}>{data.content}</p>
      <p>useState list</p>
      <ul>{stateListData}</ul>
    </>
  );
}

export default App;
