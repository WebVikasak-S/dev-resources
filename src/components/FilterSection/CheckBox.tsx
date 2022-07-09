import React from 'react';
import classnames from 'classnames';
import { Box } from '@chakra-ui/react';

type checkboxProps = {
  isChecked?: boolean;
  isIndeterminate?: boolean;
  onClick?: () => void;
};

const CheckBox: React.FC<checkboxProps> = ({
  isChecked = false,
  isIndeterminate = false,
  onClick = () => {},
}) => {
  return (
    <Box w="20%" p={4} borderRight="2px">
      return (
      <span
        className={classnames(
          'decoration-white text-base w-4 h-4 inline-block font-bold text-center relative border border-white outline-1 leading-4 mr-1.5',
          {
            "indeterminate:bg-gray-300 checked:after:content-['•']": isIndeterminate,
            "checked:bg-cyan-400 checked:after:content-['✓']": isChecked,
          }
        )}
        onClick={onClick}
      />
      );
    </Box>
  );
};

export default CheckBox;
