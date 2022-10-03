const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(__dirname, "src/templates/Product.js")
  const result = await graphql(`
    query GET_PRODUCTS {
      allStripePrice {
        edges {
          node {
            id
            unit_amount
            product {
              name
              metadata {
                description
                img
                wear
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw new Error(result.errors)
  }

  result.data.allStripePrice.edges.forEach(({ node }) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      context: node,
    })
  })
}
