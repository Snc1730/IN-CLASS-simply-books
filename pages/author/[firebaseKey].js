/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authDetails, setAuthDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={authDetails.image} alt={authDetails.title} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {authDetails.first_name}
          {authDetails.last_name}
          {authDetails.authorObject?.favorite ? ' 🤍' : ''}
        </h5>
        Author Email: <a href={`mailto:${authDetails.email}`}>{authDetails.email}</a>
        <hr />
      </div>
      <div className="d-flex flex-wrap">
        {authDetails.books?.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={viewAuthorDetails} />
        ))}
      </div>
    </div>
  );
}
