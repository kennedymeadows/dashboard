import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import EarningCard from './Components/EarningCard';
import PopularCard from './Components/PopularCard';
import TotalOrderLineChartCard from './Components/TotalOrderLineChartCard';

// ===============================|| SHADOW BOX ||=============================== //

// ============================|| UTILITIES SHADOW ||============================ //

const UtilitiesStatistics = () => (
    <MainCard title="Statistics" secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard title="Statistics">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <EarningCard />
                            <Box sx={{ height: 16 }} />
                            <TotalOrderLineChartCard />
                            <Box sx={{ height: 16 }} />
                            <EarningCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PopularCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <TotalOrderLineChartCard />
                            <Box sx={{ height: 16 }} />
                            <EarningCard />
                            <Box sx={{ height: 16 }} />
                            <TotalOrderLineChartCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PopularCard />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UtilitiesStatistics;
