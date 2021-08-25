(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(35)},26:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(19),c=a.n(r),s=a(9),l=a(10),i=a(2),u=a(3),h=a(5),b=a(4),f=a(6),p=(a(26),function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads"))}}]),t}(o.a.Component)),m=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.book;return o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(t.imageLinks?t.imageLinks.thumbnail:"../img/no_cover_thumb.gif",")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:this.props.book.shelf,onChange:function(t){return e.props.Moveto(e.props.book,t.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},this.props.book.title),o.a.createElement("div",{className:"book-authors"},this.props.book.authors))}}]),t}(o.a.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.books;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},this.props.title),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(m,{book:t,bookTitle:t.title,bookAuthor:t.authors,bookshelf:t.shelf,Moveto:e.props.onShelfChange}))}))))}}]),t}(o.a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.Books;console.log(e);var t=e.filter(function(e){return"currentlyReading"===e.shelf}),a=e.filter(function(e){return"wantToRead"===e.shelf}),n=e.filter(function(e){return"read"===e.shelf});return o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement(d,{books:t,title:"Currently Reading",onShelfChange:this.props.shelfChanger}),o.a.createElement(d,{books:a,title:"Want to Read",onShelfChange:this.props.shelfChanger}),o.a.createElement(d,{books:n,title:"Read",onShelfChange:this.props.shelfChanger})))}}]),t}(o.a.Component),v=a(15),E="https://reactnd-books-api.udacity.com",y=localStorage.token;y||(y=localStorage.token=Math.random().toString(36).substr(-8));var j={Accept:"application/json",Authorization:y},O=function(){return fetch("".concat(E,"/books"),{headers:j}).then(function(e){return e.json()}).then(function(e){return e.books})},g=function(e,t){return fetch("".concat(E,"/books/").concat(e.id),{method:"PUT",headers:Object(v.a)({},j,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],booksOnDisplay:[],query:""},a.onShelfUpdate=function(e,t){g(e,t);var n=a.state.books,o=n.findIndex(function(t){return t.id===e.id}),r=n[o];r.shelf=t,a.setState({books:Object(l.a)(n.slice(0,o)).concat([r],Object(l.a)(n.slice(o+1)))})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;O().then(function(t){e.setState({booksOnDisplay:t.filter(function(e){return"none"!==e.shelf})})})}},{key:"updateQuery",value:function(e){this.setState({query:e})}},{key:"searchBooks",value:function(e){var t=this,a=this.state.booksOnDisplay;this.updateQuery(e),e?function(e){return fetch("".concat(E,"/search"),{method:"POST",headers:Object(v.a)({},j,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})}(e).then(function(e){if(e&&e.length>0){var n=e;n.map(function(e){return e.shelf="none"}),a.map(function(e){var t=n.findIndex(function(t){return t.id===e.id});n[t]&&(n[t].shelf=e.shelf)}),t.setState({books:n})}else t.setState({books:[]})}):this.setState({books:[]})}},{key:"render",value:function(){var e=this,t=this.state,a=t.books,n=t.query;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(s.b,{to:"/"},o.a.createElement("button",{className:"close-search"},"Close")),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:function(t){return e.searchBooks(t.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},a.length>0?a.map(function(t,a){return o.a.createElement(m,{key:a,book:t,Moveto:e.onShelfUpdate})}):0===n.length?o.a.createElement("h2",{style:{color:"#fff"}},"Search Some Books"):o.a.createElement("p",null," Result Not Found"))))}}]),t}(o.a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"open-search"},o.a.createElement(s.b,{to:"/search"},o.a.createElement("button",null,"Add a book"))))}}]),t}(n.Component),C=a(0),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={showSearchPage:!1,books:[]},a.updateSearchPage=function(e){a.setState({showSearchPage:e})},a.onShelfUpdate=function(e,t){var n=a.state.books,o=n.findIndex(function(t){return t.id===e.id}),r=n[o];r.shelf=t,a.setState({books:Object(l.a)(n.slice(0,o)).concat([r],Object(l.a)(n.slice(o+1)))}),g(e,t)},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;O().then(function(t){return e.setState({books:t})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(C.a,{exact:!0,path:"/search",render:function(){return o.a.createElement(S,{showSearchPage:e.updateSearchPage})}}),o.a.createElement(C.a,{exact:!0,path:"/",render:function(){return o.a.createElement(k,{Books:e.state.books,shelfChanger:e.onShelfUpdate})}}),o.a.createElement(N,{showSearchPage:this.updateSearchPage}))}}]),t}(o.a.Component);a(33);c.a.render(o.a.createElement(s.a,null,o.a.createElement(w,null)),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.f15b7e27.chunk.js.map