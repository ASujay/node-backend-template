# Backend-app-name

# Pre-commit hooks

- Committing normally runs all the tests present in the application. If all tests pass commit is successfull but even if one test fails then commit fails as well.
- To disable the pre-commit for running test we can use the `--no-verify` suffix. Ex: `git commit -m "Commit message" --no-verify`.
