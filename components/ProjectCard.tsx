

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ProjectCardProps{
    project: {
        title: string
        image: string
        github: string
        live: string
        page: string
        description: string
    }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className='max-w-[500px]  bg-[#2a2833] flex flex-col shadow-slate-600 shadow'>
      <CardMedia
        component="img"
        alt="project image"
        image={project.image}
        className=''
      />
      <CardContent className='bg-[#2a2833] text-white'>
        <Typography gutterBottom variant="h4" component="div" className='font-bold'>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='text-white'>
          {project.description}
        </Typography>
      </CardContent>
      <CardActions className='bg-[#2a2833] flex justify-around mt-auto'>
        <a href={project.live}>
            <Button variant="outlined" size="small" className='text-white hover:bg-blue-600 text-lg border-2 hover:border-2'>Live</Button>
        </a>
        <a href={project.github}>
           <Button variant="outlined" size="small" className='text-white hover:bg-blue-600 text-lg border-2 hover:border-2'>Github</Button> 
        </a>
        
      </CardActions>
    </Card>
  );
}