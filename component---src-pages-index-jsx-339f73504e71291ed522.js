webpackJsonp([0xc23565d713b7],{43:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),s=a(u),c=n(16),i=a(c),f=n(75),p=a(f);n(52);var d=n(14),m=(a(d),function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,n=e.date,a=e.category,r=e.description,o=this.props.data.node.fields,l=o.slug,u=o.categorySlug;return s.default.createElement("div",{className:"post"},s.default.createElement("h2",{className:"post__title"},s.default.createElement(i.default,{className:"post__title-link",to:l},t)),s.default.createElement("time",{className:"post__meta-time",dateTime:(0,p.default)(n).format("MMMM D, YYYY")},(0,p.default)(n).format("D MMM YYYY")),s.default.createElement("p",{className:"post__description"},r),s.default.createElement("span",{className:"post__meta-category",key:u},s.default.createElement(i.default,{to:u,className:"post__meta-category-link"},a)),s.default.createElement("br",null),s.default.createElement(i.default,{className:"post__readmore",to:l},"Read More..."))},t}(s.default.Component));t.default=m,e.exports=t.default},52:function(e,t){},232:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(1),s=a(u),c=n(23),i=a(c),f=n(43),p=a(f),d=n(14),m=a(d),y=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=[],t=this.props.data.site.siteMetadata,n=t.title,a=t.subtitle,r=this.props.data.allMarkdownRemark.edges;return r.forEach(function(t){e.push(s.default.createElement(p.default,{data:t,key:t.node.fields.slug}))}),s.default.createElement("div",null,s.default.createElement(i.default,null,s.default.createElement("title",null,n),s.default.createElement("meta",{name:"description",content:a})),s.default.createElement(m.default,this.props),s.default.createElement("div",{className:"content"},s.default.createElement("div",{className:"content__inner"},e)))},t}(s.default.Component);t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-339f73504e71291ed522.js.map