function Detail({ content, active }) {
  return (
    <>
      <p>{content}</p>
      <p>status: {active ? "show" : "hidden"}</p>
    </>
  )
}

function Article(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}
function Comment({ userId, detailData }) {
  return (
    <div>
      <h3>{userId}</h3>
      <Detail {...detailData}></Detail>
    </div>
  )

}

export default function App() {

  const commentData = {
    userId: "wangwu",
    detailData: {
      content: "wangwu said ...",
      acitve: true,
    }
  }
  return (
    <>
      {/* 父组件向子组件传递普通值 */}
      <Article title="defined title" content="defined content"></Article>
      <Comment
        userId="zhangsan"
        commentContent="bad~~~"
      />
      <Comment
        userId="lisi"
        commentContent="good~~~"
        active
      />
      <Comment
        {...commentData}
      />
      {/* 父组件向子组件传递jsx*/}
    </>
  )
}