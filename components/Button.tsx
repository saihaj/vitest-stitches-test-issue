import { styled } from '../stitches.config'

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
