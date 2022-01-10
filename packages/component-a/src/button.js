import { useState } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: blue;
`

const doProm = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('done'), 1000)
  })

export const Button = () => {
  const [data, setData] = useState('click to run promise')

  const handleClick = async () => {
    setData('waiting')
    const result = await doProm()
    setData(result)
  }

  return <StyledButton onClick={handleClick}>{data}</StyledButton>
}
