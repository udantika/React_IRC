// function Home()
// {
//     return(

//         <div>Even if you fall on your face, you’re still moving forward.</div>
//     )
// }
// export default Home;


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import  Styled from '@emotion/styled';
import { Paper } from '@mui/material'

const Home=()=>
{
    const Item = Styled(Paper)(()=>(
    {
    textAlign: 'center',
    }) );
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item xs={{bgcolor:'pink',p:5}}>Hello</Item>
            </Grid>
            <Grid item xs={4}>
              <Item xs={{bgcolor:'pink',p:5}}>Hello</Item>
            </Grid>
            <Grid item xs={4}>
              <Item xs={{bgcolor:'pink',p:5}}>Hello</Item>
            </Grid>
            <Grid item xs={4}>
              <Item xs={{bgcolor:'pink',p:5}}>Hello</Item>
            </Grid>
          </Grid>
        </Box>
    </>
    )
}
export default Home;