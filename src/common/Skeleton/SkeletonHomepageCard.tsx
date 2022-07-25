import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

function SkeletonChildrenDemo(props: { loading?: boolean }) {
    const { loading = false } = props;

    return (
        <Box
            sx={{
                borderRadius: 4.5,
                overflow: 'hidden',
                backgroundSize: 'cover',
                p: 2,
                boxShadow: '4px 4px 7px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                maxHeight: '480px',
            }}
        >
            {loading ? (
                <Skeleton variant='circular'>
                    <Avatar sx={{ width: 180, height: 180, m: 'auto 0' }} />
                </Skeleton>
            ) : (
                <Avatar alt="User Image" src="/images/cat.jpg" sx={{ width: 180, height: 180, m: 'auto 0' }} />
            )}
            
            <Box className="container" sx={{ m: 'auto 0', px: 2, width: '100%' }}>
                <Box className="name_age_gender" sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}>
                    {loading ? (
                        <Skeleton width='100%'>
                            <Typography variant="h6" className="username" sx={{ fontWeight: 700 }}>.</Typography>
                        </Skeleton>
                    ) : (
                        <Typography variant="h6" className="username" sx={{ fontWeight: 700 }}>
                            Hào Nam
                        </Typography>
                    )}
                </Box>
                <Box className="short_introduction">
                    {loading ? (
                        <Skeleton width='100%'>
                            <Typography>.</Typography>
                        </Skeleton>
                    ) : (
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Hello
                        </Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export const SkeletonHomepageCard = () => {
    return (
        <Grid item xs={4}>
            <SkeletonChildrenDemo loading />
        </Grid>
    );
};
