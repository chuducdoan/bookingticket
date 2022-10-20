import Home from './../pages/Home/index';

const publicRoutes = [
    { path: '/home', component: Home },
];

// Những router cần đăng nhập mới vào được
const privateRoutes = [

];

export { publicRoutes, privateRoutes };