import React, { useState } from 'react';
import axios from 'axios';

const EmailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

const Index = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, submit] = useState(false);
  const [error, setError] = useState('');

  if (isSubmitted) {
    return (
      <div>
        <h6>
          Wonderful!
          <br />
          {/* <span>{email}</span> */}
          You have successfully subscribed
        </h6>
        <div>
          You will be the first to know more about our newly launched products
          and special dedicated offers at {email}
        </div>
      </div>
    );
  }

  return (
    <div className='subscribe_now'>
      <form
        className='subscribe_form'
        onSubmit={(e) => {
          // console.log('error', error);

          e.preventDefault();
          if (EmailRegex.test(email.trim())) {
            mockSubmitEmail(email.trim())
              .then((d) => {
                trackSubscribeEvent({ email_id: email });

                if (d.data.message) {
                  submit(false);
                  setError(
                    `Hey! We know you love Pilgrim! But you have already subscribed with ${email} email ID`
                  );
                } else {
                  submit(true);
                }
              })
              .catch((e) => {
                submit(false);
              });
          } else {
            setError('Please enter a valid email ID');
          }
        }}
        onChange={(e) => {
          e.preventDefault();
          setError('');
        }}
      >
        <div className='input-group'>
          <input
            className='form-control'
            name='email'
            placeholder='Enter your email'
            type='email'
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            required
          />
          <span className='input-group-btn'>
            <button className='btn btn-default' type='submit'>
              subscribe
            </button>
          </span>
        </div>
        {error ? <div className='subscribe-error'>{error}</div> : ''}
      </form>
    </div>
  );
};

export const mockSubmitEmail = (email) =>
  new Promise((resolve, reject) => {
    let body = {
      email_address: email,
      status: 'subscribed',
    };
    axios
      .post('/api/mailchimp', body)
      .then((d) => resolve(d))
      .catch((e) => reject(e));
  });

export default Index;
