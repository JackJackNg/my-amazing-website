import * as React from 'react'
import Styles from '../../styles/main.module.scss'
import { FadeIn } from '../../components'
import { MarkdownNode } from '../../types'
import { TransitionGroup } from 'react-transition-group'

interface Props {
  data: MarkdownNode[]
}

const Hero: React.SFC<Props> = props => {
  const [isMounted, setMounted] = React.useState(false)
  const { frontmatter, html } = props.data[0].node

  React.useEffect(() => {
    const cancenlListner = setTimeout(() => {
      setMounted(true)
    }, 300)

    return () => clearTimeout(cancenlListner)
  })

  const one = (
    <span>
      <strong className={Styles.strong}>{frontmatter.title}</strong>
    </span>
  )
  const two = <h1>{frontmatter.name}</h1>
  const three = <h2>{frontmatter.subtitle}</h2>
  const four = (
    <div key={Math.random()} dangerouslySetInnerHTML={{ __html: html }} />
  )
  const items = [one, two, three, four]

  return (
    <section id="about" className={Styles.hero}>
      <TransitionGroup>
        {isMounted && (
          <div>
            {items.map((v, i) => {
              return (
                <FadeIn key={i} in={isMounted} timeout={i * 200}>
                  {v}
                </FadeIn>
              )
            })}
          </div>
        )}
      </TransitionGroup>
    </section>
  )
}

export default Hero
