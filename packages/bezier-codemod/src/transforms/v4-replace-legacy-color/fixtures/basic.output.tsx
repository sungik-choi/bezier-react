import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: var(--alpha-bg-blue-normal);
  color: var(--alpha-fg-black-darkest);
  border-color: var(--alpha-bg-black-dark);
  box-shadow: var(--alpha-shadow-base);
`

const Component = () => {
  return (
    <>
      <div style={{ backgroundColor: 'var(--alpha-bg-white-higher)' }} />
      <div style={{ color: 'var(--alpha-bg-red-normal)' }} />
      <div style={{ borderColor: 'var(--alpha-bg-grey-alpha-light)' }} />
      <div style={{ backgroundColor: 'var(--alpha-grey-200-80)' }} />
      <div style={{ color: 'var(--alpha-navy-400)' }} />
      <StyledDiv />
    </>
  )
}
