import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${props => props.width};
  flex-direction: ${props => props.flexDirection};
`
