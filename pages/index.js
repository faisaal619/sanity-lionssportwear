import Head from 'next/head'
 import { Typography } from '@mui/material';


 export default function Home() {
   return (

     <div>
       <Head>

         <title>Sanity Lions Sportwear</title>
         <meta
           name="description"
           content="The ecommerce website by next and sanity"
         />
         <link rel="icon" href="/favicon.ico" />
       </Head>

      
       <Typography component="h1" variant="h1">
         Sanity Lions Sportwear
       </Typography>
     </div>
   
   );
 }