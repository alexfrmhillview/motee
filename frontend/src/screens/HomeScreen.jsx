import { Row, Col } from "react-bootstrap";
import { useParams, Link} from "react-router-dom";
import Product from "../components/Product";
import Paginate from "../components/Paginate";
import Message from "../components/Message";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Carousel from "../components/Carousel";
import Meta from "../components/Meta";





const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({ keyword, pageNumber});

  return (
    <>
    <Meta title=" Home - Motee & Son's"/>  
      {!keyword ? (
        <Carousel />
      ) : (
        <Link to='/' className='btn bck-btn mb-4'>
          Go Back
        </Link>
      )}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message varient='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
        
          <h1 className="text-center my-4">Product Catalog </h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}>

          </Paginate>
        </>
      )}
    </>
  );
};
export default HomeScreen;
