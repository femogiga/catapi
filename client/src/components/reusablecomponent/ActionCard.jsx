
import Card from '@mui/material/Card';


import Typography from '@mui/material/Typography';


export default function ActionCard({ withText, width, height, src, breed }) {
    src = src || "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=1600"
    // maxWidth = maxWidth || 220
    withText = withText || false
    height = height || '220px'
    breed = breed || 'cat'
    width = width || '220px'


    return (
        <div className='actioncard'>
            <div className="card" style={{  marginBlockEnd: '1rem', display:'flex' }}>

                <img
                    src={src}
                    alt="green iguana"
                    style={{ maxWidth:  width  , height: height, objectFit: 'cover' }}
                />

            </div>
            {withText && <p>
                {breed}
            </p>}
        </div>
    );
}
