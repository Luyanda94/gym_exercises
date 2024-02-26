import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const HorizontalScrollbar = ({ data }) => {
  return (
    <div style={{ display: 'flex', overflowX: 'auto' }}>
      {data.length === 0 ? (
        <Box m="0 40px" color="gray">
          No items available.
        </Box>
      ) : (
        data.map((item, index) => (
          <Box
            key={item.id || index}
            itemId={item.id || index}
            title={item.id || index}
            m="0 10px" // Adjust margin as needed
            style={{ minWidth: '100px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }} // Example styling
          >
            {item.name || item} {/* Assuming items have a 'name' property */}
          </Box>
        ))
      )}
    </div>
  );
};

HorizontalScrollbar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
    ])
  ),
};

export default HorizontalScrollbar;
