import { Button } from '@common/Button';
import { ButtonIcon } from '@common/Button/ButtonIcon';
import { CardStudyRequest } from '@common/Card/CardStudyRequest';
import { Layout } from '@common/Layout';
import { SkeletonCardStudy } from '@common/Skeleton/SkeletonCardStudy';
import { useProfilePage } from '@hooks/useProfilePage';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import FemaleIcon from '@mui/icons-material/Female';
import HomeIcon from '@mui/icons-material/Home';
import MaleIcon from '@mui/icons-material/Male';
import SchoolIcon from '@mui/icons-material/School';
import { Avatar, Container, Grid, Stack, Typography } from '@mui/material';
import { getUserSlice } from '@redux/slices/userSlice';
import { useAppSelector } from '@redux/store';
import { StatusOnOff } from '@type/context';
import { CreateStudyRequestInput } from '@type/request-studybud';
import { PointType } from '@type/standard';
import { Gender, UpdateUserInput } from '@type/user';
import Helper from '@utils/helper';
import Validate from '@utils/validate';
import clsx from 'clsx';
import { Formik } from 'formik';
import { FC, useState } from 'react';
import * as yup from 'yup';
import { GenderOptions, ModalBasicInfo } from './ModalEditProfile/ModalBasicInfo';
import { ModalDescription } from './ModalEditProfile/ModalDescription';
import { ModalRequestStudybud } from './ModalEditProfile/ModalRequestStudybud';
import { profilePageStyle } from './ProfilePageStyle';

const ProfilePageComponent: FC<{
  isMyProfile: boolean;
}> = ({ isMyProfile }) => {
  const styles = profilePageStyle();
  const { user, loadingUpdateProfile } = useAppSelector(getUserSlice);
  const [visibleModalDescription, setVisibleModalDescription] = useState<boolean>(false);
  const [visibleModalBasicInfo, setVisibleModalBasicInfo] = useState<boolean>(false);

  const {
    onSubmitRequestStudybud,
    onSubmitModalProfile,
    visibleModalRequestStudybud,
    toggleModalRequestStudybud,
    myStudyRequestList,
    loadingStudyRequestList,
  } = useProfilePage();

  const initialValuesDescription: UpdateUserInput = {
    username: user?.username || '',
    description: user?.description || '',
    name: user?.name || '',
  };

  const initialValuesProfile: UpdateUserInput = {
    address: user?.address || '',
    school: user?.school || '',
    contact: user?.contact || '',
    gender: user?.gender || Gender.MALE,
  };

  const initialValuesRequestStudy: CreateStudyRequestInput = {
    mission: '',
    missionDes: '',
    point: '',
    pointValue: '',
    requestDes: '',
    standard: '',
    title: '',
    topic: '',
    status: StatusOnOff.ON,
  };

  const validateFormDescription = yup.object({
    name: yup.string().required(Validate.require('Tên hiển thị')),
  });

  const validateFormRequestStudy = () =>
    yup.lazy((values) => {
      const standard = values?.standardData;
      return yup.object({
        title: yup.string().required(Validate.require('Tiêu đề')),
        topic: yup.string().required(Validate.require('Lĩnh vực')),
        mission: yup.string().required(Validate.require('Mục tiêu')),
        standard: yup.string().required(Validate.require('Tiêu chí')),
        point:
          standard?.pointType === PointType.INPUT
            ? yup.number().required(Validate.require('Điểm')).max(standard?.point, Validate.maxNumber(standard?.point))
            : yup.string().required(Validate.require('Điểm')),
      });
    });

  const toggleModalDescription = () => {
    setVisibleModalDescription((visible) => !visible);
  };

  const toggleModalBasicInfo = () => {
    setVisibleModalBasicInfo((visible) => !visible);
  };

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
                  {user?.gender === Gender.FEMALE ? (
                    <FemaleIcon sx={{ marginRight: 0.8 }} />
                  ) : (
                    <MaleIcon sx={{ marginRight: 0.8 }} />
                  )}
                  <div>
                    <b>{Helper.getLabelByOptions(GenderOptions, user?.gender)}</b>
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
                  onClick={toggleModalRequestStudybud}
                  startIcon={<AddCircleIcon />}
                  className={clsx(styles.btnControlProfile)}
                  style={{ width: 330 }}
                  variant="contained"
                >
                  Thêm yêu cầu tìm bạn học
                </Button>
              )}
              <Grid container sx={{ marginTop: 2 }} spacing={2}>
                {loadingStudyRequestList && (
                  <Grid item xs={4}>
                    <SkeletonCardStudy />
                  </Grid>
                )}
                {myStudyRequestList.map((item, index) => (
                  <Grid item key={index} xs={4}>
                    <CardStudyRequest studyRequest={item} isMyProfile={isMyProfile} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </Stack>
        </Container>
      </main>
      <Formik
        onSubmit={onSubmitModalProfile}
        validationSchema={validateFormDescription}
        initialValues={initialValuesDescription}
      >
        <ModalDescription
          loading={loadingUpdateProfile as any}
          toggleModal={toggleModalDescription}
          open={visibleModalDescription}
        />
      </Formik>
      <Formik onSubmit={onSubmitModalProfile} initialValues={initialValuesProfile}>
        <ModalBasicInfo
          loading={loadingUpdateProfile as any}
          toggleModal={toggleModalBasicInfo}
          open={visibleModalBasicInfo}
        />
      </Formik>
      <Formik
        onSubmit={onSubmitRequestStudybud}
        validationSchema={validateFormRequestStudy}
        initialValues={initialValuesRequestStudy}
      >
        <ModalRequestStudybud
          loading={loadingUpdateProfile as any}
          toggleModal={toggleModalRequestStudybud}
          open={visibleModalRequestStudybud}
        />
      </Formik>
    </Layout>
  );
};

export default ProfilePageComponent;
