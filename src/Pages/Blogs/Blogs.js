import React from 'react';

const Blogs = (props) => {
    return (
        <div className='text-center'>
            <h1>Answer to the question No - 1</h1>
            <p>Optimizing application performance is key for developers who are mindful of keeping a user’s experience <br />
                positive to keep them on an app and engaged. Keeping component state local where necessary. Memoizing React <br />
                components to prevent unnecessary re-renders. Code-splitting in React using dynamic import() Windowing or list <br />
                virtualization in React. Lazy loading images in React.</p>
            <h1>Answer to the question No - 2</h1>
            <p> Local (UI) state – Local state is data we manage in one or another component. Local state is most often managed <br />
                in React using the useState hook. Global (UI) state – Global state is data we manage across multiple components. Global <br />
                state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. Sometimes <br />
                state we think should be local might become global. Server state – Data that comes from an external server that must be <br />
                integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local <br />
                and global UI state.</p>
            <h1>Answer to the question No - 3</h1>
            <p>Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal <br />
                Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can <br />
                inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, <br />
                we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using proto.</p>
            <h1>Answer to the question No - 5</h1>
            <p> JavaScript does not have an explicit array data type. However, you can use the predefined Array object and its methods to <br /> work with arrays in your applications. The Array object has methods for manipulating arrays in various ways, such as joining, <br /> reversing, and sorting them. It has a property for determining the array length and other properties for use with <br /> regular expressions. element0, element1, ..., elementN is a list of values for the array's elements. </p>
            <h1>Answer to the question No - 6</h1>
            <p>All of the factors listed above are interconnected and imply that unit testing undeniably contributes to improving your <br />
                software. Unit testing may seem like a tedious process at first, but in the long run, its benefits are clear. Unit testing <br /> ensures that all code meets quality standards before it’s deployed. This ensures a reliable engineering environment where <br /> quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps <br /> developers write better code, more efficiently.</p>
        </div>
    );
};

export default Blogs;