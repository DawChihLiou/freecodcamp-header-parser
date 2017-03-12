import React from 'react';

const User = ({ipaddress, language, software, isFetching, onClick}) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                <h1>Request Header Parser Micro Service</h1>
                <div className="row">
                    <div className="col-xs-12">
                        <p>IP Address</p>
                    </div>
                    <div className="col-xs-12">
                        {
                            isFetching ? 
                            <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span> :
                            <p>{ipaddress}</p>
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>Language</p>
                    </div>
                    <div className="col-xs-12">
                        {
                            isFetching ? 
                            <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span> :
                            <p>{language}</p>
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>Operating System</p>
                    </div>
                    <div className="col-xs-12">
                        {
                            isFetching ? 
                            <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span> :
                            <p>{software}</p>
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button className="btn btn-default btn-lg" onClick={e => {
                            e.preventDefault();
                            onClick();
                        }}>Get User Info!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default User;