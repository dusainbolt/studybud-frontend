import React, { useEffect, useState } from 'react';
import { Button } from '@common/Button';
import { FieldRange } from '@common/Form/FieldRange';
import FieldSelect from '@common/Form/FieldSelect';
import { Grid, Stack, SxProps, Theme } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { PointType } from '@type/standard';
import { SearchStudybudInput } from '@type/search-studybud';
import { getTopicSlice } from '@redux/slices/topicSlice';
import { useAppSelector } from '@redux/store';
import { defaultStyle } from '@styles/theme';
import { Field, useFormikContext } from 'formik';

export const FormSearchStudy = () => {
  const { values, handleSubmit } = useFormikContext();
  const formValues = values as SearchStudybudInput;
  const { topics } = useAppSelector(getTopicSlice);
  const missions = topics?.find((item) => item._id === (formValues as any)?.topic)?.missionData;
  const standards = missions?.find((item) => item._id === (formValues as any)?.mission)?.standardData;
  const standard = standards?.find((item) => item._id === (formValues as any)?.standard);

  const genders = [
    {
      _id: '1242',
      name: 'Nam',
    },
    {
      _id: '1241',
      name: 'Nữ',
    },
  ];

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
            sx={
              {
                maxWidth: 250,
                '.MuiOutlinedInput-root': {
                  backgroundColor: '#97C1BF',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                },
                // '.MuiSelect-select ':{
                //   fontWeight:'bold'
                // },
                '#label-for-topic': {
                  color: '#fff',
                },
              } as SxProps<Theme>
            }
            options={topics?.map((item) => ({ value: item._id, label: item.name }))}
            label="Lĩnh vực"
          />
        </Grid>
        <Grid item xs={2}>
          <Field
            name="mission"
            component={FieldSelect}
            sx={
              {
                maxWidth: 250,
                '.MuiOutlinedInput-root': {
                  backgroundColor: '#97C1BF',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                },
                '#label-for-mission': {
                  color: '#fff',
                },
              } as SxProps<Theme>
            }
            options={missions?.map((item) => ({ value: item._id, label: item.name }))}
            label="Mục tiêu"
            fieldProps={{ disabled: !missions?.length }}
          />
        </Grid>
        <Grid item xs={2}>
          <Field
            name="standard"
            component={FieldSelect}
            sx={
              {
                maxWidth: 250,
                '.MuiOutlinedInput-root': {
                  backgroundColor: '#97C1BF',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                },
                '#label-for-standard': {
                  color: '#fff',
                },
              } as SxProps<Theme>
            }
            options={standards?.map((item) => ({ value: item._id, label: item.name }))}
            label="Tiêu chí"
            fieldProps={{ disabled: !standards?.length }}
          />
        </Grid>
        <Grid item xs={2}>
          {/* <Field
            name="range"
            component={FieldRange}
            sx={{ 
              maxWidth: 250,
              '.MuiSlider-root':{
                color: '#fff'
              },
              '#label-for-range':{
                color:'#fff'
              },
              '.MuiSlider-markLabel':{
                fontWeight: 700,
                color: '#fff'
              }
            } as SxProps<Theme>}
            // options={standards?.map((item) => ({ value: item._id, label: item.name }))}
            label="Range"
            // fieldProps={{ disabled: !standards?.length }}
          /> */}
          {formValues?.standard &&
            (standard?.pointType === PointType.INPUT ? (
              <Field
                name="point"
                component={FieldRange}
                sx={
                  {
                    maxWidth: 250,
                    '.MuiSlider-root': {
                      color: '#fff',
                    },
                    '#label-for-point': {
                      color: '#fff',
                    },
                    '.MuiSlider-markLabel': {
                      fontWeight: 700,
                      color: '#fff',
                    },
                  } as SxProps<Theme>
                }
                label="Điểm"
                fieldProps={{
                  type: 'number',
                }}
                options={standard?.point}
              />
            ) : (
              <Field
                name="pointValue"
                component={FieldSelect}
                sx={
                  {
                    maxWidth: 250,
                    '.MuiOutlinedInput-root': {
                      backgroundColor: '#97C1BF',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    },
                    '#label-for-pointValue': {
                      color: '#fff',
                    },
                  } as SxProps<Theme>
                }
                options={standard?.pointData?.map((item) => ({ value: item, label: item }))}
                label="Điểm"
              />
            ))}
        </Grid>
        <Grid item xs={2}>
          <Button
            // loading={loadingLogin}
            onClick={handleSubmit as any}
            type="submit"
            sx={{ width: '100%', mt: 5, mb: 3, color: '#000000', ...defaultStyle.btnStyle('#FFFFFF') }}
            variant="contained"
          >
            Search
          </Button>
        </Grid>
      </Grid>
      {/* <Grid container spacing={1.3}>
        <Grid item xs={1}>
          <Button
            // loading={loadingLogin}
            // onClick={handleSubmit as any}
            startIcon={<FilterListIcon/>}
            sx={{ width: '100%', mt: 5, mb: 3, color:'#000000', ...defaultStyle.btnStyle('#97C1BF') }}
            variant="contained"
          >
            Lọc
          </Button>
        </Grid>
        <Grid item xs={2}>
        <Field
            name="gender"
            component={FieldSelect}
            sx={{ 
              maxWidth: 250,
              '.MuiOutlinedInput-root':{
                backgroundColor: '#97C1BF',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
              },
              '#label-for-gender':{
                color:'#fff'
              }
            } as SxProps<Theme>}
            options={genders?.map((item) => ({ value: item._id, label: item.name }))}
            label="Range"
            // fieldProps={{ disabled: !standards?.length }}
          />
        </Grid>
      </Grid> */}
    </Stack>
  );
};
