import { styled } from '../stitches.config'
import React from 'react'
const Btn = styled('button', {
  color: 'red',
})

export const Button = ({ label }: { label: string }) => {
  return (
    <Btn>
      <span>{label}</span>
    </Btn>
  )
}
