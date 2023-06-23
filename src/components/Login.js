import React from 'react';
import {GoogleOutlined,FacebookOutlined} from '@ant-design/icons'
import "firebase/app"

import { auth } from '../firebase';
import firebase from 'firebase/app';


const Login = () =>
{
    return (
<div id="login-page">
<div className='Head'>Ymechat!</div>
<div id='login-card'>

<h2>Welcome to Ymechat!</h2>

<div className='login-button google'

onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
<GoogleOutlined/> Sign In With Google
</div>
<br/>
<br/>
<div className='login-button facebook'>
<FacebookOutlined/> Sign In With facebook
</div>

</div>
</div>
    );
} 

export default Login