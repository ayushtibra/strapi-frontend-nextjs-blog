import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NewSubscribe from './NewSubscribe';

export default function SiteFooter() {
  const router = useRouter();
  const flag = router.asPath == '/';
  return (
    <>
      {flag && (
        <div className='image-container'>
          <img className='img-fluid ' src='/banner6.png' alt='Coming soon' />
          <div className='centered'>
            <p>Stay Tuned...</p>
            <p>Something exciting is coming !!</p>
          </div>
        </div>
      )}
      <div className='site-footer'>
        <div className='site-foot-nav inner'>
          <div className='site-foot-nav-left'>
            <Link href='/'>
              <a className='logo-footer'>
                {' '}
                <Image src='/trending.png' width={45} height={45} />
                {/* <span>TRENDSHOTS</span> */}
              </a>
            </Link>
            <Link href='/'>
              <span>TRENDSHOTS</span>
            </Link>
            {/* <div className='footer-customer-care'>
            <p>Customer Care</p>
            <span className='pb-2'>Mon to Sat - 9:00am to 7:00pm IST</span>
            <p>Email: trendshots@gmail.com</p>
          </div> */}
          </div>
          <div className='site-foot-nav-left'>
            {/* <div>
            <a className=''>
              <span>TRENDSHOTS</span>
            </a>
          </div> */}
            <div className='footer-customer-care' style={{ marginTop: '0px' }}>
              <Link href='/'>
                <p>About Us</p>
              </Link>
              <Link href='/'>
                <p className='pb-2'>Careers</p>
              </Link>
              <Link href='/'>
                <p>FAQ</p>
              </Link>
              <Link href='/'>
                <p>Terms & Conditions</p>
              </Link>
            </div>
          </div>
          <div className='site-foot-nav-left'>
            {/* <div>
            <a className=''>
              <span>Customer Care</span>
            </a>
          </div> */}
            <div className='footer-customer-care' style={{ marginTop: '0px' }}>
              <Link href='/'>
                <p style={{ fontWeight: '700' }}>Get In Touch</p>
              </Link>
              <Link href='/'>
                <p className='pb-2'>Mon to Sat - 9:00am to 7:00pm IST</p>
              </Link>
              <Link href='/'>
                <p>Mobile: 9190123456</p>
              </Link>
              <Link href='/'>
                <p>Email: trendshots@gmail.com</p>
              </Link>
            </div>
          </div>
          <div className='site-foot-nav-right'>
            <div className='follow-text'>
              <a
                rel='noreferrer noopener'
                target='_blank'
                className='social-icons'
                href='https://www.facebook.com/pilgrim.discover'
              >
                <Image
                  className='sprite facebook-icon'
                  // src='/icons/footer/facebook.png'
                  src='/facebook.png'
                  alt=''
                  width={15}
                  height={15}
                />
              </a>
              <a
                rel='noreferrer noopener'
                target='_blank'
                className='social-icons'
                href='https://www.instagram.com/discover.pilgrim'
              >
                <Image
                  className='sprite instagram-icon'
                  // src='/icons/footer/instagram.png'
                  src='/instagram.png'
                  alt=''
                  width={15}
                  height={15}
                />
              </a>
              <a
                rel='noreferrer noopener'
                target='_blank'
                className='social-icons'
                href='https://www.instagram.com/discover.pilgrim'
              >
                <Image
                  className='sprite instagram-icon'
                  // src='/icons/footer/instagram.png'
                  src='/twitter.png'
                  alt=''
                  width={15}
                  height={15}
                />
              </a>
              <a
                rel='noreferrer noopener'
                target='_blank'
                className='social-icons'
                href='https://www.instagram.com/discover.pilgrim'
              >
                <Image
                  className='sprite instagram-icon'
                  // src='/icons/footer/instagram.png'
                  src='/linkedin.png'
                  alt=''
                  width={15}
                  height={15}
                />
              </a>
            </div>
            <hr
              style={{
                backgroundColor: '#F4E7D9',
                height: '1px',
                border: 'none',
                margin: '20px auto',
              }}
            />

            <NewSubscribe />
          </div>
        </div>
        <hr
          style={{
            backgroundColor: '#F4E7D9',
            height: '1px',
            border: 'none',
            margin: '40px 0px 20px 0px',
          }}
        />
        <div className='footer-text-inner inner'>
          <span>© 2021 Trendshots All rights reserved</span>
          <span>Made with ❤️ in India</span>
        </div>
      </div>
    </>
  );
}
