

function List({header, footer, children }) {
  return (
    <>
      <h2>this is list header {header}</h2>
      <ul>
        <ul>{children}</ul>
      </ul>
      <h4>this is list footer {footer}</h4>
    </>

  )
}
export default function App() {
  return (
    <>
      <List
        header="test header"
        footer="test footer"
      >
        <li>list item 1</li>
        <li>list item 2</li>
      </List>
    </>
  )
}