import React from 'react';

const UserInfo = ({ipaddress, language, software}) => (
    <div className="wrap">
        <h1>Request Header Parser Micro Service</h1>
        <div className="row">
            <div className="col-sm">
                <p>IP Address</p>
            </div>
            <div className="col-big">
                <p>{ipaddress}</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                <p>Language</p>
            </div>
            <div className="col-big">
                <p>{language}</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                <p>Operating System</p>
            </div>
            <div className="col-big">
                <p>{software}</p>
            </div>
        </div>
    </div>
);

export default UserInfo;