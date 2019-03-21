## The goal

I want to test a component the uses a custom hook, that uses the useContext hook.

## The problem

When running two consecutive tests with a cleanup between them , my context is persisted from the previous test.

I also tried mocking the context provider between every test run.

How can I achieve a fresh context on every run?

Thanks!!!
