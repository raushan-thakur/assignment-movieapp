import React from 'react'
import {Helmet} from "react-helmet";
import Header from '../components/Header';
const Layout = ({children,title, description, keywords, author }) => {
  return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
        </Helmet>
        <Header/>
        <main style = {{minHeight:"70vh"}}>
        {children}
        </main>
    </div>
  )
}
Layout.defaultProps = {
  title: "Movie-Assignment",
  description: "MERN stack project",
  keywords: "MERN,reactjs,node,mongodb",
  author: "Raushan Thakur",
};
export default Layout