import home from './pages/home'
import about from './pages/about'
import article from './pages/article'
import archive from './pages/archive'
import apply from './pages/apply'
import type from './pages/type'
import tag from './pages/tag'
import edit from './pages/edit'
import login from './pages/admin/login'
import index from './pages/admin/index'
import a1 from './pages/admin/a1'
import a2 from './pages/admin/a2'
import a3 from './pages/admin/a3'
import a4 from './pages/admin/a4'
import test from './pages/test'



const routes = [
{
	path:'/',
    component:home
},
{
	path:'/home',
	name:'home',
    component:home
},
{
    path:'/about',
    name:'about',
    component:about
},
{
    path:'/archive',
    name:'archive',
    component:archive
},
{
    path:'/tag',
    name:'tag',
    component:tag
},
{
    path:'/type/',
    name:'type',
    component:type
},
{
    path:'/article',
    name:'article',
    component:article
},
{
    path:'/apply',
    name:'apply',
    component:apply
},
{
    path:'/test',
    name:'test',
    component:test
},
{
    path:'*',
    redirect:'/'
},
{
    path:'/login',
    name:'登录',
    component:login
},
{
    path:'/admin',
    name:'后台管理',
    component:index,
    redirect:'/a1',
    children:[
        {
            path:'/a1',
            component:a1
        },
        {
            path:'/a2',
            component:a2
        },
        {
            path:'/a3',
            component:a3
        },
        {
            path:'/a4',
            component:a4
        },
        {
            path:'/edit',
            component:edit
        }
    ]
}

]
export default routes;
