import { useState } from 'react'

let Shoppingcard = () => {
    const [state, setstate] = useState({
        product: {
            sno: "A001",
            image: "https://staticimg.titan.co.in/Titan/Catalog/90102WL02_1.jpg?pView=thumb",
            name: 'titanic',
            price: 1500,
            qty: 2
        }

    });
    let { product } = state;

    let increment = () => {
        setstate((state) => ({
            product: {
                ...state.product,
                qty: state.product.qty + 1
            }
        }))
    }
    let decrement = () => {
        setstate((state) => ({
            product: {
                ...state.product,
                qty: state.product.qty - 1
            }
        }))

    }



    return (
        <div>
            <div className='container mt-auto'>
                <div className="row">
                    <div className="col">
                        <h1 className='display-3 text-center text-info'>product list</h1>
                    </div>
                    <p className='text-secondary display-5'>choose your liked item from the list of items</p>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col'>
                            <p className='text-body'>list-items</p>
                        </div>
                    </div>
                </div>
                <div className='container mt-1'>
                    <div className='row'>
                        <div className='col'>
                            <div className="table table-stripped text-center">

                                <table>
                                    <thead className='bg-dark text-white'>
                                        <tr>
                                            <th>s.no</th>
                                            <th>image</th>
                                            <th>NAME</th>
                                            <th>Price</th>
                                            <th>QTY</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>

                                    <tr>
                                        <td>{product.sno}</td>
                                        <td> <img src={product.image} width={50} height={50} /></td>
                                        <td>{product.name} </td>
                                        <td> {product.price}</td>
                                        <td>
                                            <i onClick={decrement} className='fa fa-minus-square mx-1' />
                                            {product.qty}
                                            <i onClick={increment} className='fa fa-plus-square mx-1' />
                                        </td>
                                        <td>{product.qty*product.price}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Shoppingcard;