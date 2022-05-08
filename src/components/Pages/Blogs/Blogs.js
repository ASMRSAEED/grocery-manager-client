import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='questions' style={{ width: "90%", margin: "auto" }}>

            <h2 className="question-1 fw-bold text-start pt-4">
                {" "}
                Question-1. Difference between javascript and nodejs:
            </h2>
            <p className="text-start">
                {" "}
                <span className='answer'>Answer:-</span> <b>Javascript is a programming language that is used for writing scripts on the website where NodeJS is a Javascript runtime environment. Javascript can only be run in the browsers and we can run Javascript outside the browser with the help of NodeJS. It is basically used on the client-side and NodeJS mostly used on the server-side. Javascript is capable enough to add HTML and play with the DOM and Nodejs does not have capability to add HTML tags. Some of the javascript frameworks are RamdaJS, TypedJS, etc and some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</b>
            </p>

            <h2 className="question-3 fw-bold text-start pt-4">
                Question-2. When should you use nodejs and when should you use mongodb?
            </h2>
            <p className=" text-start ">
                <span className='answer'>Answer:-</span> <b>We should use Nodejs when any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. MongoDB is a database engine which should use MongoDB when any application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database.</b>
            </p>
            <h2 className="question-3 fw-bold text-start pt-4">
                Question-3. Differences between sql and nosql databases.
            </h2>
            <p className=" text-start ">
                <span className='answer'>Answer:-</span> <b>Sql is a relational database management system (RDBMS) and NoSql is a non-relational or distributed database system. Sql databases have fixed or static or predefined schema and NoSql have dynamic schema. Sql databases are not suited for hierarchical data storage on the other hand NoSql databases are best suited for hierarchical data storage. Sql database is Vertically Scalable and NoSql database is Horizontally scalable. Sql database follows ACID property and NoSql follows CAP(consistency, availability, partition tolerance.</b>
            </p>
            <h2 className="question-2 fw-bold text-start pt-4">
                Question-4. What is the purpose of jwt and how does it work.
            </h2>
            <p className=" text-start ">
                <span className='answer'>Answer:-</span> <b>JSON Web Tokens or JWTs are most commonly used to identify an authenticated user. They are issued by an authentication server and are consumed by the client-server to secure its APIs.
                    A JSON web token is JSON Object which is used to securely transfer information over the web between two parties. It can be used for information exchange and can also be used for an authentication system.
                    How it works: Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                    User sign-in using username and password or google/facebook.
                    Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                    User’s Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                    Resource server then verifies the authenticity of the token using the secret salt/ public key.</b>
            </p>


        </div>
    );
};

export default Blogs;