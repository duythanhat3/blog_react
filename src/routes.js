import NotFound from './layouts/notFound';
import DefaultLayout from './layouts/default';
import defaultDashboard from './layouts/defaultDashboard';
import Home from './modules/home/homeContainer'
import {router} from './systems/routing';
import i18n from './systems/i18n';

export default {
    routes: [
        {
            path: '/',
            exact: true,
            component: Home,
            layout: defaultDashboard,
        },
    ],
    defaultRoute: {
        component: NotFound,
        layout: DefaultLayout,
    },
    middleware: [
        (payload, next) => {
            // Cách lấy ra 1 URL trong project url.to('login',{id:1})
            let search = router.history.location.search;
            if (search.includes("lang=en")) {
                i18n.changeLanguage('en');
            }

            if (search.includes("lang=vi")) {
                i18n.changeLanguage('vi');
            }

            return next(payload);
        }
    ],
};