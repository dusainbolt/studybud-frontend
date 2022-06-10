import { Button } from '@common/Button';
import { DialogModal } from '@common/Dialog/DialogModal';
import FieldText from '@common/Form/FieldInput';
import FieldRadioBox from '@common/Form/FieldRadioBox';
import FieldSelect from '@common/Form/FieldSelect';
import { DialogActions } from '@mui/material';
import { defaultStyle } from '@styles/theme';
import { Restrict } from '@type/field';
import { Gender } from '@type/user';
import Helper from '@utils/helper';
import { provinces } from '@utils/provinces';
import { Field, useFormikContext } from 'formik';
import { FC } from 'react';

// interface ModalBasicInfoProps {}

export const GenderOptions = [
  {
    label: 'Nam',
    value: Gender.MALE,
  },
  {
    label: 'Nữ',
    value: Gender.FEMALE,
  },
];

export const ModalBasicInfo: FC<{
  open: boolean;
  toggleModal: any;
  loading: boolean;
}> = ({ open, toggleModal, loading }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <DialogModal
      onCloseModal={loading ? false : toggleModal}
      width={800}
      id="modal-basic-info"
      open={open}
      title="THÔNG TIN CÁ NHÂN"
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
            name="school"
            component={FieldText}
            required
            label="Học tại (bắt buộc)"
            restric={Restrict.DISALLOW_SPECIAL_CHAR}
          />
          <Field
            name="address"
            component={FieldSelect}
            options={provinces.map((item) => ({ value: item.name, label: item.name }))}
            label="Đến từ (bắt buộc)"
          />
          <Field name="gender" component={FieldRadioBox} options={GenderOptions} label="Giới tính (bắt buộc)" />
          <Field
            name="contact"
            component={FieldText}
            placeholder="URL mạng xã hội, email"
            required
            label="Thông tin liên lạc (bắt buộc)"
          />
        </div>
      }
    />
  );
};
