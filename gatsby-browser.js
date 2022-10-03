const React = require("react")
const Layout1 = require("./src/components/Layout1").default
const { CartProvider } = require("./src/Context")

exports.wrapRootElement = ({ element }) => (
  <CartProvider>
    <Layout1>{element}</Layout1>
  </CartProvider>
)
