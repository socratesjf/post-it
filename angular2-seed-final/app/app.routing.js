"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var posts_component_1 = require("./components/posts/posts.component");
var users_component_1 = require("./components/users/users.component");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: '**', component: home_component_1.HomeComponent }
]);
//# sourceMappingURL=app.routing.js.map