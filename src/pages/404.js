import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesnt exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
