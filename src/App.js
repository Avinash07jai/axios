import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Demo from './Demo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from './component/Read';
import Update from './component/Update';
import Testaxiso from './Testaxiso';


export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts');
      if (!response.ok) {
        // oups! something went wrong
        return;
      }

      const posts = await response.json();
      setPosts(posts);
    }

    loadPosts();
  }, [])
  return (
    <>
    <Grid container spacing={2}>
      {posts.map((post, index) => (
        <Grid item xs={4} key={index}>
          <Card>
            <CardContent>
              <Typography
                color="textSecondary"
                gutterBottom
                dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <Typography
                variant="body2"
                component="p"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Demo />

    <BrowserRouter>
    <Routes>
      <Route exact path='/'  element={<Testaxiso />} />
      <Route path='/read' element={<Read />} />
      <Route path='/update' element={<Update />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}