import React from 'react';
import '../../sass/user.sass';
import Header from './Header';
import Footer from './Footer';

const User = ({ipaddress, language, software, isFetching, onClick}) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                <Header />
                
                <div className="container-fluid">
                    <div className="row row-data">
                        <div className="col-xs-12 col-sm-4">
                            <p><strong>IP Address</strong></p>
                        </div>
                        <div className="col-xs-12 col-sm-8">
                            {
                                isFetching ? 
                                <span className="glyphicon glyphicon-refresh spin" aria-hidden="true"></span> :
                                <p>{ipaddress}</p>
                            }
                        </div>
                    </div>
                    <div className="row row-data">
                        <div className="col-xs-12 col-sm-4">
                            <p><strong>Language</strong></p>
                        </div>
                        <div className="col-xs-12 col-sm-8">
                            {
                                isFetching ? 
                                <span className="glyphicon glyphicon-refresh spin" aria-hidden="true"></span> :
                                <p>{language}</p>
                            }
                        </div>
                    </div>
                    <div className="row row-data">
                        <div className="col-xs-12 col-sm-4">
                            <p><strong>Operating System</strong></p>
                        </div>
                        <div className="col-xs-12 col-sm-8">
                            {
                                isFetching ? 
                                <span className="glyphicon glyphicon-refresh spin" aria-hidden="true"></span> :
                                <p>{software}</p>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <button className="btn btn-default btn-lg" onClick={e => {
                                e.preventDefault();
                                onClick();
                            }}>Get User Info!</button>
                        </div>
                    </div>
                </div>
                
                <Footer />
            </div>
        </div>
    </div>
);

export default User;