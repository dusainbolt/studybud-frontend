import { ButtonIcon } from '@common/Button/ButtonIcon';
import { IOSSwitch } from '@common/Switch/IOSSwitch';
import { Box, Breadcrumbs, FormControlLabel, Link, Typography } from '@mui/material';
import { StudyRequest } from '@type/request-studybud';
import { FC } from 'react';

export const CardStudyRequest: FC<{ studyRequest?: StudyRequest; isMyProfile?: boolean }> = ({
  studyRequest,
  isMyProfile = false,
}) => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Ngôn ngữ
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/material-ui/getting-started/installation/">
      Tiếng Anh
    </Link>,
    <Typography key="3" color="inherit">
      Thi IELTS
    </Typography>,
    <Typography key="3" color="inherit">
      8.0
    </Typography>,
  ];

  console.log('studyRequest: ', studyRequest);

  // const theme: Theme = useTheme();
  return (
    <Box sx={{ borderRadius: 4.5, overflow: 'hidden' }}>
      <Box
        sx={{
          background: '#D0D0D0',
          // padding: `22px 44px`,
          p: (theme) => `${theme.spacing(2.5)} ${theme.spacing(5)}`,
          '& h3': {
            margin: 0,
          },
        }}
      >
        <h3>
          {studyRequest?.title || ''}
          {isMyProfile && <ButtonIcon size="small" sx={{ ml: 1, width: 36, height: 36 }} icon={<EditIcon />} />}
        </h3>
        <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} label="" />
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
        </Breadcrumbs>{' '}
        <Box style={{ marginTop: '10px', fontSize: 18 }}>
          <b>Mô tả:</b> Mình từng học chuyên Anh hồi cấp 3 và thi IELTS được 7.0. Test trình độ của mình hiện tại là 7.5
          overall band với 6.5 speaking, 6.0 writing, 8.0 speaking, 9.0 listening.
        </Box>
        <Box style={{ marginTop: '10px', fontSize: 18 }}>
          <b>Mục tiêu của mình:</b> Mình muốn trở thành giáo viên dạy IELTS nên có nhu cầu đạt Band 8.0+ trong 3 tháng
          nữa, với các Band đều trên 6.5. Mình cũng muốn thử tự học với các bạn đang gặp khó khăn trong IELTS như mình
          để luyện tập kỹ năng giảng dạy IELTS cho sau này.
        </Box>
      </Box>
    </Box>
  );
};
