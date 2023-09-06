import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function ActionCardWithInfo(props, src) {
    const { description, name, index } = props
    src = props.image.url || "https://images.pexels.com/photos/18175120/pexels-photo-18175120/free-photo-of-ave.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
   





    return (
        <Card className="flow-2" sx={{ display: 'flex', width: '100%', boxShadow: 'none' }} >
            <CardMedia
                sx={{ maxWidth: "12rem", minWidth: '9rem', borderRadius: '12px' }}
                component="img"
                alt={`${name} cat`}
                height="180"
                width="180"
                image={src}
            />
            <CardContent sx={{ width: '80%', marginLeft: '2rem' }} >
                <Typography gutterBottom variant="h5" component="div">
                    <span style={{ marginRight: '1rem' }}>{index}  </span>  {name}
                </Typography>
                <Typography variant="body2" >
                    {description}

                </Typography>


            </CardContent>

        </Card>
    );
}



export default ActionCardWithInfo
