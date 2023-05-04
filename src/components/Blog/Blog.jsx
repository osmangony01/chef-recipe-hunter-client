import React from 'react';
import './Blog.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <div className='acc'>
            

            <div className='pdf'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className='generate-pdf'>Generate Pdf</button>}
                </Pdf>
            </div>
            <h2 className='acc-title'>Question Blog</h2>
            <div className='inner-acc' ref={ref}>

                <Accordion allowZeroExpanded>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <b> Tell us the differences between uncontrolled and controlled components?</b>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>In React, controlled and uncontrolled components refer to how the values of form elements such as input, select, and textarea are managed and updated in a component.</p>

                            <p>An uncontrolled component is a form element that manages its own state internally, without relying on React to manage its value. This means that the component’s value is derived from the DOM and not from React state. To access the value of an uncontrolled component, you must read it directly from the DOM using a ref.</p>

                            <p>
                                A controlled component, on the other hand, is a form element whose value is controlled by React. This means that the value of the component is stored in React state and is updated via a change handler function. To read or update the value of a controlled component, you must use React state methods such as setState() or props.</p>

                            <p>The main benefit of using a controlled component is that it gives you more control over the form data and allows you to perform validation and other operations before submitting the form. It also makes it easier to synchronize the component’s state with other parts of your application.</p>

                            <p>In contrast, uncontrolled components can be useful when you need to build a simple form quickly and don't need to perform any validation or other operations before submitting the form. They also require less code and can be faster to render since they don't rely on React state.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <b>How to validate React props using PropTypes?</b>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p> In React, you can use the PropTypes library to validate the props passed to a component. PropTypes allow you to specify the expected data types and structures of the props, ensuring that they meet certain requirements before being used in the component.</p>

                            <p>Here's an example of how to use PropTypes to validate the props passed to a component:</p>

                            <p>
                                <img src="/images/proptype.jpg" alt="" />
                            </p>
                            <p>In this example, we are using PropTypes to ensure that the message prop passed to the MyComponent component is a string and is required. If the message prop is not a string or is not provided, React will log a warning in the console.</p>


                            <p>You can also use PropTypes to validate objects, arrays, and other complex data types.</p>

                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <b>Tell us the difference between nodejs and express js?</b>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Node.js is a JavaScript runtime environment that allows you to execute JavaScript code outside of a web browser. It provides a set of built-in APIs for file I/O, networking, and other low-level system interactions, making it useful for building server-side applications.
                            </p>
                            <p>
                                Express.js, on the other hand, is a web application framework for Node.js that provides a higher-level, more developer-friendly abstraction for building web applications. It provides a set of features and tools for handling HTTP requests and responses, routing, middleware, and more.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <b>What is a custom hook, and why will you create a custom hook?</b>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>Custom Hooks are functions. Usually, they start with the word “use”. Custom Hooks allow us to access the React ecosystem in terms of hooks, which means we have access to all the known hooks like useState, useMemo, useEffect, etc.
                            </p>

                            <p>You might create a custom hook to:</p>
                            <ul>
                                <li>Abstract complex or repetitive logic that is used in multiple components</li>
                                <li>Share state or logic between components that are not directly related</li>
                                <li>Encapsulate side effects that are not tied to a specific component</li>
                                <li>Simplify or modularize your codebase</li>
                            </ul>

                            <p>By creating custom hooks, you can make your code more reusable, easier to understand, and more maintainable over time.</p>

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div >
    );
};

export default Blog;
