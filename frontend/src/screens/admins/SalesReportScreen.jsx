import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetOrdersQuery } from '../../slices/orderApiSlice';
import Meta from '../../components/Meta'; 

const SalesReportScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    if (orders) {
      // Group orders by day and calculate total sales for each day
      const salesByDay = orders.reduce((result, order) => {
        const date = order.createdAt.substring(0, 10);

        if (!result[date]) {
          result[date] = 0;
        }

        result[date] += order.totalPrice;

        return result;
      }, {});

      // Convert the grouped data into an array of objects
      const salesArray = Object.keys(salesByDay).map((date) => ({
        date,
        totalSales: salesByDay[date],
      }));

      setSalesData(salesArray);
    }
  }, [orders]);

  return (
    <>
    <Meta title="Sales Report - Motee & Son's" />
      <h1>Sales Report</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Total Sales</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>${item.totalSales.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default SalesReportScreen;
