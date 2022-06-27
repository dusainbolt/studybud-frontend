import { FieldRange } from '@common/Form/FieldRange';
import FieldSelect from '@common/Form/FieldSelect';
import { Grid, Stack, SxProps, Theme } from '@mui/material';
import { getTopicSlice } from '@redux/slices/topicSlice';
import { useAppSelector } from '@redux/store';
import { Field, useFormikContext } from 'formik';

export const FormSearchStudy = () => {
  const { values } = useFormikContext();
  const formValues = values;
  const { topics } = useAppSelector(getTopicSlice);
  const missions = topics?.find((item) => item._id === (formValues as any)?.topic)?.missionData;
  const standards = missions?.find((item) => item._id === (formValues as any)?.mission)?.standardData;
  // const standard = standards?.find((item) => item._id === formValues.standard);

  // const noneLabel = ;
  // topics?.push(noneLabel);
  // console.log('missions:', missions);
  // missions?.unshift(noneLabel);
  // standards?.unshift(noneLabel);

  // console.log('topic: ', missions);

  return (
    <Stack>
      <Grid container spacing={1.3}>
        <Grid item xs={2}>
          <Field
            name="topic"
            component={FieldSelect}
            sx={{ maxWidth: 250 } as SxProps<Theme>}
            options={topics?.map((item) => ({ value: item._id, label: item.name }))}
            label="Lĩnh vực"
          />
        </Grid>
        <Grid item xs={2}>
          <Field
            name="mission"
            component={FieldSelect}
            sx={{ maxWidth: 250 } as SxProps<Theme>}
            options={missions?.map((item) => ({ value: item._id, label: item.name }))}
            label="Mục tiêu"
            fieldProps={{ disabled: !missions?.length }}
          />
        </Grid>
        <Grid item xs={2}>
          <Field
            name="standard"
            component={FieldSelect}
            sx={{ maxWidth: 250 } as SxProps<Theme>}
            options={standards?.map((item) => ({ value: item._id, label: item.name }))}
            label="Tiêu chí"
            fieldProps={{ disabled: !standards?.length }}
          />
        </Grid>
        <Grid item xs={2}>
          <Field
            name="standard"
            component={FieldRange}
            // sx={{ maxWidth: 250 } as SxProps<Theme>}
            // options={standards?.map((item) => ({ value: item._id, label: item.name }))}
            // label="Tiêu chí"
            // fieldProps={{ disabled: !standards?.length }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};
