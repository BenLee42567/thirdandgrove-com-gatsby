/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { css } from '@emotion/core';

import Input from '../Input';
import Button from '../Button';
import TextArea from '../TextArea';
import { mediaQueries } from '../../styles';

const ContactFrom = () => {
  const [formState, updateForm] = useState({
    comments: '',
    email: '',
    name: '',
    phone: '',
    website: '',
  });
  const updateInput = event => {
    updateForm({ ...formState, [event.target.name]: event.target.value });
  };
  const encode = data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const submitContact = event => {
    event.preventDefault();
    const { name, email } = formState;
    // validate inputs
    if (!name || !email) {
      // notify user of required fields
      console.error('missing required fields');
    }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formState }),
    }).then(() =>
      updateForm({
        comments: 'Thank you for your inquiry.',
        email: '',
        name: '',
        phone: '',
        website: '',
      })
    );
  };
  return (
    <main
      css={css`
        margin: 0 auto;
        margin-top: 2rem;
        width: 980px;
        display: flex;
        flex-direction: column;
        ${mediaQueries.phoneLarge} {
          width: 100vw;
        }
      `}
    >
      <form
        name='contact'
        method='POST'
        data-netlify='true'
        netlify-honeypot='bot-field'
        onSubmit={submitContact}
      >
        <input type='hidden' name='contact' value='contact' />
        <span
          css={css`
            display: grid;
            grid-template-columns: repeat(2, 480px);
            grid-column-gap: 1rem;
            ${mediaQueries.phoneLarge} {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin: 0 3rem;
            }
          `}
        >
          <Input
            required
            value={formState.name}
            onChange={updateInput}
            type='text'
            placeholder='name'
            name='name'
          />
          <Input
            required
            value={formState.email}
            onChange={updateInput}
            type='email'
            placeholder='email'
            name='email'
          />
          <Input
            value={formState.website}
            onChange={updateInput}
            type='url'
            placeholder='website'
            name='website'
          />
          <Input
            value={formState.phone}
            onChange={updateInput}
            type='tel'
            placeholder='phone'
            name='phone'
          />
        </span>
        <span
          css={css`
            ${mediaQueries.phoneLarge} {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin: 0 3rem;
            }
          `}
        >
          <TextArea
            value={formState.comments}
            onChange={updateInput}
            name='comments'
            placeholder='Leave a message'
          />
        </span>
        <span
          css={css`
            display: flex;
            justify-content: center;
            margin-top: 4rem;
          `}
        >
          <Button type='submit'>send</Button>
        </span>
      </form>
    </main>
  );
};

export default ContactFrom;
