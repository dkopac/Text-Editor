import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => 
{
  console.log('PUT to the database');
  // Create connection to the database
  const jateDb = await openDB('jate', 1);
  // Create a transaction on the database
  const tx = jateDb.transaction('jate', 'readwrite');
  // Create a reference to the object store
  const store = tx.objectStore('jate');
  // Use .put() to add the content to the database
  const request = store.put({ id: 1, value: content });
  //Confirm the request was successful
  const result = await request;
  console.log('Data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => 
{
  console.log('GET from the database');
  // Create connection to the database
  const jateDb = await openDB('jate', 1);
  // Create a transaction on the database
  const tx = jateDb.transaction('jate', 'readonly');
  // Create a reference to the object store
  const store = tx.objectStore('jate');
  // Use .get() to retrieve the content from the database
  const request = store.get(1);
  //Confirm the request was successful
  const result = await request;
  console.log('Data retrieved from the database', result);
  return result?.value;
};

initdb();
