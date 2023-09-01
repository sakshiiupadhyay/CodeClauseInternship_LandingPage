import React from 'react';
import { Button } from '@mui/material';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import Avatar from '@mui/material/Avatar';


const Home = () => {
  const backgroundImageUrl = 'https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg';

  return (
    <>
      <section>
        <div
          className="flex items-center justify-center h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="text-center">

            <h1 className="text-6xl text-white font-bold">Shopping Time</h1>
            <h1 className="text-7xl text-white  mt-8 font-bold">Best deals and offers</h1>
            <p className='text-black font-semibold mt-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  repudiandae ullam saepe, aspernatur deleniti earum fugit <br /> vitae quasi mollitia nemo id fugiat error asperiores excepturi non porro odio. </p>
            <Button variant="contained"
              style={{
                background: '#009effad',
                marginTop: '10px'
              }}>
              Explore More
            </Button>

          </div>
        </div>
      </section>

      <section className='mt-16 ' >
        <div>
          <h3 className='text-center text-5xl text-blue-600 font-semibold'>Discover and enjoy our amazing feature</h3>
          <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate officiis quam quibusdam</p>
        </div>
      </section>

<section className='mt-20'>
  <div className='flex flex-col sm:flex-row justify-center'>

   
    <div className='flex flex-row mb-6 sm:mb-0'>
      <div className='item-center'>
        <PeopleAltRoundedIcon sx={{ fontSize: 90 }} color="disabled" className='border-3 border-gray-400 p-2 rounded-full' />
      </div>
      <div className='mr-10 ml-4'>
        <h4 className='text-gray-600'>Connect with us</h4>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> unde commodi sapiente quam magnam ipsum  </p>
      </div>
    </div>

    
    <div className='flex flex-row'>
      <div>
        <LocationOnIcon sx={{ fontSize: 90 }} color="disabled" className='border-3 border-gray-400 p-2 rounded-full' />
      </div>
      <div className='ml-4'>
        <h4 className='text-gray-600'>Visit our place</h4>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />unde commodi sapiente quam magnam ipsum </p>
      </div>
    </div>
  </div>
</section>

<section className='mt-20 sm:mt-5'>
  <div className='flex flex-col sm:flex-row justify-center'>

   
    <div className='flex flex-row mb-6 sm:mb-0'>
      <div className='item-center'>
        <EmailIcon sx={{ fontSize: 90 }} color="disabled" className='border-3 border-gray-400 p-2 rounded-full' />
      </div>
      <div className='mr-10 ml-4'>
        <h4 className='text-gray-600'>Contact by email</h4>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> unde commodi sapiente quam magnam ipsum  </p>
      </div>
    </div>

    
    <div className='flex flex-row'>
      <div>
        <PhoneForwardedIcon sx={{ fontSize: 90 }} color="disabled" className='border-3 border-gray-400 p-2 rounded-full' />
      </div>
      <div className='ml-4'>
        <h4 className='text-gray-600'>Feel free to reach</h4>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />unde commodi sapiente quam magnam ipsum </p>
      </div>
    </div>
  </div>
</section>


      <section className='text-center mt-16'>
        <h3 className='text-4xl'>Feel free to reach us</h3>
        <div className='flex  justify-center mt-10'>
        <form action="" className='flex flex-col bg-gray-200 justify-center w-4/6 border border-gray-600 rounded-md text-center'>
          <input className=' px-3 py-2 border rounded-md border-gray-400 m-5 p-2' type="email" placeholder='Email' />
          <input className=' px-3 py-2 border rounded-md border-gray-400 m-5 mt-0 p-2' type="password" placeholder='Password' />
          <textarea className=' px-3 py-2 border rounded-md border-gray-400 m-5 mt-0 p-2' name="text" id="text" placeholder='Feedback' cols="30" rows="5"></textarea>
          <div className='flex items-center justify-center mb-8'>
          <Button className='w-30' variant="contained"
              style={{
                background: 'blue',
              }}>
              Submit
            </Button>
            </div>
        </form>
        </div>
      </section>

      <section className='mt-20'>
  <div className='flex flex-col sm:flex-row items-center justify-center'>

    
    <div className='mb-6 sm:mb-0'>
      <Avatar
        alt="Remy Sharp"
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
        sx={{
          width: 130,
          height: 130,
        }}
      />
    </div>

    
    <div className='ml-5'>
      <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas earum laboriosam <br/> eius facilis nisi, unde inventore mollitia quaerat dolorum cum ea, vero modi <br/>Deserunt eum dolores sit tempore."</p>
      <h3>- David Benwal (Director) </h3>
    </div>
  </div>
</section>



<footer className='h-40 sm:h-40 mt-20 bg-black  text-white flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4'>
  
  <p className='text-center sm:text-left'>copyright © 2023 example.com | Terms and Conditions | Privacy Policy | All rights reserved</p>
</footer>


      
      </>

        );
};

        export default Home;
