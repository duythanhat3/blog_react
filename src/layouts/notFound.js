import React from 'react';

class NotFound extends React.Component {
    render() {
        return (
            <div class="content-i">
                <div class="content-box">
                    <div class="big-error-w">
                        <h1>
                            404
                        </h1>
                        <h5>
                            Page not Found
                        </h5>
                        <h4>
                            Oops, Something went missing...
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;