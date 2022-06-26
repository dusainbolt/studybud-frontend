import { Button } from '@common/Button';
import { DialogModal } from '@common/Dialog/DialogModal';
import FieldText, { ValidateBlock } from '@common/Form/FieldInput';
import FieldSelect from '@common/Form/FieldSelect';
import { FieldSwitch } from '@common/Form/FieldSwitch';
import { DialogActions, SxProps, Theme } from '@mui/material';
import { getTopicSlice } from '@redux/slices/topicSlice';
import { useAppSelector } from '@redux/store';
import { defaultStyle } from '@styles/theme';
import { Restrict } from '@type/field';
import { CreateStudyRequestInput, StudyRequest } from '@type/request-studybud';
import { PointType } from '@type/standard';
import { Gender } from '@type/user';
import { Field, useFormikContext } from 'formik';
import { FC, useEffect, useState } from 'react';

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
  studyEditInfo?: StudyRequest;
  initialValuesRequestStudy?: CreateStudyRequestInput;
}> = ({ open, toggleModal, loading, studyEditInfo, initialValuesRequestStudy }) => {
  const { handleSubmit, values, setFieldValue, handleReset, setValues } = useFormikContext();
  const [enableChangeSelect, setEnableUpdateSelect] = useState<boolean>(false);
  const formValues = values as CreateStudyRequestInput;
  const { topics } = useAppSelector(getTopicSlice);
  const missions = topics?.find((item) => item._id === formValues?.topic)?.missionData;
  const standards = missions?.find((item) => item._id === formValues?.mission)?.standardData;
  const standard = open ? standards?.find((item) => item._id === formValues.standard) : null;

  useEffect(() => {
    if (enableChangeSelect) {
      setFieldValue('mission', '');
    }
  }, [formValues?.topic]);

  useEffect(() => {
    if (enableChangeSelect) {
      setFieldValue('standard', '');
      setFieldValue('point', '');
    }
  }, [formValues?.mission]);

  useEffect(() => {
    console.log('standard: ', standard);
    standard?._id && setFieldValue('standardData', standard);
  }, [standard]);

  useEffect(() => {
    !open && handleReset();
    setEnableUpdateSelect(false);
  }, [open]);

  useEffect(() => {
    if (studyEditInfo?._id) {
      setValues({
        mission: studyEditInfo.mission,
        missionDes: studyEditInfo.missionDes,
        point: studyEditInfo.point || studyEditInfo.pointValue,
        pointValue: '',
        requestDes: studyEditInfo.requestDes,
        standard: studyEditInfo.standard,
        title: studyEditInfo.title,
        topic: studyEditInfo.topic,
        status: studyEditInfo.status,
        standardData: standard,
      } as CreateStudyRequestInput);
    } else {
      setValues(initialValuesRequestStudy);
    }
    return () => {
      setEnableUpdateSelect(true);
    };
  }, [studyEditInfo, open]);

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
            name="title"
            component={FieldText}
            label="Tiêu đề"
            block={
              {
                restric: Restrict.DISALLOW_SPECIAL_CHAR,
              } as ValidateBlock
            }
            fieldProps={{
              placeholder: 'Mô tả ngắn gọn yêu cầu tìm bạn học',
            }}
          />
          <Field
            name="topic"
            component={FieldSelect}
            sx={{ maxWidth: 250 } as SxProps<Theme>}
            options={topics?.map((item) => ({ value: item._id, label: item.name }))}
            label="Lĩnh vực"
          />
          <Field
            name="mission"
            component={FieldSelect}
            sx={{ maxWidth: 250 } as SxProps<Theme>}
            options={missions?.map((item) => ({ value: item._id, label: item.name }))}
            label="Mục tiêu"
            fieldProps={{ disabled: !missions?.length }}
          />
          <Field
            name="standard"
            component={FieldSelect}
            sx={{ maxWidth: 250 } as SxProps<Theme>}
            options={standards?.map((item) => ({ value: item._id, label: item.name }))}
            label="Tiêu chí"
            fieldProps={{ disabled: !standards?.length }}
          />
          {formValues?.standard &&
            (standard?.pointType === PointType.INPUT ? (
              <Field
                name="point"
                component={FieldText}
                sx={{ maxWidth: 250 } as SxProps<Theme>}
                label="Điểm"
                fieldProps={{
                  type: 'number',
                }}
                block={{ number: { countDecimal: 1 } } as ValidateBlock}
              />
            ) : (
              <Field
                name="point"
                component={FieldSelect}
                sx={{ maxWidth: 250 } as SxProps<Theme>}
                options={standard?.pointData?.map((item) => ({ value: item, label: item }))}
                label="Điểm"
              />
            ))}
          <Field
            name="requestDes"
            component={FieldText}
            label="Mô tả yêu cầu"
            fieldProps={{
              multiline: true,
              minRows: 4,
              placeholder:
                'Mô tả chi tiết yêu cầu tìm bạn học.&#10;Trình độ hiện tại của bạn&#10;Bạn muốn tìm kiếm người bạn học như thế nào&#10;Lịch rảnh và nơi chốn học tập phù hợp với bạn',
            }}
          />
          <Field
            name="missionDes"
            component={FieldText}
            label="Mô tả mục tiêu"
            fieldProps={{
              placeholder: 'Mô tả mục tiêu và động lực của bạn',
            }}
          />
          <Field name="status" component={FieldSwitch} label="Trạng thái" />
        </div>
      }
    />
  );
};
