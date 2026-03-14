# ASSIGNMENT - 4
## Title: Child-to-Parent Communication Using Callback Functions

## Introduction
In this assignment, I implemented a React application that demonstrates **child-to-parent communication using callback functions**. In React applications, data typically flows from **parent components to child components through props**. However, in many real-world scenarios, child components need to send data back to their parent components. This assignment demonstrates how this can be achieved using callback functions.

## Project Structure
The project consists of two main components:

- **ParentComponent**
- **ChildComponent**

The **ParentComponent** is responsible for managing the state and displaying the data received from the child component.  
The **ChildComponent** is responsible for triggering an event that sends data back to the parent component.

## Implementation Details

### Parent Component
In the **ParentComponent**, a state variable called **`message`** is created using the `useState` hook. This state variable stores the data received from the child component. A function called **`receiveData`** is defined to update the state variable whenever new data is received.

### Passing Callback Function
The **receiveData** function is passed to the **ChildComponent** as a prop named **`sendDataToParent`**. Passing this function as a prop allows the child component to call the function whenever it needs to send data back to the parent.

### Child Component Interaction
Inside the **ChildComponent**, a button is created that triggers a function called **`handleClick`**. When the button is clicked, the `handleClick` function calls the callback function received from the parent component. The function sends a message string back to the parent component.

### Updating Parent State
When the parent component receives this data, it updates its state variable using the **`setMessage`** function. Because React automatically re-renders components when the state changes, the new message is immediately displayed in the parent component's user interface.

## Key Concepts Learned

- **Callback Functions** enable communication from child components to parent components.
- **Props** can be used to pass functions between components.
- **State Management** allows React components to store and update dynamic data.
- **Lifting State Up** ensures shared data is managed by the parent component.
- React automatically updates the UI when the state changes.

## Conclusion
This assignment helped me understand how callback functions enable communication between components in React. It also demonstrated the concept of **lifting state up**, where the parent component manages shared data while child components interact with it through callbacks. Understanding this pattern is very important for building **scalable and maintainable React applications**, as it ensures that the data flow remains predictable and organized when multiple components interact with each other.