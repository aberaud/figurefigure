webpackJsonp([94533468323174],{50:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=u(r),s=a(6),i=u(s),n=a(45);a(80);var f=function(e){var t=e.issue,a=e.isFullPage,u=a?"issue--full-height":"";return l.default.createElement("article",{className:"issue "+u},l.default.createElement("a",{href:(0,n.withPrefix)(t.path),target:"_blank"},l.default.createElement("img",{className:"issue__img",src:(0,n.withPrefix)(t.image_href),alt:"Issue "+t.title+" link"})))};f.propTypes={isFullPage:i.default.bool,issue:i.default.object.isRequired},t.default=f,e.exports=t.default},80:function(e,t){},138:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var r=a(1),l=u(r),s=a(50),i=u(s),n=function(e){var t=e.data.allDataJson.edges[0].node.issues;return l.default.createElement("main",null,l.default.createElement("div",{className:"issue-grid"},t.sort(function(e,t){return t.number-e.number}).map(function(e,t){return l.default.createElement(i.default,{issue:e,key:"archive item "+t})})))};t.default=n;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-archive-js-0f9f9e0dbc51a37c05e2.js.map