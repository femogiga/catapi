
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function ActionCard({ withText, width, height, src, breed }) {
    src = src || "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=1600"
    // maxWidth = maxWidth || 220
    withText = withText || false
    height = height || '220px'
    breed = breed || 'cat'
    width = width || '220px'
    return (
        <div className = 'actioncard' style={{  }}>
            <Card sx={{ width: { width }, height: height, marginBlockEnd: '1rem', borderRadius: '13px' ,display:'flex'}}>

                <CardMedia
                    component="img"
                    image={src}
                    alt="green iguana"
                    sx={{ objectFit: 'cover' }}
                />

            </Card>
            {withText && <Typography gutterBottom variant="h5" component="div">
                {breed}
            </Typography>}
        </div>
    );
}
