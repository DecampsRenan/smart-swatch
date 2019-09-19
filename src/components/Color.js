import React from 'react';
// import PropTypes from 'prop-types';
import chroma from 'chroma-js';
import { Icon, Box, Button, AspectRatioBox, Text, useClipboard } from '@chakra-ui/core';

const propTypes = {};
const defaultProps = {};

export const Color = ({ color, title, isActive, ...props }) => {
  const { onCopy, hasCopied } = useClipboard(color.hex());

  return (
    <Box
      w="100%"
      {...props}
      overflow="hidden"
      zIndex={isActive ? 2 : 1}
      transform={isActive ? 'scale(1.1)' : null}
      rounded={isActive ? 'md' : null}
      shadow={isActive ? 'md' : null}
    >
      <AspectRatioBox ratio={1}>
        <Button
          onClick={onCopy}
          variant="unstyled"
          m="0"
          backgroundColor={color.hex()}
          align="center"
          justify="center"
          p="2"
          rounded="none"
          fontSize="xs"
          textAlign="center"
          color={chroma.contrast(color, 'white') < 4.5 ? 'black' : 'white'}
        >
          <Text
            display={{ base: 'none', lg: 'block' }}
            fontWeight="bold"
          >
            {title}
          </Text>
          <Text>
            {hasCopied && <Icon name="check" size="10px" />}
            <Text as="span" display={{ base: 'none', lg: 'block' }}>
              {hasCopied ?
                'Copied' :
                color.hex()}
            </Text>
          </Text>
        </Button>
      </AspectRatioBox>
    </Box>
  );
};

Color.propTypes = propTypes;
Color.defaultProps = defaultProps;
