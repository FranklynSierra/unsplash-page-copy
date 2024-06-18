import React, { useEffect, useState } from 'react'

export default function Footer() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {

        setInterval(() => setTime(new Date()), 1000)
    }, []);
    return (
        <div className='footer'>

        <div className='subfooter'>

            <h2 >My Social Medias</h2>
            <lu className='redes'>
                    <li><a className='redesA' href='https://github.com/FranklynSierra'><ion-icon name="logo-github"></ion-icon></a></li>
                    <li><a href='https://www.instagram.com/franklyn_sierra_contreras/'><ion-icon name="logo-instagram"></ion-icon></a></li>
            </lu>

        </div>
            {/* <div className='subfooter'>





                <h3 className='mysocial'>My social Medias</h3>
              




            </div> */}
            <p className='copyright'>CopyRight {time.getFullYear()}</p>
        </div>



    )
}
