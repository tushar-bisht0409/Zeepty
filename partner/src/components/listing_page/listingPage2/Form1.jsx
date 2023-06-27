import React from 'react'

const Form1 = () => {
  return (
    <>
        Product Details
        <form action="" id='form1'>
            <div className='formItems'>
                <label htmlFor="skuID">Seller SKU ID</label>
                <input type="text" />
                <small>Unique identifier for the Product</small>
            </div>
            <div className='formItems'>
                <label htmlFor="styleCode">Style Code</label>
                <input type="text" />
                <small>Style Code remains same for all sizes of varients of this products</small>
            </div>
            <div className='formItems'>
                <label htmlFor="proTitle">Product Title</label>
                <input type="text" />
                <small>Name of the Product</small>
            </div>
        </form>
    </>
  )
}

export default Form1