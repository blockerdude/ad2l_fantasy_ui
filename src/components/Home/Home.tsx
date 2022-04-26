import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

import './Home.css';

interface HomeProps {
  user: string
}

const Home: FC<HomeProps> = ({ user }) => (

  <div>
    {
      user ? (
        <div className="Home" data-testid="Home">
          Home Component {JSON.stringify(user)}
        </div>
      ) : (

        <Navigate to="/" replace />
      )
    }

  </div>



);

// (
//   if (!user) {
//     return  <Navigate to="/" replace />
//   } else {  
//   <div>


//     <div className="Home" data-testid="Home">
//       Home Component
//     </div>
//   </div>
//   }
// );



export default Home;
