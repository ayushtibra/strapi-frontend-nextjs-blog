import React from 'react';
// import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import useFetch from '../../hooks/useFetch';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Loader from 'react-loader-spinner';

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      id
      name
      reviews {
        title
        body
        rating
        id
        categories {
          name
          id
        }
      }
    }
  }
`;

export default function Category() {
  const router = useRouter();
  const { id } = router.query;

  // Getting data from rest api
  // const { loading, error, data } = useFetch(
  //   `http://localhost:1337/categories/${id}`
  // );

  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/categories/${id}`
  );

  //Getting data from graphql
  // const { loading, error, data } = useQuery(CATEGORY, {
  //   variables: { id: id },
  // });

  if (loading)
    return (
      <div className='spinner-poistion'>
        <Loader
          type='Oval'
          color='#8e2ad6'
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  if (error) return <p>Error :(</p>;

  return (
    // For graphql
    // <div>
    //   <h2>{data?.category?.name}</h2>
    //   {data?.category?.reviews?.map((review) => (
    //     <div key={review.id} className='review-card'>
    //       <div className='rating'>{review.rating} </div>
    //       <h2>{review.title}</h2>

    //       {review?.categories.map((c) => (
    //         <small key={c.id}>{c.name}</small>
    //       ))}

    //       <p>{review.body.substring(0, 200)}...</p>

    //       <Link to={`/details/${review.id}`}>Read more</Link>
    //     </div>
    //   ))}
    // </div>
    <>
      <h2 className='category-heading'>{data?.name}</h2>
      <div className='row'>
        {data?.reviews?.map((review) => (
          <div key={review.id} className='review-card'>
            {/* Show with stars - do it later */}
            {/* <div className='rating'>{review?.rating} </div> */}
            <h2>{review?.title}</h2>

            {data?.review?.map((c) => (
              <small key={c.id}>{c.name}</small>
            ))}

            <p>{review?.body.substring(0, 200)}...</p>

            <Link href={`/reviews/${review?.id}`}>Read more</Link>
          </div>
        ))}
      </div>
    </>
  );
}
