import React from 'react';
// import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import useFetch from '../../hooks/useFetch';

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      id
      title
      rating
      body
      categories {
        id
        name
      }
    }
  }
`;

export default function ReviewDetails() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  //   const id = 2;
  //Getting data from rest api
  const { loading, error, data } = useFetch(
    `http://localhost:1337/reviews/${id}`
  );

  //Getting data from graphql
  // const { loading, error, data } = useQuery(REVIEW, {
  //   variables: { id: id },
  // });

  if (loading) return <p>loading</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <>
      {/** For graphql */}
      {/* <div className='review-card'>
        <div className='rating'>{data?.review?.rating} </div>
        <h2>{data?.review?.title}</h2>

        {data?.review?.categories.map((c) => (
          <small key={c.id}>{c.name}</small>
        ))}

        <ReactMarkdown>{data?.review?.body}</ReactMarkdown>
      </div> */}
      <div className='review-card'>
        <div className='rating'>{data?.rating} </div>
        <h2>{data?.title}</h2>

        {data?.categories.map((c) => (
          <small key={c.id}>{c.name}</small>
        ))}

        <ReactMarkdown>{data?.body}</ReactMarkdown>
      </div>
    </>
  );
}
