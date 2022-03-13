import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Wrapper = styled.section`
  position: ${({ position }) => position || 'static'};
  z-index: ${({ zIndex }) => zIndex};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  width: ${({ widthSize }) => widthSize || '100vw'};
  height: ${({ heightSize }) => heightSize || 'fit-content'};
  padding: ${({ padding }) => padding || '0 3rem'};
  margin: ${({ margin }) => margin || '0'};
  background-color: ${({ theme, bg }) =>
    bg ? theme.colors.bg[bg] : 'transparent'};
`;

const ViewTemplate = ({
  children,
  heightSize,
  widthSize,
  minHeight,
  flexDirection,
  justifyContent,
  alignItems,
  position,
  zIndex,
  padding,
  margin,
  bg,
  refPass,
}) => {
  return (
    <Wrapper
      widthSize={widthSize}
      heightSize={heightSize}
      minHeight={minHeight}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      position={position}
      zIndex={zIndex}
      padding={padding}
      margin={margin}
      bg={bg}
      ref={refPass}
    >
      {children}
    </Wrapper>
  );
};

export default ViewTemplate;

ViewTemplate.propTypes = {
  children: PropTypes.node,
  widthSize: PropTypes.string,
  heightSize: PropTypes.string,
  minHeight: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  position: PropTypes.string,
  zIndex: PropTypes.number,
  padding: PropTypes.string,
  margin: PropTypes.string,
  bg: PropTypes.string,
  refPass: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
