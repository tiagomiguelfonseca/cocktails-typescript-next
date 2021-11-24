import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface Card {
  title: string;
  text1: string;
  text2: string;
  image: string;
  description: string;
}

export default function MediaCard({ title, text1, text2, image, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        image={image}
        height="100px"
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='inherit' color='text.secondary' noWrap={true}  paragraph={true} >
          {description} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>{text1}</Button>
        <Button size='small'>{text2}</Button>
      </CardActions>
    </Card>
  );
}
