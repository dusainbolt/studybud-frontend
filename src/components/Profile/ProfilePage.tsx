import { Layout } from '@common/Layout';
import { Container, Stack, Avatar, Typography, Grid, FormControlLabel, Breadcrumbs, Link } from '@mui/material';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { profilePageStyle } from './ProfilePageStyle';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { getUserSlice, updateProfileStart } from '@redux/slices/userSlice';
import { Button } from '@common/Button';
import { ButtonIcon } from '@common/Button/ButtonIcon';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import FemaleIcon from '@mui/icons-material/Female';
import { IOSSwitch } from '@common/Switch/IOSSwitch';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import CakeIcon from '@mui/icons-material/Cake';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ModalDescription } from './ModalEditProfile/ModalDescription';
import Validate from '@utils/validate';
import * as yup from 'yup';
import { Formik } from 'formik';
import { UpdateUserInput } from '@type/user';
import { genderObj, GenderOptions, ModalBasicInfo } from './ModalEditProfile/ModalBasicInfo';
import Helper from '@utils/helper';

const ProfilePageComponent: FC<{
  isMyProfile: boolean;
}> = ({ isMyProfile }) => {
  const styles = profilePageStyle();
  const { user, loadingUpdateProfile } = useAppSelector(getUserSlice);
  const [visibleModalDescription, setVisibleModalDescription] = useState<boolean>(false);
  const [visibleModalBasicInfo, setVisibleModalBasicInfo] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const initialValuesProfile: UpdateUserInput = {
    username: user?.username || '',
    description: user?.description || '',
    name: user?.name || '',
  };

  const validateModalDescription = yup.object({
    description: yup.string().required(Validate.require('Mô tả')),
    username: yup.string().required(Validate.require('username')),
    name: yup.string().required(Validate.require('Tên hiển thị')),

    // .min(4, Validate.during(4, 12))
    // .max(12, Validate.during(4, 12)),
  });

  const toggleModalDescription = () => {
    setVisibleModalDescription((visible) => !visible);
  };

  const toggleModalBasicInfo = () => {
    setVisibleModalBasicInfo((visible) => !visible);
  };

  const onSubmitModalProfile = (variables: UpdateUserInput) => {
    dispatch(updateProfileStart({ userId: user?._id, variables }));
  };

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

  return (
    <Layout>
      <main className={clsx(styles.main)}>
        <Container className={styles.container}>
          <div className={styles.cover}>
            {isMyProfile && (
              <Button
                startIcon={<CameraAltIcon />}
                size="small"
                className={clsx(styles.btnControlProfile, styles.btnEditCover)}
                variant="contained"
              >
                Chỉnh sửa ảnh bìa
              </Button>
            )}
          </div>
          <Stack className={styles.contentWrap} spacing={4} direction={{ xs: 'column', md: 'row' }}>
            <div className={styles.avatarWrap}>
              <Avatar alt={user?.name} src={user?.avatar || ''} />
              <ButtonIcon className={styles.btnEditAvatar} icon={<CameraAltIcon />} />
              <Typography className={styles.username} variant="h1">
                {user?.name || ''}
              </Typography>
              <Typography variant="body1">@{user?.username || ''}</Typography>
            </div>
            <Stack spacing={0.7} sx={{ width: '100%' }}>
              <div style={{ whiteSpace: 'pre-wrap' }}>{user?.description}</div>
              {isMyProfile ? (
                <Button
                  startIcon={<EditIcon />}
                  size="small"
                  className={clsx(styles.btnControlProfile)}
                  style={{ width: 180 }}
                  variant="contained"
                  onClick={toggleModalDescription}
                >
                  Mô tả bản thân
                </Button>
              ) : (
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
                  <Stack>
                    <div>
                      <b>Hoạt động lần cuối:</b> 23/02/2022
                    </div>
                    <div>
                      <b>37 ban chung</b>
                    </div>
                  </Stack>
                  <Stack spacing={2.5} direction="row">
                    <Button className={styles.btnControlProfile} variant="contained">
                      Kết bạn
                    </Button>
                    <Button className={styles.btnControlProfile} variant="contained">
                      Nhắn tin
                    </Button>
                  </Stack>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Container>
        <Container className={styles.container}>
          <Stack className={clsx(styles.profileBody, styles.spacingContent)} spacing={4} direction="row">
            <div className={styles.profileContentLeft}>
              <Stack spacing={1} className={styles.profileContentBox}>
                <h2>
                  Giới thiệu
                  {isMyProfile && (
                    <ButtonIcon
                      onClick={toggleModalBasicInfo}
                      size="small"
                      className={styles.buttonIcon}
                      icon={<EditIcon />}
                    />
                  )}
                </h2>
                <Stack direction="row">
                  <SchoolIcon sx={{ marginRight: 0.8 }} />
                  <div>
                    Học tại <b>{user?.school}</b>
                  </div>
                </Stack>
                <Stack direction="row">
                  <HomeIcon sx={{ marginRight: 0.8 }} />
                  <div>
                    Đến từ <b>{user?.address}</b>
                  </div>
                </Stack>
                <Stack direction="row">
                  <FemaleIcon sx={{ marginRight: 0.8 }} />
                  <div>
                    <b>{Helper.getLabelByOptions(GenderOptions, user?.gender)}</b>
                  </div>
                </Stack>
                <Stack direction="row">
                  <CakeIcon sx={{ marginRight: 0.8 }} />
                  <div>
                    <b>18/11/1999</b>
                  </div>
                </Stack>
                <div>
                  <i>*Nếu tôi không trả lời bạn, hãy nhắn cho tôi qua: {user?.contact}</i>
                </div>
              </Stack>
              <Stack spacing={1} className={styles.profileContentBox} sx={{ marginTop: 3 }}>
                <h2>
                  Đôi nét về mình{' '}
                  {isMyProfile && <ButtonIcon size="small" className={styles.buttonIcon} icon={<EditIcon />} />}
                </h2>
                <div className={styles.aboutMeQABox}>Nếu chúng ta lỡ không hợp nhau thì sao?</div>
                <div className={styles.aboutMeQABox}>Điều mình tìm kiếm ở người bạn học?</div>
                <div className={styles.aboutMeQABox}>Mình là kiểu người học như thế nào?</div>
                <div className={styles.aboutMeQABox}>Những lúc không học chúng ta có thể nói về?</div>
              </Stack>
            </div>
            <div className={styles.profileContentRight}>
              {isMyProfile && (
                <Button
                  startIcon={<AddCircleIcon />}
                  className={clsx(styles.btnControlProfile)}
                  style={{ width: 330 }}
                  variant="contained"
                >
                  Thêm yêu cầu tìm bạn học
                </Button>
              )}
              <Grid container sx={{ marginTop: 2 }} spacing={2}>
                <Grid item xs={4}>
                  <div className={styles.cardSubject}>
                    <div className={styles.cardSubjectHeader}>
                      <h3>
                        Ôn thi IELTS cấp tốc Band 8.0{' '}
                        {isMyProfile && <ButtonIcon size="small" className={styles.buttonIcon} icon={<EditIcon />} />}
                      </h3>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} label="" />
                    </div>
                    <div className={styles.cardSubjectBottom}>
                      <Breadcrumbs className={styles.breadCrumbsTarget} separator="›" aria-label="breadcrumb">
                        {breadcrumbs}
                      </Breadcrumbs>{' '}
                      <div style={{ marginTop: '10px', fontSize: 18 }}>
                        <b>Mô tả:</b> Mình từng học chuyên Anh hồi cấp 3 và thi IELTS được 7.0. Test trình độ của mình
                        hiện tại là 7.5 overall band với 6.5 speaking, 6.0 writing, 8.0 speaking, 9.0 listening.
                      </div>
                      <div style={{ marginTop: '10px', fontSize: 18 }}>
                        <b>Mục tiêu của mình:</b> Mình muốn trở thành giáo viên dạy IELTS nên có nhu cầu đạt Band 8.0+
                        trong 3 tháng nữa, với các Band đều trên 6.5. Mình cũng muốn thử tự học với các bạn đang gặp khó
                        khăn trong IELTS như mình để luyện tập kỹ năng giảng dạy IELTS cho sau này.
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className={styles.cardSubject}>
                    <div className={styles.cardSubjectHeader}>
                      <h3>
                        Ôn thi IELTS cấp tốc Band 8.0{' '}
                        {isMyProfile && <ButtonIcon size="small" className={styles.buttonIcon} icon={<EditIcon />} />}
                      </h3>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} label="" />
                    </div>
                    <div className={styles.cardSubjectBottom}>
                      <Breadcrumbs className={styles.breadCrumbsTarget} separator="›" aria-label="breadcrumb">
                        {breadcrumbs}
                      </Breadcrumbs>{' '}
                      <div style={{ marginTop: '10px', fontSize: 18 }}>
                        <b>Mô tả:</b> Mình từng học chuyên Anh hồi cấp 3 và thi IELTS được 7.0. Test trình độ của mình
                        hiện tại là 7.5 overall band với 6.5 speaking, 6.0 writing, 8.0 speaking, 9.0 listening.
                      </div>
                      <div style={{ marginTop: '10px', fontSize: 18 }}>
                        <b>Mục tiêu của mình:</b> Mình muốn trở thành giáo viên dạy IELTS nên có nhu cầu đạt Band 8.0+
                        trong 3 tháng nữa, với các Band đều trên 6.5. Mình cũng muốn thử tự học với các bạn đang gặp khó
                        khăn trong IELTS như mình để luyện tập kỹ năng giảng dạy IELTS cho sau này.
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className={styles.cardSubject}>
                    <div className={styles.cardSubjectHeader}>
                      <h3>
                        Ôn thi IELTS cấp tốc Band 8.0{' '}
                        {isMyProfile && <ButtonIcon size="small" className={styles.buttonIcon} icon={<EditIcon />} />}
                      </h3>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} label="" />
                    </div>
                    <div className={styles.cardSubjectBottom}>
                      <Breadcrumbs className={styles.breadCrumbsTarget} separator="›" aria-label="breadcrumb">
                        {breadcrumbs}
                      </Breadcrumbs>{' '}
                      <div style={{ marginTop: '10px', fontSize: 18 }}>
                        <b>Mô tả:</b> Mình từng học chuyên Anh hồi cấp 3 và thi IELTS được 7.0. Test trình độ của mình
                        hiện tại là 7.5 overall band với 6.5 speaking, 6.0 writing, 8.0 speaking, 9.0 listening.
                      </div>
                      <div style={{ marginTop: '10px', fontSize: 18 }}>
                        <b>Mục tiêu của mình:</b> Mình muốn trở thành giáo viên dạy IELTS nên có nhu cầu đạt Band 8.0+
                        trong 3 tháng nữa, với các Band đều trên 6.5. Mình cũng muốn thử tự học với các bạn đang gặp khó
                        khăn trong IELTS như mình để luyện tập kỹ năng giảng dạy IELTS cho sau này.
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className={styles.cardSubject}>
                    <div className={styles.cardSubjectHeader}>
                      <h3>
                        Ôn thi IELTS cấp tốc Band 8.0{' '}
                        {isMyProfile && <ButtonIcon size="small" className={styles.buttonIcon} icon={<EditIcon />} />}
                      </h3>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} label="" />
                    </div>
                    <div className={styles.cardSubjectBottom}>
                      <Breadcrumbs className={styles.breadCrumbsTarget} separator="›" aria-label="breadcrumb">
                        {breadcrumbs}
                      </Breadcrumbs>{' '}
                      <div style={{ marginTop: '10px', fontSize: 18 }}>
                        <b>Mô tả:</b> Mình từng học chuyên Anh hồi cấp 3 và thi IELTS được 7.0. Test trình độ của mình
                        hiện tại là 7.5 overall band với 6.5 speaking, 6.0 writing, 8.0 speaking, 9.0 listening.
                      </div>
                      <div style={{ marginTop: '10px', fontSize: 18 }}>
                        <b>Mục tiêu của mình:</b> Mình muốn trở thành giáo viên dạy IELTS nên có nhu cầu đạt Band 8.0+
                        trong 3 tháng nữa, với các Band đều trên 6.5. Mình cũng muốn thử tự học với các bạn đang gặp khó
                        khăn trong IELTS như mình để luyện tập kỹ năng giảng dạy IELTS cho sau này.
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </main>
      <Formik
        onSubmit={onSubmitModalProfile}
        validationSchema={validateModalDescription}
        initialValues={initialValuesProfile}
      >
        <>
          <ModalDescription
            loading={loadingUpdateProfile as any}
            toggleModal={toggleModalDescription}
            open={visibleModalDescription}
          />
          <ModalBasicInfo
            loading={loadingUpdateProfile as any}
            toggleModal={toggleModalBasicInfo}
            open={visibleModalBasicInfo}
          />
        </>
      </Formik>
    </Layout>
  );
};

export default ProfilePageComponent;
