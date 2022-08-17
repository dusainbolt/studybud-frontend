import { Button } from '@common/Button';
import { CardUserOverview } from '@common/Card/CardUserOverview';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { defaultStyle } from '@styles/theme';

export const SearchResult = () => {
  return (
    <Box>
      {/* <Button
            // loading={loadingLogin}
            // onClick={handleSubmit as any}
            sx={{ mt: 5, mb: 3, color:'#000000', ...defaultStyle.btnStyle('#7DA6A3') }}
            variant="contained"
          >
            Lọc
         </Button> */}
      <Grid container spacing={2} sx={{ p: 6 }} className="CardContainer">
        <Grid item xs={4}>
          <CardUserOverview />
        </Grid>
        <Grid item xs={4}>
          <CardUserOverview />
        </Grid>
        <Grid item xs={4}>
          <CardUserOverview />
        </Grid>
        <Grid item xs={4}>
          <CardUserOverview />
        </Grid>
        <Grid item xs={4}>
          <CardUserOverview />
        </Grid>
        <Grid item xs={4}>
          <CardUserOverview />
        </Grid>
      </Grid>
    </Box>
  );
};
