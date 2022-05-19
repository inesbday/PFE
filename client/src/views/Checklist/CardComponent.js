import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

import { Button } from "reactstrap";

function CardComponent({
  image,
  handleClickAfter,
  handleClickBefore,
  label,
  btnClassName,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="220" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button className={btnClassName} onClick={handleClickBefore}>
          Avant chargement
        </Button>
        <Button className={btnClassName} onClick={handleClickAfter}>
          Apres chargement
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
