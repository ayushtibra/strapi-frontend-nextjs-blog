import React from 'react';
// import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import useFetch from '../../hooks/useFetch';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
  console.log(id);

  // Getting data from rest api
  const { loading, error, data } = useFetch(
    `http://localhost:1337/categories/${id}`
  );

  //Getting data from graphql
  // const { loading, error, data } = useQuery(CATEGORY, {
  //   variables: { id: id },
  // });

  if (loading) return <p>loading</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

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
    <div>
      <h2>{data?.name}</h2>
      {data?.reviews?.map((review) => (
        <div key={review.id} className='review-card'>
          <div className='rating'>{review.rating} </div>
          <h2>{review.title}</h2>

          {data?.review?.map((c) => (
            <small key={c.id}>{c.name}</small>
          ))}

          <p>{review.body.substring(0, 200)}...</p>

          <Link href={`/reviews/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
