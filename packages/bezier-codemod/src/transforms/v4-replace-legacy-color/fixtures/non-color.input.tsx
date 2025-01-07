import styled from 'styled-components'

const StyledDiv = styled.div`
  margin: var(--spacing-8);
  padding: var(--spacing-16);
  border-radius: var(--radius-8);
  z-index: var(--z-index-dropdown);
`

const Component = () => {
  return (
    <>
      <div style={{ margin: 'var(--spacing-4)' }} />
      <div style={{ padding: 'var(--spacing-12)' }} />
      <StyledDiv />
    </>
  )
}
