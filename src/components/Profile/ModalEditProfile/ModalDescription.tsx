import { Button } from '@common/Button';
import { DialogModal } from '@common/Dialog/DialogModal';
import FieldText, { ValidateBlock } from '@common/Form/FieldInput';
import { DialogActions } from '@mui/material';
import { defaultStyle } from '@styles/theme';
import { Restrict } from '@type/field';
import { Field, useFormikContext } from 'formik';
import { FC } from 'react';

// interface ModalDescriptionProps {}

export const ModalDescription: FC<{
  open: boolean;
  toggleModal: any;
  loading: boolean;
}> = ({ open, toggleModal, loading }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <DialogModal
      onCloseModal={loading ? false : toggleModal}
      width={700}
      id="modal-description"
      open={open}
      title="MÔ TẢ BẢN THÂN"
      action={
        <DialogActions>
          <Button
            autoFocus
            variant="contained"
            loading={loading}
            onClick={handleSubmit as any}
            sx={{
              ...defaultStyle.btnStyle('#000000'),
            }}
          >
            Hoàn tất
          </Button>
        </DialogActions>
      }
      content={
        <div>
          <Field
            name="username"
            component={FieldText}
            label="Username"
            fieldProps={{ disabled: true }}
            block={
              {
                restric: Restrict.DISALLOW_SPECIAL_CHAR,
              } as ValidateBlock
            }
          />
          <Field
            name="name"
            component={FieldText}
            label="Tên hiển thị (bắt buộc)"
            block={
              {
                restric: Restrict.DISALLOW_SPECIAL_CHAR,
              } as ValidateBlock
            }
          />
          <Field
            name="description"
            component={FieldText}
            label="Mô tả"
            fieldProps={{
              multiline: true,
              minRows: 4,
              placeholder: 'Bạn là ai?&#10;Lĩnh vực mà bạn quan tâm&#10;Nhu cầu tìm bạn học của bạn',
            }}
          />
        </div>
      }
    />
  );
};
