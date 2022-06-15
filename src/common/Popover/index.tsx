import * as React from 'react';
import Popover from '@mui/material/Popover';

export const AppPopover = ({ children, name, content }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? `${name}-popover` : undefined;

  return (
    <div>
      <div aria-describedby={id} onClick={handleClick as any}>
        {children}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div style={{ padding: 12 }}>{content || ''}</div>
      </Popover>
    </div>
  );
};
