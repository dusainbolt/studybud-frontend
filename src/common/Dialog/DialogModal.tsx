import { CircularProgressCustom } from '@common/Progress/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import { Backdrop } from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { defaultStyle } from '@styles/theme';
import { FC, ReactNode, useEffect, useState } from 'react';
// import { number } from 'yup';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(4),
    borderTop: '1px solid #000000',
    borderBottom: '1px solid #000000',
  },
  '& .MuiDialogActions-root': {
    padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: ReactNode;
  onClose: () => void;
}

const CustomDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, textAlign: 'center', fontWeight: 700 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            ...defaultStyle.btnStyle('#000000'),
            color: '#ffffff',
            position: 'absolute',
            // top: 8,
            // right: 8,
            right: (theme) => theme.spacing(2),
            top: (theme) => theme.spacing(1),
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

interface DialogModalProps extends DialogProps {
  id: string;
  title?: string;
  onCloseModal: any;
  width?: number;
  content?: ReactNode;
  action?: ReactNode;
  loadContent?: boolean;
}

export const DialogModal: FC<DialogModalProps> = ({
  id,
  loadContent,
  title = 'Modal Title',
  onCloseModal,
  width = 500,
  content = '',
  action = '',
  ...otherProps
}) => {
  const [loadingContent, setLoadingContent] = useState<boolean>(false);
  const handleClose: any = (event, reason) => {
    if (event && reason && reason === 'backdropClick') return;
    onCloseModal();
  };

  useEffect(() => {
    if (typeof loadContent !== 'undefined') {
      if (loadContent) {
        setLoadingContent(true);
      } else {
        setTimeout(() => {
          setLoadingContent(false);
        }, 0);
      }
    }
  }, [loadContent]);

  return (
    <div>
      {otherProps.open && loadingContent ? (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loadingContent}>
          <CircularProgressCustom color="inherit" />
        </Backdrop>
      ) : (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby={id}
          sx={{
            '& .MuiDialog-container': {
              '& .MuiPaper-root': {
                width: '100%',
                maxWidth: width, // Set your width here
              },
            },
          }}
          {...otherProps}
        >
          <CustomDialogTitle id={id} onClose={onCloseModal && handleClose}>
            {title}
          </CustomDialogTitle>
          <DialogContent dividers>{content}</DialogContent>
          {action}
        </BootstrapDialog>
      )}
    </div>
  );
};
