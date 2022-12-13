import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';



const Demo = () => {
    const [posts, setPosts] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost/wordpress/wp-json/wp/v2/posts")
        .then((response) => response.json())
        .then ((data) => setPosts(data));
    }

    useEffect(() => {
        fetchData();
    },[]);
  return (
    <div>
      <h1> blog</h1>
      <ul>{posts.map((post, index) =>(
          <Grid item xs={4} key={index}>
            <Card>
                  <CardContent>
                      <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                      <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                  </CardContent>
              </Card>
            </Grid>
      ))}
      </ul>
    </div>
  );
}

export default Demo;
