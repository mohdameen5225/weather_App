import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    
        const INIT_URL = 
        "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
       const HOT_URL =
        "https://images.unsplash.com/photo-1581129724980-2ab2153c3d8d?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
       const COLD_URL = 
       "https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
       const RAIN_URL = 
       "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
    <div className="InfoBox">   
        
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 80 
            ? RAIN_URL 
            : info.temp > 15 
            ? HOT_URL 
            : COLD_URL
        } 
        title="green iguana"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80 
            ? <ThunderstormIcon/> 
            : info.temp > 15 
            ? <WbSunnyIcon/> 
            : <AcUnitIcon/>
        } 
        </Typography>
        <Typography variant="body2" color="text.secondary"component={"span"}>
          <p>Temparature = {info.temp}&deg;c</p>
          <p>Humidity = {info.humidity}</p>
          <p> Min Temp = {info.tempMin}&deg;c</p>
          <p> Max Temp = {info.tempMax}&deg;c</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;c</p>
        </Typography>
      </CardContent>
      <CardActions>
     
      </CardActions>
    </Card>
    </div>
  </div>
 );
}