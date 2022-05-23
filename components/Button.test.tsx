import { Button } from './Button'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'

it('renders correctly', () => {
  const { getByText } = render(<Button label="Hello" />)
  expect(getByText('Hello')).toBeTruthy()
})
