import PropTypes from 'prop-types';

const SingleProduct = ({product,handleCard}) => {
    // console.log(handleCard)
    const {price,image, title,description}= product;
    return (
        <div className="mb-6 shadow-xl p-7 bg-gray-50">
            <img className="w-28 mx-auto" src={image} alt="" />
          <h2 className="lg:text-4xl text-2xl">{title.slice(0,10)}</h2>
          <p className="mt-4 mb-4">{description}</p>
          <div className="flex justify-around">
          <h3 className="text-2xl lg:text-4xl font-bold"><span>{price}</span>$</h3>
          <button onClick={()=>handleCard(product)} className="border-2 hover:bg-slate-500 p-3 bg-gray-500 rounded-lg text-xl">Add to Cart</button>
          </div>
        </div>
    );
};

SingleProduct.propTypes ={
    product: PropTypes.object.isRequired,
    handleCard: PropTypes.func.isRequired,
}
export default SingleProduct;