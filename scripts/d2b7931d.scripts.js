"use strict";angular.module("navigationPrototypeApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/dashboard.html",controller:"MainCtrl"}).when("/support",{templateUrl:"views/support.html",controller:"MainCtrl"}).when("/support/insights",{templateUrl:"views/support_insights.html",controller:"MainCtrl"}).when("/support/tickets",{templateUrl:"views/support_tickets.html",controller:"MainCtrl"}).when("/feedback",{templateUrl:"views/feedback.html",controller:"MainCtrl"}).when("/feedback/moderation",{templateUrl:"views/feedback_moderation.html",controller:"MainCtrl"}).when("/feedback/insights",{templateUrl:"views/feedback_insights.html",controller:"MainCtrl"}).when("/feedback/ideas",{templateUrl:"views/feedback_ideas.html",controller:"MainCtrl"}).when("/users",{templateUrl:"views/users.html",controller:"MainCtrl"}).when("/users/insights",{templateUrl:"views/users_insights.html",controller:"MainCtrl"}).when("/answers",{templateUrl:"views/answers.html",controller:"MainCtrl"}).when("/answers/insights",{templateUrl:"views/answers_insigths.html",controller:"MainCtrl"}).when("/answers/articles",{templateUrl:"views/articles.html",controller:"MainCtrl"}).when("/settings",{templateUrl:"views/settings.html",controller:"MainCtrl"}).when("/portal",{templateUrl:"views/portal.html",controller:"MainCtrl"}).when("/widget",{templateUrl:"views/widget.html",controller:"MainCtrl"}).when("/integrations",{templateUrl:"views/integrations.html",controller:"MainCtrl"}).when("/integrations/ios",{templateUrl:"views/ios.html",controller:"MainCtrl"}).when("/integrations/android",{templateUrl:"views/android.html",controller:"MainCtrl"}).when("/you",{templateUrl:"views/profile.html",controller:"MainCtrl"}).when("/you/notifications",{templateUrl:"views/notifications.html",controller:"MainCtrl"}).when("/billing",{templateUrl:"views/billing.html",controller:"MainCtrl"}).otherwise({redirectTo:"/home"})}]);var snapper=new Snap({element:document.getElementById("content")});document.getElementById("menu-toggle").addEventListener("click",function(){"left"===snapper.state().state?snapper.close():snapper.open("left")}),document.getElementById("pin-toggle").addEventListener("click",function(){"right"===snapper.state().state?snapper.close():snapper.open("right")}),angular.module("navigationPrototypeApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("navigationPrototypeApp").controller("navigationCtrl",["$scope","$location",function(a,b){a.$on("$routeChangeSuccess",function(){snapper.close(),d()}),a.menuLinkLabel="Menu";var c=function(a){return b.path().substr(0,a.length)===a?!0:!1};a.isActive=function(a){return b.path()===a?"active":void 0};var d=function(){c("/users")?(a.menuLinkLabel="Users",a.subNavigation=[{label:"User Satisfaction ",path:"/users"},{label:"Insights",path:"/users/insights"}]):c("/feedback")?(a.menuLinkLabel="Feedback",a.subNavigation=[{label:"Overview",path:"/feedback"},{label:"Insights",path:"/feedback/insights"},{label:"Moderation",path:"/feedback/moderation"},{label:"Ideas",path:"/feedback/ideas"}]):c("/support")?(a.menuLinkLabel="Support",a.subNavigation=[{label:"Overview",path:"/support"},{label:"Insights",path:"/support/insights"},{label:"Tickets",path:"/support/tickets"}]):c("/answers")?(a.menuLinkLabel="Instant Answers",a.subNavigation=[{label:"Overview",path:"/answers"},{label:"Insights",path:"/answers/insights"},{label:"Articles",path:"/answers/articles"}]):c("/settings")?(a.menuLinkLabel="Settings",a.subNavigation=!1):c("/widget")?(a.menuLinkLabel="Omni Widget",a.subNavigation=!1):c("/integrations")?(a.menuLinkLabel="Mobile & Integrations",a.subNavigation=[{label:"Integrations",path:"/integrations"},{label:"iOS SDK",path:"/integrations/ios"},{label:"Android SDK",path:"/integrations/android"}]):c("/you")?(a.menuLinkLabel="Your Profile and Notifications",a.subNavigation=[{label:"Profile",path:"/you"},{label:"Email Notifications",path:"/you/notifications"}]):c("/billing")?(a.menuLinkLabel="Usage & Billing",a.subNavigation=!1):(a.menuLinkLabel="Menu",a.subNavigation=!1)};a.switchLocation=function(a){b.path(a)}}]),angular.module("navigationPrototypeApp").controller("pinCtrl",["$scope","$location",function(a,b){a.recentItems=[],a.pins=[],a.$on("$routeChangeSuccess",function(){a.recentItems.splice(0,0,b.path()),a.recentItems.length>8&&a.recentItems.splice(a.recentItems.length-1,1)}),a.addPin=function(c){c?a.pins.splice(0,0,c):a.pins.splice(0,0,b.path())},a.removePin=function(b){a.pins.splice(b,1)},a.switchLocation=function(a){b.path(a)}}]);