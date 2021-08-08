import React from 'react';
import Link from 'next/link';
// import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import useFetch from '../hooks/useFetch';
import Loader from 'react-loader-spinner';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

const CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      id
    }
  }
`;

export default function SiteHeader() {
  const router = useRouter();
  console.log(router);
  // Getting data from rest api
  //   const { loading, error, data } = useFetch(`http://localhost:1337/categories`);
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/categories`
  );

  //Getting data from graphql
  // const { loading, error, data } = useQuery(CATEGORIES);

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
    <div className='site-header'>
      <Link href='/'>
        <a className='logo'>
          {' '}
          <Image src='/trending.png' width={45} height={45} />
          <span>TRENDSHOTS</span>
        </a>
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
      <div className='categories'>
        {/* <span>Filter review by categories</span> */}
        {data?.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            <a className={`active ${router.query.id == category.id}`}>
              {category.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
