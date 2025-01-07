import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: var(--bgtxt-blue-normal);
  color: var(--txt-black-darkest);
  border-color: var(--bdr-black-dark);
  box-shadow: var(--shdw-base);
`

const Component = () => {
  return (
    <>
      <div style={{ backgroundColor: 'var(--bg-header)' }} />
      <div style={{ color: 'var(--bgtxt-red-normal)' }} />
      <div style={{ borderColor: 'var(--bg-grey-dim-lightest)' }} />
      <div style={{ backgroundColor: 'var(--grey-200-80)' }} />
      <div style={{ color: 'var(--navy-400)' }} />
      <StyledDiv />
    </>
  )
}
