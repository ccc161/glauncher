'use client'
// 子组件向父组件传值
import { useState } from "react"
function Detail({onActive}) {
    const [status, setStatus] = useState(false)
    function handleClick() {
        onActive(status)// status传递给onActive的处理函数
        setStatus(!status)
    }
    return (
        <>
            <div>
                <button onClick={handleClick}>click button</button>
                <p style={{
                    display: status ? 'block': 'none'
                }}>content</p>
            </div>
        </>
    )
}

export default function App() {
    function handleActive(status) {
        console.log(status)
    }
    return (
        <>
        <Detail
            
            onActive={handleActive}
        ></Detail>
        </>
    )
}