'use client'
import { useContext, createContext, useState} from "react"



const LevelContext = createContext(0)

export function Section({ children }) {
  const level = useContext(LevelContext)
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  )
}

export function Heading({ children }) {
  const level = useContext(LevelContext)
  if (level >= 1 && level <= 6) {
    const HeadingTag = `h${level}`;
    return <HeadingTag>{children}</HeadingTag>;
  } else {
    throw new Error('Invalid heading level. Must be between 1 and 6.');
  }
}



export default function App() {
  return (
    <>
      <div>
        <Section>
          <Heading>标题1</Heading>
          <Section>
            <Heading>标题2</Heading>
            <Heading>标题2</Heading>
            <Heading>标题2</Heading>
          </Section>
        </Section>
      </div>
    </>
  )
}
