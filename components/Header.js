import React from 'react';
import Link from 'next/link';
// import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import useFetch from '../hooks/useFetch';

const CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      id
    }
  }
`;

export default function SiteHeader() {
  // Getting data from rest api
  const { loading, error, data } = useFetch(`http://localhost:1337/categories`);

  //Getting data from graphql
  // const { loading, error, data } = useQuery(CATEGORIES);

  if (loading) return <p>loading</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
  return (
    <div className='site-header'>
      <Link href='/'>
        <h1>Ninja Reviews</h1>
      </Link>
      {/* for graphql */}
      {/* <nav className='categories'>
        <span>Filter review by categories</span>
        {data?.categories.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            {category.name}
          </Link>
        ))}
      </nav> */}
      <nav className='categories'>
        <span>Filter review by categories</span>
        {data?.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
