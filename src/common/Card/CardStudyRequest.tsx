import { ButtonIcon } from '@common/Button/ButtonIcon';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import { StatusOnOff } from '@type/context';
import { StudyRequest } from '@type/request-studybud';
import EditIcon from '@mui/icons-material/Edit';
import { FC } from 'react';

export const CardStudyRequest: FC<{ studyRequest?: StudyRequest; isMyProfile?: boolean; onClickEdit?: any }> = ({
  studyRequest,
  isMyProfile = false,
  onClickEdit,
}) => {
  const breadcrumbs = [
    // <Link underline="hover" key="1" color="inherit" href="/">
    //   {studyRequest?.topicData?.name || ''}
    // </Link>,
    // <Link underline="hover" key="2" color="inherit" href="/material-ui/getting-started/installation/">
    //   {studyRequest?.missionData?.name || ''}
    // </Link>,
    <Typography key="1" color="inherit">
      {studyRequest?.topicData?.name || ''}
    </Typography>,
    <Typography key="2" color="inherit">
      {studyRequest?.missionData?.name || ''}
    </Typography>,
    <Typography key="3" color="inherit">
      {studyRequest?.standardData?.name || ''}
    </Typography>,
    <Typography key="3" color="inherit">
      {studyRequest?.point || studyRequest?.pointValue || ''}
    </Typography>,
  ];

  return (
    <Box sx={{ borderRadius: 4.5, overflow: 'hidden' }}>
      <Box
        sx={{
          background: '#D0D0D0',
          position: 'relative',
          p: (theme) => `${theme.spacing(2.5)} ${theme.spacing(5)}`,
        }}
      >
        <Typography sx={{ m: 0, fontSize: 19, fontWeight: 700 }} variant="h3">
          {studyRequest?.title || ''}
          {isMyProfile && (
            <ButtonIcon
              onClick={onClickEdit(studyRequest)}
              size="small"
              sx={{ ml: 1, width: 36, height: 36, position: 'absolute', right: 5, top: 10 }}
              icon={<EditIcon />}
            />
          )}
        </Typography>
      </Box>
      <Box sx={{ background: '#ffffff', p: (theme) => `${theme.spacing(2.5)} ${theme.spacing(5)}` }}>
        <Breadcrumbs
          sx={{
            '& .MuiBreadcrumbs-separator': {
              marginRight: 0.5,
              marginLeft: 0.5,
            },
            '& .MuiBreadcrumbs-li .MuiTypography-root': {
              color: '#000000',
              fontSize: 18,
              fontWeight: 600,
            },
          }}
          separator="›"
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Box sx={{ mt: 1, fontSize: 18 }}>
          <b>Trạng thái:</b>{' '}
          {studyRequest?.status === StatusOnOff.ON ? (
            <span style={{ color: 'green' }}>Hoạt động</span>
          ) : (
            <span style={{ color: 'red' }}>Ngừng hoạt động</span>
          )}
        </Box>
        <Box sx={{ mt: 1, fontSize: 18 }}>
          <b>Mô tả:</b> {studyRequest?.requestDes || ''}
        </Box>
        <Box sx={{ mt: 1, fontSize: 18 }}>
          <b>Mục tiêu của mình:</b> {studyRequest?.missionDes || ''}
        </Box>
      </Box>
    </Box>
  );
};
