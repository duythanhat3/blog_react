import React from 'react';
import {router} from '../systems/routing'
import {translate, Trans} from 'react-i18next';
import lang from '../systems/i18n/Localization';
import i18n from '../systems/i18n';
class Error extends React.Component {

    backHome(){
        router.redirect("/");
    }

    render() {
        const {t} = this.props;
        return (
            <div class="content-i">
                <div class="content-box">
                    <div class="big-error-w">
                        <h5>
                            {this.props.error.code}
                        </h5>
                        <h4>
                            {this.props.error.message}
                        </h4>
                        <hr/>
                        <a href="javascript:;" onClick={this.backHome}>{t('message.go_home')}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default translate('translations')(Error);