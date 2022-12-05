import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

// useSelector is a Redux Hook coming from the bindings library
// that can grant to this component "read access" to the Redux Store

const CartIndicator = () => {
  const navigate = useNavigate()

  const cartLength = useSelector((store) => store.cart.content.length)
  // now cartLength is always going to be a digit: the length of the
  // content array sitting in the cart slice of the Store
  const username = useSelector((state) => state.user.name)

  return (
    <div className="ml-auto mt-3 mb-4">
      {username ? (
        <Button color="primary" onClick={() => navigate('/cart')}>
          <FaShoppingCart />
          <span className="ml-2">{cartLength}</span>
        </Button>
      ) : (
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Login here!" />
          </Form.Group>
        </Form>
      )}
    </div>
  )
}

export default CartIndicator
