import { Button } from '@common/Button';
import { DialogModal } from '@common/Dialog/DialogModal';
import FieldText from '@common/Form/FieldInput';
import FieldRadioBox from '@common/Form/FieldRadioBox';
import { FieldRange } from '@common/Form/FieldRange';
import FieldSelect from '@common/Form/FieldSelect';
import { DialogActions } from '@mui/material';
import { defaultStyle } from '@styles/theme';
import { Restrict } from '@type/field';
import { Gender } from '@type/user';
import { provinces } from '@utils/provinces';
import { Field, useFormikContext } from 'formik';
import { FC } from 'react';

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

export const ModalRequestStudybud: FC<{
  open: boolean;
  toggleModal: any;
  loading: boolean;
}> = ({ open, toggleModal, loading }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <DialogModal
      onCloseModal={loading ? false : toggleModal}
      width={700}
      id="modal-request-studybud"
      open={open}
      title="TẠO YÊU CẦU TÌM BẠN HỌC"
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
            label="Tiêu đề"
            placeholder="Mô tả ngắn gọn yêu cầu tìm bạn học"
            restric={Restrict.DISALLOW_SPECIAL_CHAR}
          />
          <Field
            name="address"
            component={FieldSelect}
            options={provinces.map((item) => ({ value: item.name, label: item.name }))}
            label="Lĩnh vực"
          />
          <Field
            name="address"
            component={FieldSelect}
            options={provinces.map((item) => ({ value: item.name, label: item.name }))}
            label="Mục tiêu"
          />
          <Field
            name="address"
            component={FieldSelect}
            options={provinces.map((item) => ({ value: item.name, label: item.name }))}
            label="Tiêu chí"
          />
          <Field
            name="address"
            component={FieldRange}
            options={provinces.map((item) => ({ value: item.name, label: item.name }))}
            label="Range điểm"
          />
          <Field
            name="description"
            component={FieldText}
            multiline
            minRows={4}
            label="Mô tả"
            placeholder="Mô tả chi tiết yêu cầu tìm bạn học.&#10;Trình độ hiện tại của bạn&#10;Bạn muốn tìm kiếm người bạn học như thế nào&#10;Lịch rảnh và nơi chốn học tập phù hợp với bạn"
          />
          <Field
            name="contact"
            component={FieldText}
            placeholder="Mô tả mục tiêu và động lực của bạn"
            required
            label="Mục tiêu"
          />
        </div>
      }
    />
  );
};
