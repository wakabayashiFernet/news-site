import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title={data.microcmsNews.title} />
    <span>{data.microcmsNews.writer.writer}</span>
    <h1>{data.microcmsNews.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsNews.body}`,
      }}
    />
  </Layout>
)

export default BlogPage

export const query = graphql`
  query($id: String!) {
    microcmsNews(id: { eq: $id }) {
      newsId
      title
      body
      writer {
        writer
      }
    }
  }
`