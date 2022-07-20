import { Button } from '@common/Button';
import { Box, Breadcrumbs, Typography, Avatar } from '@mui/material';
import { defaultStyle } from '@styles/theme';
import { FC } from 'react';

export const CardUserOverview: FC<{ onClickEdit?: any }> = ({ onClickEdit }) => {
  const subjects = ['Tiếng Pháp', 'Lập trình C++', 'Tiếng Nhật'];

  return (
    <Box
      sx={{
        borderRadius: 4.5,
        overflow: 'hidden',
        backgroundImage: `url('/images/BackgroundCard.png')`,
        backgroundSize: 'cover',
        p: 2,
        boxShadow: '4px 4px 7px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        maxHeight: '480px',
      }}
    >
      <Avatar alt="User Image" src="/images/cat.jpg" sx={{ width: 180, height: 180, m: 'auto 0' }} />
      <Box className="container" sx={{ m: 'auto 0', px: 2, width: '100%' }}>
        <Box className="name_age_gender" sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}>
          <Typography variant="h6" className="username" sx={{ fontWeight: 700 }}>
            Hào Nam
          </Typography>
          <Typography variant="body2" sx={{ color: '#747474', fontWeight: 500 }}>
            22t, Nam
          </Typography>
        </Box>
        <Box className="short_introduction">
          {subjects.map((item) => {
            return (
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {item}
              </Typography>
            );
          })}
        </Box>
        <Button
          // loading={loadingLogin}
          // onClick={handleSubmit as any}
          sx={{
            width: '100%',
            maxWidth: '200px',
            mt: 3,
            mb: 3,
            ml: 'auto',
            float: 'right',
            color: '#fff',
            ...defaultStyle.btnStyle('#97C1BF'),
          }}
          variant="contained"
        >
          Kết bạn
        </Button>
      </Box>
    </Box>
  );
};
