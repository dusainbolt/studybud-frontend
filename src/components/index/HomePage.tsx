import { Layout } from '@common/Layout';
import { Container, Stack, Avatar, Typography, Grid, FormControlLabel, Breadcrumbs, Link } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';
import { homePageStyle } from './homePageStyle';
import { useAppSelector } from '@redux/store';
import { getUserSlice } from '@redux/slices/userSlice';
import { Button } from '@common/Button';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import FemaleIcon from '@mui/icons-material/Female';
import { IOSSwitch } from '@common/Switch/IOSSwitch';

const HomePage: FC<any> = () => {
  const styles = homePageStyle();
  const { user } = useAppSelector(getUserSlice);

  // const dispatch = useAppDispatch();

  // const initValueFormEditUser: UpdateUserInput = { username: '' };

  // const validateFormEditUser = yup.object({
  //   username: yup.string().required(Validate.require('username')),
  //   // .min(4, Validate.during(4, 12))
  //   // .max(12, Validate.during(4, 12)),
  // });

  // useEffect(() => {
  //   dispatch(getListUserStart());
  // }, []);

  // const logOut = () => {
  //   dispatch(logout());
  // };

  // const onSubmitEditUser = async (values) => {
  //   await updateUserMutation(values);
  // };

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
          <div className={styles.cover}></div>
          <Stack className={styles.contentWrap} spacing={4} direction={{ xs: 'column', md: 'row' }}>
            <div className={styles.avatarWrap}>
              <Avatar alt={user?.name} src={user?.avatar || ''} />
              <Typography className={styles.username} variant="h1">
                {user?.name || ''}
              </Typography>
            </div>
            <Stack spacing={0.7}>
              <div>
                Xin chào. Mình là sinh viên năm nhất ở Fulbright University Vietnam. Hiện tại mình đang có hứng thú với
                mảng Công nghệ - Giáo dục và muốn được giaoi lưu làm quen với các bạn/anh/chị trong lĩnh vực này. Dương
                hiện đang học Python và sắp thi IELTS aim 8.0. Nhắn tin với mình để trao đổi thêm nhé. Mình có thể dành
                ra khoảng 1 giờ/tuần để học trực tuyến hoặc gặp bạn trực tiếp ở gần Quận 7, TP. HCM. Nice to meet you!
              </div>
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
            </Stack>
          </Stack>
        </Container>
        <Container className={styles.container}>
          <Stack className={clsx(styles.profileBody, styles.spacingContent)} spacing={4} direction="row">
            <div className={styles.profileContentLeft}>
              <Stack spacing={1} className={styles.profileContentBox}>
                <h2>Thông tin cá nhân</h2>
                <Stack direction="row">
                  <SchoolIcon sx={{ marginRight: 0.8 }} />
                  <div>
                    Học tại <b>Fulbright University Vietnam</b>
                  </div>
                </Stack>
                <Stack direction="row">
                  <HomeIcon sx={{ marginRight: 0.8 }} />
                  <div>
                    Đến từ <b>TP.Hồ Chí Minh</b>
                  </div>
                </Stack>
                <Stack direction="row">
                  <FemaleIcon sx={{ marginRight: 0.8 }} />
                  <div>
                    <b>Nữ</b>
                  </div>
                </Stack>
                <div>
                  <i>*Nếu tôi không trả lời bạn, hãy nhắn cho tôi qua: nktduong@gmail.com</i>
                </div>
              </Stack>
              <Stack spacing={1} className={styles.profileContentBox} sx={{ marginTop: 3 }}>
                <h2>Đôi nét về mình</h2>
                <div className={styles.aboutMeQABox}>Nếu chúng ta lỡ không hợp nhau thì sao?</div>
                <div className={styles.aboutMeQABox}>Điều mình tìm kiếm ở người bạn học?</div>
                <div className={styles.aboutMeQABox}>Mình là kiểu người học như thế nào?</div>
                <div className={styles.aboutMeQABox}>Những lúc không học chúng ta có thể nói về?</div>
              </Stack>
            </div>
            <div className={styles.profileContentRight}>
              <div className={styles.profileContentBox}>Them yeu cau tim ban hoc</div>
              <Grid container sx={{ marginTop: 2 }} spacing={3}>
                <Grid item xs={4}>
                  <div className={styles.cardSubject}>
                    <div className={styles.cardSubjectHeader}>
                      <h3>Ôn thi IELTS cấp tốc Band 8.0</h3>
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
                      <h3>Ôn thi IELTS cấp tốc Band 8.0</h3>
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
                      <h3>Ôn thi IELTS cấp tốc Band 8.0</h3>
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
                      <h3>Ôn thi IELTS cấp tốc Band 8.0</h3>
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
    </Layout>
  );
};

export default HomePage;
