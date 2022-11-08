# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

### Test writing

The tests were written using JEST JS library, it simple calls the function **deterministicPartitionKey** with different dataset's, more information for each fixture can be found on the **it** message.

### Refactor

- Create new reusable function to create new key, **generateKey**. The first code base uses the same command two times. This is very important to keep control of the same function on big projects, on a small script sometimes can be re-written, as it was.
- Clean unnecessary code when passing the candidate value on the line 16.
- The new refactor is covered by the tests

### Bug fixing

On the last if statement of dpk.js file we found the following code

```javascript
candidate.length > MAX_PARTITION_KEY_LENGTH
```
The correct should be 

```javascript
candidate.length >= MAX_PARTITION_KEY_LENGTH
```