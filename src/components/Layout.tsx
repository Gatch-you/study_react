import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import Nav from './Nav'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const Layout = (props: any) => {

    const [redirect, setRedirect] = useState(false);

    useEffect( () => {
        (
            async () => {
                try {
                const {data} = await axios.get('api/admin/user');

                console.log(data)
                } catch (e) {
                    setRedirect(true)
                }
            }
        )()
    }, []);

    if (redirect) {
        return <Navigate to='login'/>
    }

    return (
        <div>
            <Nav/>
            <div className="container-fluid">
                <div className="row">
                    <Menu/>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="table-responsive small">
                            {props.childlen}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;
