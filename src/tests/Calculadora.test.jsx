/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Calculadora from '../components/Calculadora'

describe('When a digit button is clicked', () => {
  it('shows clicked digit on calculator display screen', async () => {
    render(<Calculadora />)
    const pantallaCalculadora = (await screen.findAllByText(/_/))[0]
    const btn1 = await screen.findByText(/1/)
    const btn2 = await screen.findByText(/2/)

    await userEvent.click(btn1)
    await userEvent.click(btn2)

    expect(pantallaCalculadora.innerHTML).toBe('12')
  })
})

describe('When the result is a negative number', () => {
  it('Shows ERROR message on calculator display screen', async () => {
    render(<Calculadora />)
    const btn1 = await screen.findByText(/1/)
    const btn2 = await screen.findByText(/0/)
    const btn3 = await screen.findByText(/5/)
    const btn4 = await screen.findByText(/-/)
    const btn5 = await screen.findByText(/=/)

    await userEvent.click(btn1)
    await userEvent.click(btn2)
    await userEvent.click(btn4)
    await userEvent.click(btn1)
    await userEvent.click(btn3)
    await userEvent.click(btn5)

    expect(await screen.findByText(/ERROR/)).toBeInTheDocument()
  })
})
