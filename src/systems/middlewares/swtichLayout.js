import Layout from './../../layouts';

/**
 *
 * Đoạn code dưới có nhiệm vụ là lấy động các layout tương ứng với domain đang sử dụng <br />
 * Khi thêm một domain mới (ví dụ: seudo.vn) ta làm các bước như sau:<br />
 * 1. Thêm layout viết dưới dạng seudovnLayout.js, bên trong file cũng export default 1 function có tên tương ứng
 * 2. Thêm vào config .env : REACT_APP_PARTNERS=seudo.vn
 *
 * @param payload
 * @param next
 * @returns {*}
 */
let switchLayoutMiddleware = (payload, next) => {
    let partners = typeof process.env.REACT_APP_PARTNERS !== "undefined" ? (process.env.REACT_APP_PARTNERS).trim().split(",") : [];
    let {response} = payload;
    let fullUrl = window.location.href;
    let arrUrl = fullUrl.split("/");
    localStorage.setItem('domain', process.env.REACT_APP_DEFAULT_CLIENT_DOMAIN);
    for (var key in partners) {
        if (arrUrl[2].includes(partners[key])) {
            let strLayout = partners[key].replace(".", "").toLowerCase();
            for (var keyLayout in Layout) {
                if(Layout[keyLayout].name == strLayout + "Layout") {
                    localStorage.setItem('domain', partners[key]);
                    response.layout = Layout[keyLayout];
                }
            }
        }
    }
    return (next(payload));
}

export default switchLayoutMiddleware;